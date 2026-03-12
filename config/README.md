# matcha money — Claude Plugin

Connect Claude to your [matcha money](https://matcha.money) account to manage your personal finances through conversation.

## Installation

### Claude Code

```bash
claude plugin install matcha-money
```

### Claude Desktop (Manual)

Add this to your Claude Desktop config (Settings > Developer > Edit Config):

```json
{
  "mcpServers": {
    "matcha_money": {
      "type": "http",
      "url": "https://matcha.money/api/mcp/mcp"
    }
  }
}
```

Claude will prompt you to sign in via your browser on first use (OAuth).

### Claude Code CLI

```bash
claude mcp add --transport http matcha_money https://matcha.money/api/mcp/mcp
```

## Requirements

- A [matcha money](https://matcha.money) account (free tier works for read access)
- Active subscription for write operations

## Available Tools

### Portfolio

| Tool                  | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| `get_accounts`        | Get all financial accounts (bank accounts, credit cards, investments) |
| `get_account`         | Get detailed account information with optional balance history        |
| `manage_accounts`     | Create, update, reconcile, or archive accounts                        |
| `get_net_worth`       | Get net worth data (current or historical)                            |
| `get_holdings`        | Get investment holdings with per-ticker gain/loss                     |
| `get_liabilities`     | Get credit cards and loans with APR, payments, and limits             |
| `manage_holdings`     | Create, update, delete, or exclude investment holdings                |
| `manage_manual_items` | Organize manual accounts under bank groups                            |

### Transactions

| Tool                  | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| `get_transactions`    | Get recent transactions with filters (date, category, tags, search) |
| `manage_transactions` | Create, update, delete, split, or batch-update transactions         |

### Budget

| Tool                     | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `get_budget`             | Get budget targets, analysis, or income data                  |
| `manage_budgets`         | Set budget targets or transfer funds between categories/goals |
| `get_goals`              | Get savings goals                                             |
| `manage_goals`           | Create, update, or archive savings goals                      |
| `get_recurring_bills`    | Get all recurring bills                                       |
| `manage_recurring_bills` | Create, update, or delete recurring bills                     |

### Receipts

| Tool               | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `get_receipts`     | Get receipts with filters (status, merchant, date range)           |
| `manage_receipts`  | Match receipts to transactions, dismiss, or batch add new receipts |
| `get_merchant_ids` | Get all known merchant IDs from the merchant registry              |

### System

| Tool              | Description                                    |
| ----------------- | ---------------------------------------------- |
| `get_taxonomy`    | Get all categories and tags                    |
| `manage_taxonomy` | Create, update, or delete categories/tags      |
| `merge_tags`      | Merge one tag into another (irreversible)      |
| `get_rules`       | Get auto-categorization rules                  |
| `manage_rules`    | Create, update, or delete categorization rules |
| `run_rules`       | Apply rules to uncategorized transactions      |

## Available Prompts

| Prompt               | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `financial_snapshot` | Complete overview of accounts, net worth, budget, goals, and bills |

## Links

- [matcha money](https://matcha.money)
- [Documentation](https://matcha.money/docs/user/ai-integrations)
- [Support](mailto:support@matcha.money)
