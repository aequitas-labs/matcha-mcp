import {
  BUDGET_ARCHITECT,
  DEBT_CALCULATOR,
  FIRE_PLANNER,
  GOAL_SIMULATOR,
  INVESTMENT_ANALYST,
  SUSTAINABILITY_AUDITOR,
  TAX_PREP,
} from "./prompts.gen";

export interface PromptDefinition {
  /** Identifier used for MCP prompt registration (e.g., 'budget_architect') */
  id: string;
  /** Display name (e.g., 'Budget Architect') */
  name: string;
  /** Short description */
  description: string;
  /** Prompt text content */
  text: string;
}

export const PROMPTS: PromptDefinition[] = [
  {
    id: "budget_architect",
    name: "Budget Architect",
    description:
      "Analyze spending behavior, find cash leaks, and build a custom budget based on your actual habits",
    text: BUDGET_ARCHITECT,
  },
  {
    id: "sustainability_auditor",
    name: "Sustainability Auditor",
    description:
      "Align your spending with sustainable and ethical shopping practices",
    text: SUSTAINABILITY_AUDITOR,
  },
  {
    id: "goal_simulator",
    name: "Goal Simulator",
    description:
      "Reality-check a major purchase with cash vs. financing scenarios",
    text: GOAL_SIMULATOR,
  },
  {
    id: "investment_analyst",
    name: "Investment Analyst",
    description:
      "Review your portfolio for concentration risk, tax inefficiencies, and allocation issues",
    text: INVESTMENT_ANALYST,
  },
  {
    id: "fire_planner",
    name: "FIRE Planner",
    description:
      "Calculate your financial independence timeline based on your actual spending",
    text: FIRE_PLANNER,
  },
  {
    id: "debt_calculator",
    name: "Debt Calculator",
    description:
      "Map all debt including hidden BNPL and build a payoff strategy",
    text: DEBT_CALCULATOR,
  },
  {
    id: "tax_prep",
    name: "Tax Prep Assistant",
    description:
      "Surface tax-relevant spending, find missed deductions, and get organized for tax season",
    text: TAX_PREP,
  },
];

/**
 * Load all prompts with their text content.
 */
export function loadAllPrompts(): PromptDefinition[] {
  return PROMPTS;
}
