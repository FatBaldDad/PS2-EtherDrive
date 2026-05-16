#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPENWRT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OPENWRT_DIR="${OPENWRT_DIR:-$OPENWRT_ROOT/buildroot}"

if [ -d "$OPENWRT_DIR" ]; then
cd "$OPENWRT_DIR"
make clean
fi

echo "OpenWrt build artifacts cleaned"
