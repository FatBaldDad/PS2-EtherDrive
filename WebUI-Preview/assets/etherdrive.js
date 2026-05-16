(function () {
  var STORAGE_KEY = 'etherdrivePreviewState';

  var MODE_DETAILS = {
    wifi_only: {
      title: 'WiFi Only',
      description: 'Wireless bridge active while game hosting services remain disabled.',
      services: 'SMB1 off · UDPBD off · UDPFS off'
    },
    udpbd: {
      title: 'UDPBD',
      description: 'Optimized for UDPBD game loading with storage mounted and network path ready.',
      services: 'UDPBD on · SMB1 off · UDPFS off'
    },
    smb1: {
      title: 'SMB1',
      description: 'Classic SMB1 serving mode for OPL and other network share workflows.',
      services: 'SMB1 on · UDPBD off · UDPFS off'
    },
    udpfs: {
      title: 'UDPFS',
      description: 'Preview profile for UDPFS-style storage sharing and fast file service.',
      services: 'UDPFS on · SMB1 off · UDPBD off'
    }
  };

  function createDefaultState() {
    return {
      wifi: {
        networks: ['RetroNet_5G', 'LivingRoomPS2', 'Workshop_AP'],
        selected: 'RetroNet_5G',
        security: 'WPA2-PSK',
        region: 'US',
        signal: '88%'
      },
      network: {
        ip: '192.168.0.90',
        subnet: '255.255.255.0',
        gateway: '192.168.0.1',
        dns: '1.1.1.1',
        ethernetLink: 'Connected @ 100 Mbps'
      },
      mode: 'udpbd',
      storage: {
        devices: ['/dev/sda1 · 512 GB SSD', '/dev/mmcblk0p1 · 256 GB microSD', '/dev/sdb1 · 128 GB USB'],
        selected: '/dev/sda1 · 512 GB SSD',
        filesystem: 'exfat',
        mountPath: '/mnt/etherdrive',
        shareName: 'PS2SMB',
        autoMount: true,
        mounted: 'Mounted',
        freeSpace: '381 GB'
      },
      update: {
        version: '0.2.0-preview',
        channel: 'stable',
        lastCheck: '2026-05-16 22:00 UTC',
        packageName: 'etherdrive-0.2.0-preview.bin'
      },
      system: {
        uptime: '06:42:18',
        temperature: '49°C',
        memory: '62% used',
        storageHealth: 'Healthy',
        lastRefresh: formatTimestamp(new Date())
      }
    };
  }

  function loadState() {
    var stored;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      stored = null;
    }

    if (!stored) {
      return createDefaultState();
    }

    try {
      return Object.assign(createDefaultState(), JSON.parse(stored));
    } catch (error) {
      return createDefaultState();
    }
  }

  var state = loadState();

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      return;
    }
  }

  function formatTimestamp(date) {
    return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' ' +
      pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
  }

  function pad(value) {
    return value < 10 ? '0' + value : String(value);
  }

  function setMessage(text) {
    var element = document.getElementById('message');
    if (element) {
      element.textContent = text || '';
    }
  }

  function setMode(mode) {
    state.mode = mode;
    state.system.lastRefresh = formatTimestamp(new Date());
    saveState();
    renderSharedViews();
    setMessage('Preview only: mode switched to ' + MODE_DETAILS[mode].title + '.');
  }

  function refreshDemoData() {
    var now = new Date();
    state.system.lastRefresh = formatTimestamp(now);
    state.system.uptime = '06:' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    state.wifi.signal = 82 + (now.getSeconds() % 12) + '%';
    state.system.memory = 58 + (now.getMinutes() % 8) + '% used';
    saveState();
    renderSharedViews();
  }

  function populateSelect(selectId, options, selected) {
    var select = document.getElementById(selectId);
    if (!select) {
      return;
    }

    select.innerHTML = '';
    options.forEach(function (option) {
      var item = document.createElement('option');
      item.value = option;
      item.textContent = option;
      item.selected = option === selected;
      select.appendChild(item);
    });
  }

  function renderCards(targetId, pairs) {
    var container = document.getElementById(targetId);
    if (!container) {
      return;
    }

    container.innerHTML = '';
    pairs.forEach(function (pair) {
      var card = document.createElement('article');
      card.className = 'status-card';

      var label = document.createElement('p');
      label.className = 'status-card__label';
      label.textContent = pair.label;

      var value = document.createElement('p');
      value.className = 'status-card__value';
      value.textContent = pair.value;

      card.appendChild(label);
      card.appendChild(value);
      container.appendChild(card);
    });
  }

  function renderModeSummary() {
    var container = document.getElementById('modeSummary');
    if (!container) {
      return;
    }

    var mode = MODE_DETAILS[state.mode];
    container.innerHTML = '';

    var card = document.createElement('article');
    card.className = 'mode-card';
    card.innerHTML = '<h3>' + mode.title + '</h3><p class="mode-summary__value">' + mode.services + '</p><p>' + mode.description + '</p>';
    container.appendChild(card);
  }

  function renderModeDetails() {
    var container = document.getElementById('modeDetails');
    if (!container) {
      return;
    }

    container.innerHTML = '';
    Object.keys(MODE_DETAILS).forEach(function (key) {
      var detail = MODE_DETAILS[key];
      var card = document.createElement('article');
      card.className = 'mode-card';
      card.innerHTML = '<h3>' + detail.title + (key === state.mode ? ' · Active' : '') + '</h3><p>' + detail.description + '</p><p><strong>' + detail.services + '</strong></p>';
      container.appendChild(card);
    });
  }

  function bindModeButtons() {
    var buttons = document.querySelectorAll('.mode-button');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        setMode(button.getAttribute('data-mode'));
        var modeSelect = document.getElementById('modeSelect');
        if (modeSelect) {
          modeSelect.value = state.mode;
        }
      });
    });
  }

  function renderSharedViews() {
    renderCards('quickStatus', [
      { label: 'WiFi SSID', value: state.wifi.selected },
      { label: 'Signal', value: state.wifi.signal },
      { label: 'EtherDrive IP', value: state.network.ip },
      { label: 'Current Mode', value: MODE_DETAILS[state.mode].title },
      { label: 'Storage', value: state.storage.mounted },
      { label: 'Last Refresh', value: state.system.lastRefresh }
    ]);

    renderCards('statusTable', [
      { label: 'WiFi SSID', value: state.wifi.selected },
      { label: 'Signal Strength', value: state.wifi.signal },
      { label: 'Ethernet Link', value: state.network.ethernetLink },
      { label: 'IP Address', value: state.network.ip },
      { label: 'Gateway', value: state.network.gateway },
      { label: 'DNS', value: state.network.dns },
      { label: 'Active Mode', value: MODE_DETAILS[state.mode].title },
      { label: 'Storage Health', value: state.system.storageHealth },
      { label: 'Temperature', value: state.system.temperature },
      { label: 'Memory', value: state.system.memory },
      { label: 'Uptime', value: state.system.uptime },
      { label: 'Last Refresh', value: state.system.lastRefresh }
    ]);

    renderCards('setupSummary', [
      { label: 'Selected SSID', value: state.wifi.selected },
      { label: 'Security', value: state.wifi.security },
      { label: 'Region', value: state.wifi.region },
      { label: 'EtherDrive IP', value: state.network.ip },
      { label: 'Subnet Mask', value: state.network.subnet },
      { label: 'Gateway', value: state.network.gateway }
    ]);

    renderCards('storageStatus', [
      { label: 'Selected Device', value: state.storage.selected },
      { label: 'Filesystem', value: state.storage.filesystem.toUpperCase() },
      { label: 'Mount Path', value: state.storage.mountPath },
      { label: 'Share Name', value: state.storage.shareName },
      { label: 'Auto-Mount', value: state.storage.autoMount ? 'Enabled' : 'Disabled' },
      { label: 'Free Space', value: state.storage.freeSpace }
    ]);

    renderCards('updateStatus', [
      { label: 'Installed Version', value: state.update.version },
      { label: 'Update Channel', value: state.update.channel },
      { label: 'Last Check', value: state.update.lastCheck },
      { label: 'Package', value: state.update.packageName }
    ]);

    renderModeSummary();
    renderModeDetails();
    renderIndicators();
  }

  function renderIndicators() {
    var container = document.getElementById('statusIndicators');
    if (!container) {
      return;
    }

    container.innerHTML = '';
    [
      'Network ready for PS2 link negotiation',
      'Selected service profile staged in browser memory',
      'Storage mount path reserved for preview workflow'
    ].forEach(function (text) {
      var item = document.createElement('article');
      item.className = 'indicator';
      item.innerHTML = '<p class="indicator__label">Indicator</p><p><strong>OK</strong> · ' + text + '</p>';
      container.appendChild(item);
    });
  }

  function initIndex() {
    var button = document.getElementById('refreshOverviewBtn');
    if (button) {
      button.addEventListener('click', function () {
        refreshDemoData();
        setMessage('Demo dashboard refreshed.');
      });
    }
  }

  function initSetup() {
    populateSelect('wifiNetwork', state.wifi.networks, state.wifi.selected);
    document.getElementById('wifiSecurity').value = state.wifi.security;
    document.getElementById('wifiRegion').value = state.wifi.region;
    document.getElementById('deviceIp').value = state.network.ip;
    document.getElementById('subnetMask').value = state.network.subnet;
    document.getElementById('gatewayIp').value = state.network.gateway;
    document.getElementById('dnsIp').value = state.network.dns;

    document.getElementById('scanWifiBtn').addEventListener('click', function () {
      state.wifi.networks = ['RetroNet_5G', 'LivingRoomPS2', 'Workshop_AP', 'GarageBridge'];
      populateSelect('wifiNetwork', state.wifi.networks, state.wifi.selected);
      setMessage('Preview only: found ' + state.wifi.networks.length + ' demo SSIDs.');
    });

    document.getElementById('wifiSetupForm').addEventListener('submit', function (event) {
      event.preventDefault();
      state.wifi.selected = document.getElementById('wifiNetwork').value;
      state.wifi.security = document.getElementById('wifiSecurity').value;
      state.wifi.region = document.getElementById('wifiRegion').value;
      state.update.lastCheck = formatTimestamp(new Date()) + ' UTC';
      saveState();
      renderSharedViews();
      setMessage('Preview only: WiFi setup saved in browser storage. Password input stays local to the page.');
    });

    document.getElementById('ipSetupForm').addEventListener('submit', function (event) {
      event.preventDefault();
      state.network.ip = document.getElementById('deviceIp').value;
      state.network.subnet = document.getElementById('subnetMask').value;
      state.network.gateway = document.getElementById('gatewayIp').value;
      state.network.dns = document.getElementById('dnsIp').value;
      state.system.lastRefresh = formatTimestamp(new Date());
      saveState();
      renderSharedViews();
      setMessage('Preview only: static IP settings updated.');
    });
  }

  function initStatus() {
    var button = document.getElementById('refreshStatusBtn');
    if (button) {
      button.addEventListener('click', function () {
        refreshDemoData();
        setMessage('Demo status refreshed.');
      });
    }
  }

  function initModes() {
    var select = document.getElementById('modeSelect');
    if (select) {
      select.value = state.mode;
    }

    var form = document.getElementById('modeForm');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        setMode(select.value);
      });
    }
  }

  function initStorage() {
    populateSelect('storageDevice', state.storage.devices, state.storage.selected);
    document.getElementById('storageFilesystem').value = state.storage.filesystem;
    document.getElementById('storageMount').value = state.storage.mountPath;
    document.getElementById('shareName').value = state.storage.shareName;
    document.getElementById('autoMount').checked = state.storage.autoMount;

    document.getElementById('scanStorageBtn').addEventListener('click', function () {
      state.storage.devices = ['/dev/sda1 · 512 GB SSD', '/dev/mmcblk0p1 · 256 GB microSD', '/dev/sdb1 · 128 GB USB', '/dev/sdc1 · 64 GB USB'];
      populateSelect('storageDevice', state.storage.devices, state.storage.selected);
      setMessage('Preview only: refreshed demo storage list.');
    });

    document.getElementById('storageForm').addEventListener('submit', function (event) {
      event.preventDefault();
      state.storage.selected = document.getElementById('storageDevice').value;
      state.storage.filesystem = document.getElementById('storageFilesystem').value;
      state.storage.mountPath = document.getElementById('storageMount').value;
      state.storage.shareName = document.getElementById('shareName').value;
      state.storage.autoMount = document.getElementById('autoMount').checked;
      saveState();
      renderSharedViews();
      setMessage('Preview only: storage settings saved.');
    });
  }

  function initUpdate() {
    document.getElementById('updateChannel').value = state.update.channel;

    document.getElementById('updateChannel').addEventListener('change', function (event) {
      state.update.channel = event.target.value;
      saveState();
      renderSharedViews();
      setMessage('Preview only: update channel changed to ' + state.update.channel + '.');
    });

    document.getElementById('verifyUpdateBtn').addEventListener('click', function () {
      var firmwareInput = document.getElementById('firmwareImage');
      var selectedFile = firmwareInput.files[0];
      if (selectedFile) {
        state.update.packageName = selectedFile.name;
      }
      state.update.lastCheck = formatTimestamp(new Date()) + ' UTC';
      saveState();
      renderSharedViews();
      setMessage('Preview only: firmware image verified.');
    });

    document.getElementById('flashUpdateBtn').addEventListener('click', function () {
      var rebootText = document.getElementById('rebootAfter').checked ? ' with reboot queued.' : '.';
      setMessage('Preview only: OTA update mock run started' + rebootText);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    bindModeButtons();
    renderSharedViews();

    switch (document.body.getAttribute('data-page')) {
      case 'index':
        initIndex();
        break;
      case 'setup':
        initSetup();
        break;
      case 'status':
        initStatus();
        break;
      case 'modes':
        initModes();
        break;
      case 'storage':
        initStorage();
        break;
      case 'update':
        initUpdate();
        break;
      default:
        break;
    }
  });
})();
