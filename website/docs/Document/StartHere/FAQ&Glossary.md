# FAQ & Glossary

## **1\. Data, Privacy & Security**

**Q1: Could submitting my API key lead to my assets being compromised?**

**A:** Absolutely not. Security is our paramount principle.

- Read-Only Access: We only require read-only API keys from exchanges. This permission level does not allow for placing orders, withdrawing funds, or any form of asset transfer.
- Minimalist Data Usage: API keys are used exclusively for reading your account data and monitoring real-time positions (e.g., Perpetuals holdings, margin levels, liquidation prices). They grant no authority over your funds or trading activity.
- Robust Protection: API keys and user data are protected with end-to-end encryption and stored in isolated environments, backed by strict access controls and comprehensive audit logs. The platform has no ability to interact with your core assets.

**Q2: Will my personal trading history or identity be publicly disclosed?**

**A:** No. We implement a rigorous privacy protection framework.

- Anonymization & Controlled Disclosure: All personally identifiable information is anonymized. Users maintain control over what information is shared externally.
- Privacy by Default: By default, the system does not publicly reveal your specific positions, order details, transaction amounts, or the linkage between your addresses and holdings.
- Verification Does Not Mean Exposure: Even in scenarios involving "verifiable execution" and prediction markets, what is being verified and made public is the on-chain trading history and activity of an Agent's dedicated wallet, not the details of any individual user's personal accounts.

**Q3: Will my data be used by LinkLayerAI for other commercial purposes?**

**A:** You retain sovereignty over your data. We will not sell your personal data without your explicit consent.

Your data may be used, only after thorough anonymization and aggregation, to enhance the risk identification capabilities and service quality of our Agents (for instance, in modeling and calibrating to general market structure factors). Such usage never involves personally identifiable information or individually traceable trading records.

## **2\. Agents & Core Capability**

**Q4: What is the primary function of a LinkLayerAI Agent?**

**A:** To deliver continuous, evolving service centered on your actual holdings.

The Agent's purpose is not to provide mere "opinions" but to deliver actionable insights based on your live portfolio:

- State Interpretation: (e.g., assessing if an Alpha holding is in an accumulation, distribution, or decay phase; determining the short-term market state for a MemeRush asset).
- Risk Identification & Mitigation Suggestions: (e.g., analyzing the liquidation risk structure and drawdown potential of your Perpetuals positions).
- Trade Debriefing & Performance Attribution: Identifying key decision points, both successful and unsuccessful, within your trading history. Concurrently, the Agent continuously refines its capabilities by learning from real trading behaviors and outcomes over time.

**Q5: How is a LinkLayerAI Agent fundamentally different from conventional trading analysis software?**

**A:** The core distinctions are "Continuous Service + Evolutionary Learning + Verifiable Track Record."

- Portfolio-Centric Operation: It functions as a persistent overlay on your real holdings, not as a tool for sporadic post-trade analysis.
- Interactive & Queryable: You can engage with it conversationally, asking questions like, "What is the primary source of risk in my current portfolio?" or "Does this drawdown pattern resemble a past mistake?"
- Learning in Live Market Conditions: Its intelligence is honed through continuous calibration against real market exposure and outcomes, not just historical backtesting.
- Path to Verifiable Performance: A mature Agent can transition to transparent, on-chain execution, allowing its capability to be independently observed and assessed by the market.

**Q6: If my trading strategy or behavior changes, will the Agent adapt?**

**A:** Yes. The Agent is designed for continuous calibration with new data.

The system dynamically updates its understanding of your risk profile and decision-making patterns based on your latest position adjustments, execution paths, and market exposures. This ensures the service remains relevant to your current reality.

## **3\. Prediction Assets & Fairness**

**Q7: Why are Agents suitable as prediction market assets?**

**A:** Because Executable Trading Agents inherently fulfill the three critical criteria traditional prediction markets lack: Transparency, Verifiability, and Resistance to Manipulation.

Traditional markets often struggle with trust due to opaque assets and reliance on external, potentially biased arbitration. LinkLayerAI's Agents trade transparently from their own on-chain wallets, creating a public, immutable, and fully auditable performance history. This shifts the prediction dynamic from "wagering on unknown information" to "assessing demonstrated capability."

**Q8: How is manipulation or "black-box" intervention prevented in these prediction markets?**

**A:** The safeguards are built on transparency and enforced rules.

