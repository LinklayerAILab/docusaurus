# Configuration

Advanced configuration options for the LinkLayerAI Chrome Extension.

## Exchange-Specific Configuration

### Binance

#### API Key Permissions

```
Read: ☑ Required
Spot Trading: ☐ Optional
Margin Trading: ☐ Optional
Futures Trading: ☐ Optional
Withdraw: ☐ Not Recommended
```

#### IP Whitelist

1. Go to API Management
2. Add your IP address (find it at [ifconfig.me](https://ifconfig.me))
3. Save restrictions
4. Test connection

#### Recommended Settings

- **Test Network**: Use Binance Testnet first
- **Order Types**: Market, Limit, OCO
- **Leverage**: Start with 1x-5x
- **Risk Limit**: Set daily loss limits

### OKX

#### API Key Setup

1. Navigate to API Management
2. Create API key with trade password
3. Set IP restrictions
4. Choose API version (v5 recommended)

#### Configuration Options

- **Trade Password**: Required for trading
- **API V5**: Latest version with more features
- **Universal Account**: For unified margin trading

### Bybit

#### API Key Types

- **Inverse Derivatives**: For BTC/ETH derivatives
- **USDT Perpetual**: For USDT-margined contracts
- **Spot**: For spot trading

#### Configuration

- **API Key Generation**: Create separate keys for each product
- **IP Restriction**: Highly recommended
- **Read/Write**: Set appropriate permissions

### Bitget

#### Setup Steps

1. Create API key in account settings
2. Set passphrase
3. Configure IP whitelist
4. Test connection

## Advanced Settings

### Agent Configuration

#### Alpha Agent

```javascript
{
  "riskLevel": "moderate",  // conservative | moderate | aggressive
  "maxPositionSize": 5,    // % of portfolio
  "stopLoss": 2,           // % from entry
  "takeProfit": 5,         // % from entry
  "maxOpenPositions": 3,
  "cooldownPeriod": 3600   // seconds between trades
}
```

#### Perps Agent

```javascript
{
  "leverage": 5,           // 1x-100x
  "fundingRateThreshold": 0.01,
  "autoRollover": true,
  "maxFundingCost": 100,   // USDT
  "positionHedging": false
}
```

#### Trading Agent

```javascript
{
  "strategy": "momentum",  // momentum | meanReversion | arbitrage
  "timeframe": "1h",
  "indicators": ["RSI", "MACD", "BB"],
  "rebalanceFrequency": 86400,  // seconds
  "volatilityAdjustment": true
}
```

### Notification Configuration

#### Telegram Integration

1. Create Telegram bot via [@BotFather](https://t.me/botfather)
2. Get bot token
3. Add LinkLayerAI bot to your group
4. Enter chat ID in extension settings

#### Alert Types

- **Price Alerts**: When price crosses threshold
- **Volume Alerts**: Unusual volume spikes
- **Agent Signals**: AI-generated trading signals
- **Position Alerts**: Entry, exit, stop-loss hits
- **System Alerts**: Connection issues, errors

#### Alert Frequency

- **Immediate**: Critical alerts
- **Hourly Digest**: Summary of activity
- **Daily Report**: End-of-day summary
- **Weekly Insights**: Performance analysis

## Risk Management Configuration

### Portfolio-Level Settings

```javascript
{
  "maxDailyLoss": 500,           // USDT
  "maxWeeklyLoss": 1000,         // USDT
  "maxOpenExposure": 50,         // % of portfolio
  "correlationLimit": 0.7,       // max correlation between positions
  "concentrationLimit": 20       // max % in single asset
}
```

### Position-Level Settings

```javascript
{
  "defaultStopLoss": 2,          // %
  "defaultTakeProfit": 4,        // %
  "trailingStop": true,
  "trailingStopDistance": 1.5,   // %
  "autoScaleOut": false,
  "scaleOutLevels": [50, 75, 100] // % of position
}
```

## Customization Options

### UI/UX Settings

#### Dashboard Layout

- **Widget Order**: Drag to reorder
- **Chart Type**: Candlestick, Line, Area
- **Time Zones**: Exchange time, UTC, Local
- **Color Scheme**: Green/Red or custom

#### Display Preferences

- **Number Format**: Decimal places
- **Currency Display**: Base, Quote, USD
- **Compact Mode**: Show/hide details
- **Animation**: Enable/disable

### Performance Settings

#### Data Refresh Rate

- **Real-Time**: 100ms (API limits may apply)
- **Fast**: 1 second
- **Normal**: 5 seconds
- **Power Saving**: 30 seconds

#### Memory Management

- **Cache Size**: Limit cached data
- **History Retention**: Days to keep
- **Background Updates**: Enable/disable

## Security Configuration

### Advanced Security

#### IP Whitelist Configuration

1. Add static IP addresses
2. Set up VPN for dynamic IP
3. Configure multiple IPs (home, office)
4. Regularly review allowed IPs

#### Session Management

- **Auto-Lock**: After inactivity period
- **Device Limits**: Maximum concurrent sessions
- **Session Duration**: Time before re-authentication
- **Logout All**: Emergency logout

#### Audit Logging

- Log all API calls
- Track trading activity
- Monitor configuration changes
- Export logs for analysis

## Backup and Restore

### Export Configuration

1. Go to Settings > Advanced
2. Click "Export Configuration"
3. Save JSON file
4. Store securely (encrypted)

### Import Configuration

1. Go to Settings > Advanced
2. Click "Import Configuration"
3. Select JSON file
4. Verify settings
5. Apply changes

## Testing Configuration

### Testnet Setup

1. Configure testnet API keys
2. Use testnet exchanges:
   - Binance Futures Testnet
   - Bybit Testnet
3. Test all features
4. Verify settings work as expected

### Dry Run Mode

- Enable in settings
- Simulate trades without execution
- Test agent strategies
- Validate configuration

## Troubleshooting Configuration Issues

### Invalid Configuration

- Check JSON syntax
- Verify parameter ranges
- Review API permissions
- Check exchange-specific requirements

### Performance Issues

- Reduce refresh rate
- Clear cache
- Disable unnecessary features
- Check network speed

## Next Steps

After configuration, explore [Basic Usage](../usage/basic-usage) to start using the extension effectively.

## Support

- Configuration templates in our GitHub repo
- Community configurations in Telegram
- Video tutorials on YouTube
