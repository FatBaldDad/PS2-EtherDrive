include $(TOPDIR)/rules.mk

PKG_NAME:=etherdrive-udpbd
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

include $(INCLUDE_DIR)/package.mk

define Package/etherdrive-udpbd
  SECTION:=net
  CATEGORY:=Network
  TITLE:=PS2-EtherDrive UDPBD mode integration
  DEPENDS:=+udpfsd +block-mount +kmod-usb-storage
endef

define Package/etherdrive-udpbd/description
  EtherDrive integration package for UDPBD mode using udpfsd backend.
  Preserves original third-party licensing and attribution.
endef

define Package/etherdrive-udpbd/install
# Intentionally empty: runtime files are installed by the udpfsd package.
true
endef

$(eval $(call BuildPackage,etherdrive-udpbd))
