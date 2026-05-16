#
# PS2-EtherDrive — Optional third-party OpenWrt package
#
# udpfsd: UDPFS server for PlayStation 2 (Neutrino/NHDDL-style loading)
# Original project: https://github.com/pcm720/udpfsd
# Author: Ivan V (pcm720)
# License: BSD-3-Clause
#
# This Makefile integrates udpfsd as an optional external package for the
# PS2-EtherDrive OpenWrt firmware.  It does not modify or relicense the
# upstream source; all copyright and license terms are preserved as-is.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=udpfsd
PKG_VERSION:=0.1.5
PKG_RELEASE:=1

PKG_SOURCE_PROTO:=git
PKG_SOURCE_URL:=https://github.com/pcm720/udpfsd.git
PKG_SOURCE_VERSION:=96762631840b7eae26486bd45eb3fc409df55326
PKG_MIRROR_HASH:=skip

PKG_MAINTAINER:=Ivan V (pcm720) <https://github.com/pcm720>
PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENSE

PKG_BUILD_DEPENDS:=golang/host
PKG_BUILD_PARALLEL:=1
PKG_USE_MIPS16:=0

GO_PKG:=github.com/pcm720/udpfsd
GO_PKG_BUILD_PKG:=github.com/pcm720/udpfsd/cmd/udpfsd

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/golang/golang-package.mk

define Package/udpfsd
  SECTION:=net
  CATEGORY:=Network
  TITLE:=UDPFS/UDPBD server for PlayStation 2
  URL:=https://github.com/pcm720/udpfsd
  DEPENDS:=$(GO_ARCH_DEPENDS) +kmod-usb-storage +block-mount
endef

define Package/udpfsd/description
  udpfsd is a Go implementation of the UDPFS/UDPRDMA server, used to serve
  game files and block-device images to a PlayStation 2 over the network.

  Supported protocols:
    - UDPFS (filesystem directory serving)
    - UDPBD (block-device image serving)

  Transparent on-the-fly decompression of CSO and ZSO images is included.
  CHD support requires building from source with CGO + libchdr.

  Intended for use with Neutrino / NHDDL-style network game loading on PS2.
  PS2-EtherDrive users can select UDPFS mode as an alternative to SMB1 or FTP.

  Original author: Ivan V (pcm720) — https://github.com/pcm720/udpfsd
  License: BSD-3-Clause (see References/Third-Party-Licenses/udpfsd-BSD-3-Clause.md)
endef

define Package/udpfsd/conffiles
/etc/config/udpfsd
endef

define Package/udpfsd/install
	$(call GoPackage/Package/Install/Bin,$(PKG_INSTALL_DIR))

	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) $(PKG_INSTALL_DIR)/usr/bin/udpfsd $(1)/usr/sbin/udpfsd

	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/udpfsd.init $(1)/etc/init.d/udpfsd

	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/udpfsd.config $(1)/etc/config/udpfsd
endef

$(eval $(call GoBinPackage,udpfsd))
$(eval $(call BuildPackage,udpfsd))
