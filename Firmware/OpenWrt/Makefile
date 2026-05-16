OPENWRT_DIR ?= $(CURDIR)/buildroot
CONFIG_PRESET ?= $(CURDIR)/configs/etherdrive-hlk7628n.config
SCRIPTS_DIR := $(CURDIR)/scripts

.PHONY: setup feeds menuconfig build clean package

setup:
	OPENWRT_DIR="$(OPENWRT_DIR)" CONFIG_PRESET="$(CONFIG_PRESET)" \
		"$(SCRIPTS_DIR)/setup-build-env.sh"

feeds: setup
	OPENWRT_DIR="$(OPENWRT_DIR)" "$(SCRIPTS_DIR)/update-feeds.sh"

menuconfig: feeds
	cp "$(CONFIG_PRESET)" "$(OPENWRT_DIR)/.config"
	cd "$(OPENWRT_DIR)" && make defconfig && make menuconfig

build: feeds
	OPENWRT_DIR="$(OPENWRT_DIR)" CONFIG_PRESET="$(CONFIG_PRESET)" \
		"$(SCRIPTS_DIR)/build-firmware.sh"

clean:
	OPENWRT_DIR="$(OPENWRT_DIR)" "$(SCRIPTS_DIR)/clean-build.sh"

package: build
	OPENWRT_DIR="$(OPENWRT_DIR)" "$(SCRIPTS_DIR)/package-release.sh"
