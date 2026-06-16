# Piloter Agent

## ——Liquidity Analysis and Indicator-Based Screening, On Demand

Where the protocol’s other Agents keep a standing watch over what a user already holds, Piloter Agent is the surface a trader turns to before the position exists — the one he opens to read a coin’s liquidity across time, or to surface the coins that match a strategy he has in mind. It is the navigator: two instruments under one panel, both pointed at the Binance market, both answering on demand.

## What Piloter Agent Is

Piloter Agent is a product line within the LinkLayerAI Agent family, and it occupies a distinct role within it. The protocol’s position-centric Agents — those that interpret a BEP20 token’s liquidity, map an Alpha holding’s phase, or control the risk of a Perps position — are defined by continuity. They stand watch over holdings a user already has, and they speak when something changes. Piloter Agent is defined by the opposite posture. It is an instrument the trader reaches for and operates: he comes to it with a question, and it answers in the moment.

That question takes two forms, and Piloter Agent answers each through a dedicated module. When the trader has a specific coin in mind and wants to understand how its liquidity behaves across time, he uses Picker. When he has a strategy in mind and wants to find the coins that satisfy it, he uses Tracker. One module reads a coin the trader names; the other surfaces the coins the trader has not yet named. Together they cover the two halves of pre-position inquiry — understanding a known candidate, and discovering unknown ones — across the Binance spot and contract markets.

## Picker — Liquidity Analysis Across Time

- **The Question Picker Answers**

A coin’s liquidity is not a single number; it is a behavior that looks different depending on the horizon you view it through. Liquidity that appears stable over a day may be fracturing within the hour, and a fifteen-minute disturbance may mean nothing against the backdrop of a steady four-hour structure. The trader who reads only one horizon reads only part of the truth. Picker exists to give the full reading: it analyzes a coin’s liquidity across multiple time horizons at once, so that the short-term and the longer-term views sit side by side rather than being mistaken for one another.

- **How It Works**

The trader names the coin. A search field at the top of the module lets him call up any coin he wants to examine on the Binance market, in either its spot or its contract form, analyzed under the same consistent method so that the two can be read against each other. Picker then returns its analysis as plain language — not a chart to be decoded, but a written interpretation a trader can read and act on.

The reading is delivered horizon by horizon. Picker produces a distinct analysis for the fifteen-minute view, for the four-hour view, and for the one-day view, each describing how the coin’s liquidity is behaving on that timescale. It then closes with an overall summary that draws the three horizons together into a single coherent picture. The structure is deliberate: the per-horizon analyses preserve the detail that a single blended verdict would erase, while the summary spares the trader from having to reconcile three readings himself.

- **Why It Belongs to LinkLayerAI**

Picker is the same liquidity-interpretation capability that runs through the protocol’s position-centric Agents, turned toward a pre-position question and made available on demand. The protocol already treats liquidity as a structural condition to be read rather than a raw figure to be displayed; Picker applies that discipline at the moment of inquiry, before a position is taken, across the time horizons that determine whether a coin is safe to enter at all.

## Tracker — Indicator-Based Screening

- **The Question Tracker Answers**

Picker assumes the trader already knows which coin he is interested in. Tracker serves the trader who does not — the one who begins not with a coin but with a strategy, and needs to find which coins on the market currently satisfy it. This is the discovery half of the problem: out of the full breadth of the Binance market, which coins right now match a given technical condition?

- **How It Works**

Tracker is built on a large library of technical-indicator strategies — many dozens of them — and the library is organized into categories so that the trader is never made to confront an undifferentiated wall of options. The flow is selection first, results second. The trader chooses the strategy he wants to screen by; only then does Tracker run it across the Binance market and return the list of coins that currently satisfy that strategy’s conditions. Nothing is surfaced until the trader has expressed what he is looking for, which keeps the output sharply relevant rather than overwhelming.

The returned list is built to be acted on, not merely read. Each coin that matches comes with its trading link, so that the path from discovery to action is direct — the trader moves from the screened list to the market without having to re-find the coin elsewhere. Tracker’s purpose is to compress the work of scanning a whole market down to a single deliberate choice of strategy and a clean, actionable result.

- **Why It Belongs to LinkLayerAI**

Screening is, at heart, the act of imposing structure on a market’s noise — the same instinct that animates the rest of the protocol. Tracker does it on the discovery side: rather than interpreting a holding the trader already has, it interprets the market against a condition the trader specifies, and returns only what survives. It extends the protocol’s posture of structured, legible output into the moment before a coin is even chosen.

## The Two Modules Together

Picker and Tracker are two answers to the same underlying need, approached from opposite ends. A trader with a candidate in hand uses Picker to decide whether its liquidity makes it worth holding across the horizons that matter. A trader with a strategy in hand uses Tracker to surface the candidates that the market is currently offering. One narrows from a known coin to a judgment; the other widens from a strategy to a set of coins. Held under the single panel of Piloter Agent, they let a trader move fluidly between discovery and scrutiny — find coins that match a strategy in Tracker, then read any one of them in depth through Picker before committing.

This is what distinguishes Piloter Agent within the family. The position-centric Agents serve the trader after he has committed, watching what he holds. Piloter Agent serves him before he commits, sharpening the decision itself. Both halves of the protocol’s promise — to make markets legible and to do so in continuous service of the trader — are present here, applied to the moment of choosing rather than the duration of holding.

## Summary

Piloter Agent is LinkLayerAI’s on-demand navigator for the Binance market, composed of two modules. Picker takes a coin the trader names and reads its liquidity across the fifteen-minute, four-hour, and one-day horizons in plain language, closing with an overall summary. Tracker takes a strategy the trader selects from a categorized library of technical indicators and returns the coins that currently match it, each with its trading link. One scrutinizes a known coin; the other discovers unknown ones. Between them, Piloter Agent equips the trader for the work that happens before a position is ever opened — and does it with the same structured, legible interpretation that defines everything else the protocol builds.
