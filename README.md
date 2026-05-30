# Fantom 1.1 Web App

> Cyberpunk BLE controller for LILYGO T-Dongle S3

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-9D4EDD?style=flat&logo=github)](https://yourusername.github.io/fantom11-web)

![Theme](https://img.shields.io/badge/Theme-Purple%20Neon-9D4EDD)
![PWA](https://img.shields.io/badge/PWA-Installable-brightgreen)

## Features

- **BLE Connect** — Scan and connect to your T-Dongle S3
- **Script Builder** — Create and send DuckyScript payloads
- **NeoPixel LED** — Control the onboard APA102 LED
- **Live Keyboard** — Type remotely via USB HID
- **AI Assistant** — Voice-to-script with Groq AI
- **WiFi Scanner** — Scan and connect to networks
- **Web Dashboard** — Device status and control
- **PWA Support** — Install to home screen like a native app

## Deploy to GitHub Pages

### Step 1: Fork/Create Repo
1. Create a new repository on GitHub named `fantom11-web`
2. Make it **Public**

### Step 2: Upload Files
Upload these files to your repo:
```
fantom11-web/
├── index.html          # Main web app
├── manifest.json       # PWA manifest
├── sw.js               # Service worker
├── README.md           # This file
└── icons/              # App icons (create this folder)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

### Step 3: Enable GitHub Pages
1. Go to **Settings** → **Pages** (in your repo)
2. **Source**: Deploy from a branch
3. **Branch**: `main` → `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes
6. Your app is live at: `https://yourusername.github.io/fantom11-web`

### Step 4: Install on Phone
1. Open the live URL on your phone
2. Tap **Share** → **Add to Home Screen**
3. Fantom 1.1 installs as a standalone app!

## Custom Domain (Optional)

1. In **Settings** → **Pages**, add your domain
2. Create a `CNAME` file in repo root with your domain
3. Add DNS records:
   - Type: `CNAME`
   - Name: `www` or `@`
   - Value: `yourusername.github.io`

## BLE UUIDs

| Service | UUID |
|---------|------|
| Service | `4fafc201-1fb5-459e-8fcc-c5c9c331914b` |
| CMD (Write) | `beb5483e-36e1-4688-b7f5-ea07361b26a8` |
| Notify | `beb5483f-36e1-4688-b7f5-ea07361b26a8` |

## Firmware Commands

| Command | Description |
|---------|-------------|
| `LED:R,G,B` | Set LED color |
| `SCREEN:ON/OFF` | Toggle display |
| `TYPE:text` | Type text via HID |
| `KEY:name` | Press key |
| `SCRIPT:code` | Run DuckyScript |
| `RUN:file` | Run script from SD |
| `STATUS?` | Get device status |
| `LIST?` | List SD scripts |
| `WIFI:SCAN` | Scan WiFi |
| `WIFI:CONNECT:ssid:pass` | Connect WiFi |
| `REBOOT` | Restart device |
| `FACTORY_RESET` | Reset to defaults |

## Tech Stack

- HTML5 + Vanilla JavaScript
- Web Bluetooth API
- Web Speech API (voice input)
- Groq AI API (script generation)
- CSS3 with neon glow effects
- Service Worker for offline PWA

## License

MIT — Built by LILLY
