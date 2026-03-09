# Setup Guide

Step-by-step instructions to install and set up the LinkLayerAI Chrome Extension.

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

You can connect multiple exchanges:

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
- **Language**: Select interface language
- **Theme**: Light or dark mode

#### Trading Settings

- **Default Order Type**: Market, Limit, or Stop-Limit
- **Leverage**: Set default leverage (1x-100x)
- **Risk Level**: Conservative, Moderate, or Aggressive
- **Position Size**: Default position size as % of portfolio

#### Notification Settings

- ☑ Price Alerts
- ☑ Trade Confirmations
- ☑ Position Updates
- ☑ Agent Recommendations
- Choose notification method: Browser / Telegram / Email

### Step 5: Security Setup

#### Two-Factor Authentication (2FA)

1. Go to Settings > Security
2. Click "Enable 2FA"
3. Scan QR code with your authenticator app
4. Enter verification code
5. Save backup codes

#### API Key Security

1. Review connected exchanges
2. Verify IP whitelist is configured
3. Set up separate read-only keys
4. Enable withdrawal confirmation

#### Session Settings

- Auto-lock timeout (5, 15, 30, 60 minutes)
- IP restrictions
- Device management

## Verification Checklist

After setup, verify:

- [ ] Extension icon visible in toolbar
- [ ] Account created and logged in
- [ ] At least one exchange connected
- [ ] API keys verified working
- [ ] Settings configured to preference
- [ ] 2FA enabled
- [ ] Notifications tested

## Testing Your Setup

### 1. Test Connection

1. Click the extension icon
2. Check exchange status (should show "Connected")
3. View balance data loading

### 2. Test Read Access

1. Navigate to any exchange page
2. Open LinkLayerAI extension
3. Verify balance and position data

### 3. Test Trade (Optional)

1. Use testnet first!
2. Place small test order
3. Verify execution
4. Check order history

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

### "Extension Not Responding"

- Clear browser cache
- Disable other extensions temporarily
- Restart browser
- Reinstall extension

## Next Steps

Once setup is complete, proceed to [Configuration](./configuration) to customize your experience.

## Need Help?

- Join our [Telegram community](https://t.me/LinkLayerAiOfficial)
- Check our [FAQ](../usage/troubleshooting)
- Open a support ticket on GitHub
