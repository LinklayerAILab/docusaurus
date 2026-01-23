# Technical Architectur

LinkLayerAI's technical system is goal-oriented towards the three core product lines and implemented with a verifiable, auditable engineering structure.

- Alpha Agent (On-Chain State Machine): Targets Binance Alpha-related assets, outputting mid-cycle liquidity/structural state and risk change interpretation.
- Perps Agent (CEX Contract Risk Control): Targets user-submitted exchange read-only APIs, outputting real-time position risk suggestions and compiling verifiable risk event statistics for data equity rewards.
- Executable Trading Agent (Prediction Asset): Executes strategies transparently on-chain, forming publicly traceable records as the factual basis for prediction assets and market consensus.

To support these product lines, the system is organized into four layers following the logic: Data → Computation → Settlement → Application/Execution:

Data Layer → Algorithm & Modeling Layer → Incentive & Settlement Layer → Agent Application & Execution Layer.

Concurrently, the system employs a backbone of "Unified Object Model + State Machines/Triggers + Evidence Chain Explanation Layer" to ensure outputs are explainable, traceable, and auditable.

## **1\. Data Layer**

### **1.1 Goal & Requirements**

- Goal: Construct a multi-source trading data foundation capable of real-time service, continuous historical analysis, and verifiable auditing.
- Core Requirements: Multi-source integration, unified schema, real-time streaming + historical storage, user data isolation, full-chain auditability.

### **1.2 Public Trading Data**

Covers market structure data and on-chain metrics for risk alignment and state determination, including but not limited to:

- CEX Market Data: Price, volume, order book depth, tick-by-tick trades, spread/slippage proxy indicators.
- Contract Metrics: Funding rates, Open Interest (OI), liquidation distributions, leverage structure changes.
- DEX Structure: Liquidity pool depth/concentration, LP additions/removals, Swap inflow/outflow, routing behavior.
- On-Chain Capital Flows: Large transfers, key address cluster movements, exchange deposit/withdrawal heuristics.
- Events & Risk Factors: Volatility regimes, liquidity contraction signals, major event window markers.

Processing: Time-slicing (1m/5m/1h/4h/1d) → Feature derivation (volatility, funding pressure, OI delta, depth decay, slippage proxy) → Benchmark alignment (market state labeling).

### **1.3 Individual Live Trading Data**

Sources are categorized into two types:

**A. CEX Read-Only API (Key for Perps):**

- Positions: Direction, size, entry price, mark price, leverage, margin, liquidation level, unrealized P&L, funding rate.
- Orders/Fills: Order details, executions, fees, approximate slippage, execution sequence.
- Account/Margin: Margin balance, risk ratio, position concentration.

**B. On-Chain Address Data (Key for Alpha):**

- Address holding changes, transfers, key contract interaction history.
- Pool structures related to holdings (depth/concentration/net inflow-outflow).

### **1.4 Unified Object Model**

To prevent field discrepancies across different exchanges/chains from affecting upper-layer logic, the system standardizes data into four internal object types (serving as common input for subsequent state machines and risk control):

- PositionSnapshot: Direction, size, leverage, margin, liquidation level, unrealized P&L, funding rate pressure, exposure concentration.
- ExecutionTrace: Execution path, slippage, fees, position adjustment cadence, stop-loss trigger paths.
- LiquiditySnapshot: Pool depth, concentration, net inflow-outflow, slippage-sensitive zones, support fragility.
- MarketContext: Volatility regime, funding rate/OI crowding, liquidation structure, event windows.

### **1.5 Data Pipeline & Storage Topology**

- Ingestion: API polling + (priority if available) WebSocket; on-chain Indexer + Node RPC.
- Processing: Standardized mapping → cleansing, deduplication, error correction → derived feature enhancement → dual-write to storage.
- Storage Topology:
  - Hot Store: Second/minute-level read-write (position/risk/liquidity snapshots) for real-time inference and alerts.
  - Warm Store: Recent 30–180 days for analysis (liquidation/loss-taking paths, state evolution).
  - Cold Store: Long-term archival (training/audit/comparison).

Data Isolation: Public market database and user private databases are physically/logically isolated, coordinate least-privilege access control and full-chain auditing.

## **2\. Algorithm & Modeling Layer**

### **2.1 Online Feature Computation**

Performs online feature computation on unified objects, prioritizing "explainable features" over black-box outputs:

- Risk Structure Features: Liquidation buffer, margin pressure, drawdown path, direction/asset concentration.
- Execution Discipline Features: Position adjustment rhythm, stop-loss failures, style drift, and anomalous behavior points.
- Liquidity Structure Features: Depth decay, concentration changes, net inflow-outflow, support fragility.
- Market Alignment Features: Volatility regime, funding pressure, OI delta, liquidation clustering zones.

