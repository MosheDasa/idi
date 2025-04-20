# Electron Monorepo with React and TypeScript

This project contains two Electron applications that share common configuration files:

1. Disk App - A main window application
2. Notification App - A popup notification window

## Project Structure

```
.
├── apps/
│   ├── disk/           # Main window application
│   └── notification/   # Popup notification application
├── webpack.config.js   # Shared webpack configuration
├── package.json        # Shared dependencies and scripts
└── tsconfig.json      # Shared TypeScript configuration
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

```bash
npm install
```

## Development

To run the disk app in development mode:

```bash
npm run dev:disk
```

To run the notification app in development mode:

```bash
npm run dev:notification
```

## Building

To build the disk app:

```bash
npm run build:disk
```

To build the notification app:

```bash
npm run build:notification
```

## Running Built Apps

To run the built disk app:

```bash
npm run start:disk
```

To run the built notification app:

```bash
npm run start:notification
```

## Features

- Disk App: Shows a main window with the title "ברוך הבא"
- Notification App: Shows a popup window at the bottom-right corner with "שלום משה" and auto-closes after 5 seconds
- Shared configuration for both apps
- Hot reloading in development mode
- TypeScript support
- React with Bootstrap styling
