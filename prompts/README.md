# @matcha-money/mcp-prompts

Pre-built financial prompt templates for [matcha money](https://matcha.money). These are structured prompt texts designed for Claude Desktop and other MCP clients connected to the matcha money MCP server.

## Prompts

| Prompt                     | File                        | Description                                                                                  |
| -------------------------- | --------------------------- | -------------------------------------------------------------------------------------------- |
| **Budget Architect**       | `budget-architect.md`       | Analyzes spending to build behavioral clusters, find cash leaks, and propose automated rules |
| **Sustainability Auditor** | `sustainability-auditor.md` | Aligns spending with sustainable and ethical shopping practices                              |
| **Goal Simulator**         | `goal-simulator.md`         | Reality-checks major purchases with cash vs. financing scenarios                             |
| **Investment Analyst**     | `investment-analyst.md`     | Reviews portfolio for concentration risk, tax inefficiencies, and asset location issues      |
| **FIRE Planner**           | `fire-planner.md`           | Calculates financial independence timeline based on actual spending                          |
| **Debt Calculator**        | `debt-calculator.md`        | Maps all debt including hidden BNPL, compares Avalanche vs. Snowball strategies              |

## Usage

Each prompt is a standalone markdown file using XML-structured sections (`<role>`, `<instructions>`, `<output_format>`). They reference matcha money MCP tools by name and can be:

1. **Registered as MCP prompts** on the matcha money server (they'll appear as `/` slash commands in Claude Desktop)
2. **Pasted as system prompts** in Claude Projects or custom instructions
3. **Used as templates** for building custom financial workflows

## Requirements

- A [matcha money](https://matcha.money) account with the MCP server connected
- The prompts reference these MCP tools: `get_transactions`, `get_accounts`, `get_budget`, `get_goals`, `get_holdings`, `get_net_worth`, `get_liabilities`, `get_recurring_bills`, `get_taxonomy`, `get_rules`, `manage_rules`, `manage_budgets`

## License

MIT