### **2.2 State Machines & Triggers**

The system's core output employs "state language," driven by threshold/evidence chain triggers:

- Alpha Mid-Cycle State Machine: Configurable states (e.g., Accumulation, Expansion, Contestation, Decay); each state transition must have a traceable evidence chain.
- Perps Risk State Machine: States like Safe, Alert, High Risk, Critical (based on liquidation buffer, funding rate pressure, volatility & liquidity).
- Event Triggers: Outputs alerts and suggestions when key features cross defined thresholds (e.g., "48h depth decrease of 20%", "liquidation buffer below threshold").

### **2.3 Explanation Layer & Evidence Chain**

Every output must be accompanied by a "why":

- Current state/risk level.
- Evidence source (Position/Liquidity/MarketContext).
- Triggered thresholds and sensitive variables.
- Version number and configuration (traceable rule/model versions).

This forms the engineering foundation for "verifiable consensus."

### **2.4 Model/Rule Hybrid Approach**

For explainability and auditability, a hybrid "rules + model" approach is recommended:

- Alpha State Determination: Structural factors + state machine rules + anomaly detection.
- Perps Risk Suggestions: Risk structure calculation + scenario simulation + suggestion threshold strategies.
- Evolution Logging: Records iterations of Agent thresholds/rules/model versions during service, forming a traceable capability evolution path.

## **3\. Incentive & Settlement Layer**

Goal: To bind verifiable behaviors to real revenue/fees, preventing exploitation, ensuring auditability, and promoting sustainability.

### **3.1 LLAx Behavioral Equity Distribution (Core)**

Distribution is based primarily on verifiable events:

- API access integrity and continuity (data completeness, consistency).
- Verifiable risk event statistics: Past six-month liquidation/loss-taking counts (one-time equity), future monthly rolling statistics (monthly equity).
- Service usage feedback: Corresponding rewards for genuine paid usage/real calls (to prevent interaction farming).

### **3.2 One-Way Conversion & Burn (Economic Alignment)**

- LLAx → LLA: Convertible. Conversion burns (destroys) the LLAx.
- LLA → LLAx: Not convertible.

This ensures behavioral value unidirectionally accumulates into the value anchor (LLA), preventing circular arbitrage.

### **3.3 Prediction Fee Distribution in LLA (No-Inflation Distribution Channel)**

When an Executable Trading Agent becomes a prediction asset:

- Platform fees are distributed to participants who lost predictions in LLA.
- The distribution source is real fees, not released spontaneously.
- This creates a closed loop: Prediction → Value Backflow → Service Consumption / Ecosystem Participation.

## **4\. Agent Application & Execution Layer**

Functionality and interfaces are organized according to the three core product lines to avoid a disjointed "feature knocking together".

### **4.1 Alpha Agent (On-Chain State Machine)**

- Input: LiquiditySnapshot + MarketContext + key address behavior.
- Processing: Structural signal identification (depth, concentration, net inflow-outflow, support fragility) + mid-cycle state machine logic.
- Output: Holding state briefs, risk alerts, structural change explanations (with attached evidence chain and thresholds).

### **4.2 Perps Agent (CEX Risk Control)**

- Input: PositionSnapshot + ExecutionTrace + MarketContext (funding/OI/liquidation/volatility).
- Processing: Liquidation buffer calculation, margin pressure assessment, drawdown path analysis, scenario simulation, trigger activation.
- Output: Real-time risk level, position constraint suggestions, risk source explanations; and generation of verifiable event statistics (six-month one-time + monthly rolling) for LLAx equity rewards.

### **4.3 Executable Trading Agent (Prediction Asset Foundation)**

- Input: Strategy module + risk boundaries (position limits, drawdown limits, circuit breaker rules, parameter governance).
- Execution: Transparent trading via an independent on-chain wallet on DEXs (fully on-chain traceable).
- Output: Public trading history and auditable performance metrics (returns, drawdowns, risk discipline, execution consistency), serving as the factual basis for a prediction asset.

## **5\. Security, Privacy & Risk Controls**

- Read-Only Permissions: Users never grant order placement or withdrawal permissions.
- Key Management: End-to-end encryption, principle of least privilege, short-term usage, full-process auditing.
- Data Isolation: User private data and public data are stored and accessed in isolation.
- Execution Security: Executable Agent wallets use multi-signature/tiered permissions, circuit breakers, and abnormal trade alerts.
- Auditability: Output evidence chains, version logs, and parameter change records are fully retrospective.

## **6\. Observability**

- Monitoring of data pipeline latency, gaps, and quality (SLA).
- Archiving of state machine transition logs and evidence chains.
- Tracking of risk control trigger statistics, false positives/negatives.
- Chain-auditable views of Executable Agent strategy versions, parameter changes, and circuit breaker records.
