#
# PS2-EtherDrive — SMB1/NT1 compatibility package for OpenWrt
#

include $(TOPDIR)/rules.mk

PKG_NAME:=etherdrive-smb1
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/etherdrive-smb1
  SECTION:=net
  CATEGORY:=Network
  TITLE:=PS2-compatible SMB1 configuration for EtherDrive
  DEPENDS:=+samba36-server +kmod-usb-storage +block-mount
endef

define Package/etherdrive-smb1/description
  Installs PS2-safe Samba SMB1/NT1 defaults for PS2-EtherDrive.
  This package configures guest SMB1 access for OPL compatibility, creates
  a PS2SMB share, and keeps Samba disabled by default until SMB mode is used.
endef

define Package/etherdrive-smb1/conffiles
/etc/config/samba
/etc/samba/smb.conf.template
endef

define Package/etherdrive-smb1/install
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/samba.config $(1)/etc/config/samba

	$(INSTALL_DIR) $(1)/etc/samba
	$(INSTALL_CONF) ./files/smb.conf.template $(1)/etc/samba/smb.conf.template
endef

$(eval $(call BuildPackage,etherdrive-smb1))
