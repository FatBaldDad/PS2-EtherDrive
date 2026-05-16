# etherdrive-smb1

PS2-compatible SMB1/NT1 configuration package for PS2-EtherDrive OpenWrt builds.

## Security notice

SMB1/NT1 is legacy and insecure.
Use this mode only on a local trusted PS2 network segment.
Do not expose SMB1 to untrusted LANs, WAN, or the public internet.

## What this package installs

- `/etc/config/samba` with service disabled by default (`enabled='0'`)
- `/etc/samba/smb.conf.template` forcing SMB1/NT1 behavior
- `PS2SMB` share defaults to `/mnt/usb/PS2SMB`

For microSD-based setups, change the share path to your mounted microSD path.
