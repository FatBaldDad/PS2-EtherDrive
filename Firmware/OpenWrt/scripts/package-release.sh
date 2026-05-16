#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPENWRT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OPENWRT_DIR="${OPENWRT_DIR:-$OPENWRT_ROOT/buildroot}"
OUT_DIR="${OUT_DIR:-$OPENWRT_ROOT/output/release}"

mkdir -p "$OUT_DIR/targets" "$OUT_DIR/packages"

if [ -d "$OPENWRT_DIR/bin/targets" ]; then
cp -a "$OPENWRT_DIR/bin/targets/." "$OUT_DIR/targets/"
fi

if [ -d "$OPENWRT_DIR/bin/packages" ]; then
cp -a "$OPENWRT_DIR/bin/packages/." "$OUT_DIR/packages/"
fi

find "$OUT_DIR/targets" -type f \( -name '*sysupgrade*.bin' -o -name '*sysupgrade*.img' \) | grep -q . && \
echo "Sysupgrade image(s) packaged" || \
echo "No sysupgrade image found for current profile/target"

echo "Release artifacts staged in: $OUT_DIR"
