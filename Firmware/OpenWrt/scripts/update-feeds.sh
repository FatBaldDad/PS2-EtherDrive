#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPENWRT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OPENWRT_DIR="${OPENWRT_DIR:-$OPENWRT_ROOT/buildroot}"

cd "$OPENWRT_DIR"
./scripts/feeds update -a
./scripts/feeds install -a

echo "Feeds updated and EtherDrive packages installed"
