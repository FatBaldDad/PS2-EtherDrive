#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPENWRT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OPENWRT_DIR="${OPENWRT_DIR:-$OPENWRT_ROOT/buildroot}"
OPENWRT_GIT_URL="${OPENWRT_GIT_URL:-https://git.openwrt.org/openwrt/openwrt.git}"
OPENWRT_REF="${OPENWRT_REF:-openwrt-23.05}"

if [ ! -d "$OPENWRT_DIR/.git" ]; then
git clone "$OPENWRT_GIT_URL" "$OPENWRT_DIR"
git -C "$OPENWRT_DIR" checkout "$OPENWRT_REF"
else
echo "OpenWrt tree already exists at $OPENWRT_DIR"
fi

FEEDS_CONF="$OPENWRT_DIR/feeds.conf"
[ -f "$FEEDS_CONF" ] || cp "$OPENWRT_DIR/feeds.conf.default" "$FEEDS_CONF"

if ! grep -q '^src-link etherdrive ' "$FEEDS_CONF"; then
echo "src-link etherdrive $OPENWRT_ROOT/packages" >> "$FEEDS_CONF"
fi

mkdir -p "$OPENWRT_DIR/files"
if [ -d "$OPENWRT_ROOT/files" ]; then
cp -a "$OPENWRT_ROOT/files/." "$OPENWRT_DIR/files/"
fi

echo "OpenWrt environment prepared: $OPENWRT_DIR"
