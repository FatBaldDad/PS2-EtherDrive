include $(TOPDIR)/rules.mk

PKG_NAME:=etherdrive-udpfs
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/etherdrive-udpfs
  SECTION:=net
  CATEGORY:=Network
  TITLE:=PS2-EtherDrive UDPFS mode integration
  DEPENDS:=+udpfsd +block-mount +kmod-usb-storage
endef

define Package/etherdrive-udpfs/description
  EtherDrive integration package for UDPFS mode.
  Uses third-party udpfsd by Ivan V (pcm720) without relicensing or source rewrite.
endef

define Package/etherdrive-udpfs/install
true
endef

$(eval $(call BuildPackage,etherdrive-udpfs))
