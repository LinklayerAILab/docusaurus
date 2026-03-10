# Chrome Extension User Guide

A step-by-step guide to installing and using the LinkLayerAI Chrome extension.

## Installation Steps

### Step 1: Download the Extension

1. Visit the [Chrome Web Store](https://chrome.google.com/webstore)
2. Search for "LinkLayerAI"
3. Click "Add to Chrome"
4. Confirm installation

**Alternative Installation:**

1. Download the `.crx` file from our [GitHub releases](https://github.com/LinklayerAILab/releases)
2. Open Chrome and go to `chrome://extensions`
3. Enable "Developer mode" (toggle in top right)
4. Drag and drop the `.crx` file

### Step 2: Initial Setup

After installation, you'll see the LinkLayerAI icon in your browser toolbar.

1. Click the LinkLayerAI icon
2. Click "Get Started"
3. Create your account or sign in
4. Set up your security settings

### Step 3: Connect Exchanges

1. Click "Add Exchange"
2. Select your exchange (Binance, OKX, Bybit, Bitget)
3. Enter your API keys:
   - **API Key**: Your public API key
   - **Secret Key**: Your private API secret
   - **Passphrase** (if required): Some exchanges require this
4. Set permissions:
   - ☑ Read (required)
   - ☑ Trade (optional)
   - ☐ Withdraw (not recommended)
5. Click "Connect"

### Step 4: Configure Settings

#### General Settings

- **Default Exchange**: Set your primary exchange
- **Currency**: Choose your preferred display currency
- **Theme**: Light or dark mode

#### Trading Settings

- **Default Order Type**: Market, Limit, or Stop-Limit
- **Leverage**: Set default leverage (1x-100x)
- **Risk Level**: Conservative, Moderate, or Aggressive

## Verification Checklist

After setup, verify:

- [ ] Extension icon visible in toolbar
- [ ] Account created and logged in
- [ ] At least one exchange connected
- [ ] API keys verified working
- [ ] Settings configured to preference

## Testing Your Setup

### Test Connection

1. Click the extension icon
2. Check exchange status (should show "Connected")
3. View balance data loading

### Test Read Access

1. Navigate to any exchange page
2. Open LinkLayerAI extension
3. Verify balance and position data

## Common Setup Issues

### "Invalid API Key"

- Verify API key is copied correctly
- Check API key permissions
- Ensure IP whitelist is configured
- Try generating new API keys

### "Connection Failed"

- Check internet connection
- Verify exchange API is operational
- Disable VPN or proxy
- Try different browser

## Next Steps

Once setup is complete, explore [Basic Usage](./basic-usage) to start using the extension.
