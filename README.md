# matcha money MCP

Connect Claude to your [matcha money](https://matcha.money) account to manage your personal finances through conversation.

## Packages

### [`config/`](config/) — MCP Server Configuration

Everything you need to install the matcha money MCP server in Claude Desktop, Claude Code, or any MCP-compatible client.

### [`prompts/`](prompts/) — Financial Prompt Templates

Pre-built prompt templates for budgeting, investing, debt payoff, FIRE planning, and more. Use them as MCP prompts, system prompts, or templates for custom workflows.

## Quick Start

### Claude Code

```bash
claude plugin install matcha-money
```

### Claude Desktop

Add to your config (Settings > Developer > Edit Config):

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

### Claude Code CLI

```bash
claude mcp add --transport http matcha_money https://matcha.money/api/mcp/mcp
```

## Requirements

- A [matcha money](https://matcha.money) account (free tier works for read access)
- Active subscription for write operations

## Links

- [matcha money](https://matcha.money)
- [Documentation](https://matcha.money/docs/user/ai-integrations)
- [Support](mailto:support@matcha.money)

## License

MIT — see [LICENSE](LICENSE)
