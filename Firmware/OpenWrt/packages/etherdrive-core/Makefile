include $(TOPDIR)/rules.mk

PKG_NAME:=etherdrive-core
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/etherdrive-core
  SECTION:=net
  CATEGORY:=Network
  TITLE:=PS2-EtherDrive core firmware package set
  DEPENDS:= \
	+uhttpd +block-mount +samba36-server \
	+kmod-usb-core +kmod-usb2 +kmod-usb-storage \
	+kmod-fs-ext4 +kmod-fs-vfat +e2fsprogs +dosfstools +blkid \
	+etherdrive-smb1 +etherdrive-udpfs +etherdrive-udpbd +etherdrive-webui
endef

define Package/etherdrive-core/description
  Meta package for the PS2-EtherDrive OpenWrt firmware profile on HLK-7628N.
  Pulls in WebUI, SMB1 compatibility, UDPFS/UDPBD support, USB storage, and
  required filesystem utilities for integrated firmware images.
endef

define Package/etherdrive-core/install
# Intentionally empty: meta package that only aggregates dependencies.
true
endef

$(eval $(call BuildPackage,etherdrive-core))
