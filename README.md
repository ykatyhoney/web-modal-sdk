# Lucky Web SDK

A React-based modal SDK for displaying interactive reward campaigns with QR codes, email/SMS redemption, and customizable themes.

## Features

- 🎨 Customizable modal with light/dark mode support
- 📱 Responsive design for all screen sizes
- 🎯 Interactive question/answer campaigns
- 🎁 Reward display with QR code generation
- 📧 Email and SMS redemption options
- ⚡ Built with React, TypeScript, and GraphQL
- 🎭 Smooth animations powered by GSAP

## Installation

```bash
# Using Yarn (recommended)
yarn add lucky-web-sdk

# Using npm
npm install lucky-web-sdk
```

## Quick Start

### 1. Add the Modal Container

Add a div with the id `lucky` to your HTML where you want the modal to be rendered:

```html
<div id="lucky"></div>
```

### 2. Import and Use the SDK

```typescript
import { showLuckyModal, hideLuckyModal } from 'lucky-web-sdk';

// Show the modal with your API key
showLuckyModal('your-api-key', {
  darkMode: false, // Optional: enable dark mode
  momentId: 'optional-moment-id', // Optional: specific campaign moment
  onFinish: (success) => {
    console.log('Modal closed', success);
  }
});

// Hide the modal programmatically
hideLuckyModal();
```

### 3. Complete Example

```tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { showLuckyModal } from 'lucky-web-sdk';

function App() {
  const handleOpenModal = () => {
    showLuckyModal('your-api-key', {
      darkMode: false,
      onFinish: (success) => {
        if (success) {
          console.log('User completed the campaign!');
        }
      }
    });
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Open Reward Modal</Button>
      <div id="lucky" />
    </div>
  );
}
```

## API Reference

### `showLuckyModal(authKey: string, config?: ILuckyConfig): void`

Displays the Lucky modal with the provided configuration.

#### Parameters

- `authKey` (required): Your API key for authentication
- `config` (optional): Configuration object with the following properties:
  - `momentId?: string` - Optional moment ID for specific campaign moments
  - `darkMode?: boolean` - Enable dark mode theme (default: `false`)
  - `onFinish?: (success: boolean) => void` - Callback function called when modal is closed

#### Example

```typescript
showLuckyModal('your-api-key', {
  momentId: 'campaign-moment-123',
  darkMode: true,
  onFinish: (success) => {
    if (success) {
      // Handle successful completion
    }
  }
});
```

### `hideLuckyModal(): void`

Programmatically hides and unmounts the modal.

#### Example

```typescript
import { hideLuckyModal } from 'lucky-web-sdk';

// Hide the modal
hideLuckyModal();
```

## Configuration

### Environment

The SDK automatically detects the environment:
- **Development**: Uses `http://localhost:777/gql` for GraphQL API
- **Production**: Uses `https://api.luckylabs.io/gql` for GraphQL API

The environment is determined by checking if the current URL contains `localhost`.

## Development

### Prerequisites

- Node.js 16+ 
- Yarn (recommended) or npm

### Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build the project
yarn build

# Create bundled SDK
yarn bundle

# Run sample server
yarn sample
```

### Project Structure

```
src/
├── components/
│   ├── modal/              # Main modal component
│   ├── modal-content/      # Modal page components
│   └── shared-components/  # Reusable components
├── example/                # Example usage
├── shared/                 # Shared utilities and constants
├── types/                  # TypeScript type definitions
└── luckyWebSdk.tsx        # Main SDK entry point
```

## Building

The SDK can be built as a standalone bundle:

```bash
yarn bundle
```

This creates `dist/lucky-web-sdk.js` which can be included directly in HTML:

```html
<script src="path/to/lucky-web-sdk.js"></script>
```

Note: When using the bundled version, React and ReactDOM must be available globally.

## Browser Support

- Chrome (last 1 version)
- Firefox (last 1 version)
- Safari (last 1 version)
- Edge (latest)

## Dependencies

### Core
- React 18.3+
- TypeScript 5.5+
- Apollo Client (GraphQL)
- Styled Components

### UI
- React Bootstrap
- Bootstrap 5.3+
- GSAP (animations)
- QRCode React

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For issues and questions, please open an issue on GitHub.
