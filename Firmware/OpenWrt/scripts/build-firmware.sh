#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPENWRT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OPENWRT_DIR="${OPENWRT_DIR:-$OPENWRT_ROOT/buildroot}"
CONFIG_PRESET="${CONFIG_PRESET:-$OPENWRT_ROOT/configs/etherdrive-hlk7628n.config}"
JOBS="${JOBS:-$(nproc)}"

if [ ! -f "$CONFIG_PRESET" ]; then
echo "Missing config preset: $CONFIG_PRESET" >&2
exit 1
fi

cp "$CONFIG_PRESET" "$OPENWRT_DIR/.config"
cd "$OPENWRT_DIR"
make defconfig
make -j"$JOBS"

echo "Build completed. Check $OPENWRT_DIR/bin/targets for firmware and sysupgrade images (if generated)."
