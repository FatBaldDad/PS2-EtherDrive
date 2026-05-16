(function () {
  function api(action, data, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/cgi-bin/etherdrive-api?action=' + encodeURIComponent(action), true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      var out = {};
      try { out = JSON.parse(xhr.responseText || '{}'); } catch (e) {}
      done(xhr.status, out);
    };

    var body = [];
    for (var k in (data || {})) {
      if (!Object.prototype.hasOwnProperty.call(data, k)) continue;
      body.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
    }
    xhr.send(body.join('&'));
  }

  function setMsg(text) {
    var m = document.getElementById('message');
    if (m) m.textContent = text || '';
  }

  function fillGrid(elId, pairs) {
    var el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = '';
    var keys = Object.keys(pairs || {});
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var kd = document.createElement('div');
      kd.className = 'k';
      kd.textContent = k;
      var vd = document.createElement('div');
      vd.className = 'v';
      vd.textContent = pairs[k];
      el.appendChild(kd);
      el.appendChild(vd);
    }
  }

  function loadStatus(targetId) {
    api('status', {}, function (_, r) {
      if (!r || !r.ok) return;
      fillGrid(targetId, {
        'IP Address': r.ip,
        'Gateway': r.gateway,
        'WiFi SSID': r.wifi_ssid,
        'Ethernet Link': r.eth_link,
        'Storage Mounted': r.storage_mounted,
        'Active Mode': r.mode,
        'SMB1 Service': r.smb1,
        'UDPBD Service': r.udpbd,
        'UDPFS Service': r.udpfs
      });
      var radios = document.querySelectorAll('input[name="mode"]');
      for (var i = 0; i < radios.length; i++) {
        radios[i].checked = (radios[i].value === r.mode);
      }
    });
  }

  function initIndex() {
    loadStatus('quickStatus');
    var modeForm = document.getElementById('modeForm');
    if (!modeForm) return;
    modeForm.onsubmit = function (e) {
      e.preventDefault();
      var selected = document.querySelector('input[name="mode"]:checked');
      if (!selected) return setMsg('Select a mode first.');
      api('set_mode', { mode: selected.value }, function (_, r) {
        setMsg((r && r.message) ? r.message : 'Mode updated.');
        loadStatus('quickStatus');
      });
    };
  }

  function initSetup() {
    var scanBtn = document.getElementById('scanWifiBtn');
    if (scanBtn) {
      scanBtn.onclick = function () {
        setMsg('Scanning WiFi...');
        api('wifi_scan', {}, function (_, r) {
          var sel = document.getElementById('wifi_ssid');
          if (!sel) return;
          sel.innerHTML = '<option value="">-- Select SSID --</option>';
          var ssids = (r && r.ssids) ? r.ssids : [];
          for (var i = 0; i < ssids.length; i++) {
            var opt = document.createElement('option');
            opt.value = ssids[i];
            opt.textContent = ssids[i];
            sel.appendChild(opt);
          }
          setMsg('Found ' + ssids.length + ' SSID(s).');
        });
      };
    }

    var setupForm = document.getElementById('setupForm');
    if (setupForm) {
      setupForm.onsubmit = function (e) {
        e.preventDefault();
        api('setup_save', {
          wifi_ssid: document.getElementById('wifi_ssid').value,
          wifi_password: document.getElementById('wifi_password').value,
          ps2_ip: document.getElementById('ps2_ip').value,
          gateway: document.getElementById('gateway').value,
          subnet: document.getElementById('subnet').value
        }, function (_, r) {
          setMsg((r && r.message) ? r.message : 'Saved setup values.');
        });
      };
    }

    var rebootBtn = document.getElementById('saveRebootBtn');
    if (rebootBtn) {
      rebootBtn.onclick = function () {
        api('setup_reboot', {
          wifi_ssid: document.getElementById('wifi_ssid').value,
          wifi_password: document.getElementById('wifi_password').value,
          ps2_ip: document.getElementById('ps2_ip').value,
          gateway: document.getElementById('gateway').value,
          subnet: document.getElementById('subnet').value
        }, function (_, r) {
          setMsg((r && r.message) ? r.message : 'Saved. Reboot requested.');
        });
      };
    }
  }

  function initStatus() {
    loadStatus('statusTable');
    var btn = document.getElementById('refreshStatusBtn');
    if (btn) btn.onclick = function () { loadStatus('statusTable'); };
  }

  function initStorage() {
    function refreshStorageStatus() {
      api('storage_status', {}, function (_, r) {
        if (!r || !r.ok) return;
        fillGrid('storageStatus', {
          'Device': r.storage_device,
          'Mount Path': r.storage_mount,
          'Share Path': r.share_path,
          'Auto Mount': r.auto_mount,
          'Mounted': r.mounted,
          'Format': 'Placeholder'
        });
      });
    }

    var scanBtn = document.getElementById('scanStorageBtn');
    if (scanBtn) {
      scanBtn.onclick = function () {
        setMsg('Scanning storage devices...');
        api('storage_list', {}, function (_, r) {
          var sel = document.getElementById('storage_device');
          if (!sel) return;
          sel.innerHTML = '<option value="">-- Select device --</option>';
          var devices = (r && r.devices) ? r.devices : [];
          for (var i = 0; i < devices.length; i++) {
            var opt = document.createElement('option');
            opt.value = devices[i];
            opt.textContent = devices[i];
            sel.appendChild(opt);
          }
          setMsg('Found ' + devices.length + ' device(s).');
        });
      };
    }

    var form = document.getElementById('storageForm');
    if (form) {
      form.onsubmit = function (e) {
        e.preventDefault();
        api('storage_save', {
          storage_device: document.getElementById('storage_device').value,
          storage_mount: document.getElementById('storage_mount').value,
          share_name: document.getElementById('share_name').value,
          auto_mount: document.getElementById('auto_mount').checked ? '1' : '0'
        }, function (_, r) {
          setMsg((r && r.message) ? r.message : 'Storage settings saved.');
          refreshStorageStatus();
        });
      };
    }

    refreshStorageStatus();
  }

  function initUpdate() {
    api('update_status', {}, function (_, r) {
      fillGrid('updateStatus', {
        'Current Firmware Version': (r && r.firmware_version) ? r.firmware_version : 'unknown',
        'Update Channel': (r && r.update_channel) ? r.update_channel : 'stable',
        'Verify': 'Placeholder',
        'Flashing': 'Placeholder'
      });
    });

    var verifyBtn = document.getElementById('verifyBtn');
    if (verifyBtn) verifyBtn.onclick = function () { setMsg('Verify placeholder executed.'); };

    var flashBtn = document.getElementById('flashBtn');
    if (flashBtn) {
      flashBtn.onclick = function () {
        var reboot = document.getElementById('reboot_after').checked ? '1' : '0';
        api('update_flash_placeholder', { reboot_after: reboot }, function (_, r) {
          setMsg((r && r.message) ? r.message : 'Flash placeholder executed.');
        });
      };
    }
  }

  var page = document.body.getAttribute('data-page');
  if (page === 'index') initIndex();
  if (page === 'setup') initSetup();
  if (page === 'status') initStatus();
  if (page === 'storage') initStorage();
  if (page === 'update') initUpdate();
})();