- Immutable On-Chain Record: Every trade is recorded on the blockchain, creating a permanent, unalterable history.
- Pre-defined Execution Boundaries: Agents operate within strict, pre-coded strategy parameters, risk limits, and circuit-breaker rules, minimizing discretionary human intervention.
- Consensus Based on Public Facts: All market participants make judgments based on the identical, publicly accessible record of the Agent's actions, drastically reducing information asymmetry.

## **4\. Incentives, Contribution & Tokens**

**Q9: What are the distinct roles of LLA and LLAx?**

**A:** LLAx incentivizes specific, valuable behaviors; LLA represents long-term protocol value and governance rights.

- LLAx (Incentive / Utility Token): Rewards verifiable, value-adding actions (e.g., contributing read-only API data for analysis, participating in verifiable risk event reporting, actively using Agent services). It can also be used for certain in-ecosystem payments.
- LLA (Governance / Value Token): Serves as the vehicle for governance (voting on proposals) and captures the long-term value accruing to the protocol. Its value is anchored to real protocol revenue and fee distribution.

**Q10: What are the rules for converting between LLAx and LLA?**

**A:** A strict one-way conversion model is enforced.

- LLAx can be converted into LLA.
- LLA cannot be converted back into LLAx.
- Upon conversion, the corresponding amount of LLAx is permanently burned (removed from circulation).

This mechanism ensures that behavioral value converges unidirectionally toward the protocol value layer, avoiding bidirectional arbitrage and the accumulation of inflation.

**Q11: What is the relationship between prediction markets and LLA token distribution?**

**A:** Prediction markets provide a "non-inflationary distribution channel" for LLA.

The platform fees generated from prediction activity are distributed to participants on the losing side in LLA tokens. This distribution is funded by real economic activity (fees), not new token minting, making it sustainable. It also creates a fairer participation model and recycles value back into the ecosystem, as the distributed LLA can be used to access other services.

## **5\. Ecosystem & Roadmap**

**Q12: What is LinkLayerAI's planned development path?**

**A:** Our roadmap is structured as a logical progression: "Service → Learning → Execution → Prediction."

In the near term, we are focused on enhancing the core user experience: perfecting the integration for both DEX (Alpha/MemeRush) and CEX (Perpetuals) live data and real-time Agent services, and strengthening the underlying Agent learning engines. The mid-term goal is to launch fully transparent, on-chain Executable Trading Agents. The long-term vision is for these Agents to become widely recognized, consensus-driven assets within prediction markets, completing a closed-loop economy where fees and value circulate sustainably. Please see the dedicated Roadmap section for a detailed timeline.

## **Glossary**

- Agent: Within LinkLayerAI, an Agent is an intelligent software entity that operates persistently around a user's real trading portfolio. It provides analysis, risk insights, and debriefing, and evolves its understanding through continuous interaction with live market data and user feedback.
- Executable Trading Agent: An advanced Agent that has graduated to managing an independent on-chain wallet, executing pre-defined trading strategies on decentralized exchanges. Its complete transaction history is transparent, traceable, and immutable, forming the basis for its use as a consensus and prediction asset.
- Read-Only API: An application programming interface provided by centralized exchanges that permits data retrieval (e.g., balances, positions, order history) but explicitly prohibits actions like trading or withdrawals. LinkLayerAI uses these to access user data securely.
- Individual Live Trading Data / Real Positions: The authentic record of a user's trading activity and holdings, sourced from connected on-chain wallets and exchange read-only APIs. This includes spot positions (e.g., Alpha, Meme tokens) and derivative positions (e.g., Perpetuals contracts with associated leverage, margin, and liquidation levels).
- Public Market Factors: External, market-wide data sets used by the system for context and comparative risk analysis. Examples include price feeds, volatility indices, funding rates across exchanges, and metrics describing on-chain liquidity depth and flow.
- Prediction Target / Asset: The specific entity or outcome upon which a prediction market is based. In LinkLayerAI's context, the primary prediction target is the future performance metric (e.g., risk-adjusted return over a period) of a verifiable Executable Trading Agent.
- LLA / LLAx (Dual-Token System):
  - LLA (Governance & Value Token): The primary token representing a stake in the LinkLayerAI protocol. It is used for governance voting and is designed to capture and reflect the long-term value generated by the ecosystem, partly through revenue-linked buyback mechanisms.
  - LLAx (Incentive & Utility Token): The secondary token awarded for specific, value-adding behaviors within the ecosystem (data contribution, service usage). It functions as an incentive tool and can be used for in-protocol services. It features a one-way, burn-on-conversion mechanism into LLA.
