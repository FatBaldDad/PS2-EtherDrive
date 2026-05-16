include $(TOPDIR)/rules.mk

PKG_NAME:=etherdrive-webui
PKG_VERSION:=0.1.0
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/etherdrive-webui
  SECTION:=net
  CATEGORY:=Network
  TITLE:=PS2-EtherDrive lightweight WebUI and mode/storage management
  DEPENDS:= \
	+uhttpd +uci +iwinfo +block-mount +mount-utils \
	+kmod-usb-core +kmod-usb2 +kmod-usb-storage \
	+kmod-fs-ext4 +kmod-fs-vfat +e2fsprogs +dosfstools +blkid \
	+etherdrive-smb1 +etherdrive-udpfs
endef

define Package/etherdrive-webui/description
  Installs the first PS2-EtherDrive WebUI, setup pages, storage/mode manager,
  and lightweight shell backend scripts using UCI.
endef

define Package/etherdrive-webui/conffiles
/etc/config/etherdrive
endef

define Package/etherdrive-webui/install
	$(INSTALL_DIR) $(1)/www
	$(INSTALL_DATA) ./files/www/index.html $(1)/www/index.html
	$(INSTALL_DATA) ./files/www/setup.html $(1)/www/setup.html
	$(INSTALL_DATA) ./files/www/status.html $(1)/www/status.html
	$(INSTALL_DATA) ./files/www/storage.html $(1)/www/storage.html
	$(INSTALL_DATA) ./files/www/update.html $(1)/www/update.html

	$(INSTALL_DIR) $(1)/www/assets
	$(INSTALL_DATA) ./files/www/assets/etherdrive.css $(1)/www/assets/etherdrive.css
	$(INSTALL_DATA) ./files/www/assets/etherdrive.js $(1)/www/assets/etherdrive.js

	$(INSTALL_DIR) $(1)/www/cgi-bin
	$(INSTALL_BIN) ./files/www/cgi-bin/etherdrive-api $(1)/www/cgi-bin/etherdrive-api

	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) ./files/usr/bin/etherdrive-mode $(1)/usr/bin/etherdrive-mode
	$(INSTALL_BIN) ./files/usr/bin/etherdrive-storage $(1)/usr/bin/etherdrive-storage
	$(INSTALL_BIN) ./files/usr/bin/etherdrive-status $(1)/usr/bin/etherdrive-status

	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/etc/config/etherdrive $(1)/etc/config/etherdrive

	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/etc/init.d/etherdrive $(1)/etc/init.d/etherdrive
endef

$(eval $(call BuildPackage,etherdrive-webui))
