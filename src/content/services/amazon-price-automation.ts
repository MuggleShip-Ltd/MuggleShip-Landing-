import type { ServiceContent } from "@/lib/services";

const service: ServiceContent = {
  slug: "amazon-price-automation",
  name: "Amazon Price Automation",
  metaTitle: "Amazon Price Automation with Margin Floors",
  metaDescription:
    "Amazon price automation that applies only your rules, with hard margin floors, SP-API price updates and daily reports. Fulfillment clients can request a quote.",
  kicker: "Rule-based Amazon pricing",
  h1: "Amazon price automation that runs on your rules and margin floors",
  intro:
    "Amazon Price Automation from MuggleShip updates your Amazon prices using only the rules you set: minimum and maximum prices, margin floors, and category or SKU rules. Changes go to Amazon through its Selling Partner API (SP-API), and hard margin floors stop any rule pricing below your margin. One ruleset covers the UK, EU, US and other marketplaces, and a daily report shows what changed and when.",
  highlights: ["Hard margin floors built in", "Daily activity reports", "Built on Amazon’s SP-API"],
  included: [
    {
      icon: "sliders",
      title: "Min/max price bounds",
      desc: "Set a lowest and highest price for each SKU or category, and your rules work within the range you have defined.",
    },
    {
      icon: "shield",
      title: "Hard margin floors",
      desc: "Set the minimum margin you will accept and no rule or preset can push a price below it, whatever else the ruleset is doing.",
    },
    {
      icon: "layers",
      title: "Category and SKU rules",
      desc: "Write rules at category level for broad coverage and at SKU level for products that need different treatment, such as hero lines or slow sellers.",
    },
    {
      icon: "gauge",
      title: "Strategy presets",
      desc: "Choose margin-first, stock-clearance or steady-state presets for different parts of your catalogue, each one driven by the parameters you enter.",
    },
    {
      icon: "file",
      title: "Daily activity reports",
      desc: "Each day you see which prices changed, when they changed, and how each rule affected sales velocity and margin across your own catalogue.",
    },
    {
      icon: "globe",
      title: "One ruleset across marketplaces",
      desc: "Run a single ruleset across Amazon US, CA, MX, UK, EU, JP and AU instead of maintaining separate pricing rules in each marketplace.",
    },
  ],
  sections: [
    {
      heading: "How rule-based pricing for Amazon works",
      paragraphs: [
        "Amazon price automation at MuggleShip starts with rules you write, not with a system guessing on your behalf. You decide the lowest and highest price each product can sell for, the margin you will not go below, and which rules apply to whole categories or to individual SKUs. The platform applies those pricing rules to your Amazon listings and sends the resulting price updates to Amazon, so each change has a reason you can point to.",
        "A practical way to build a ruleset is to start at category level, with a price band and a margin floor for each product category. Then add SKU-level rules for the products that behave differently. A hero product with steady demand might sit in a narrow band, while a slower line is given more room above its floor. You describe the logic once, and it is applied every time prices are updated.",
        "Strategy presets cover common situations without building every rule from scratch. Margin-first suits lines where protecting profit comes first, stock-clearance suits surplus or end-of-line stock you want to move, and steady-state suits established products where you want stable, predictable pricing. Each preset is driven by the parameters you enter, so what it does always reflects your own settings.",
      ],
    },
    {
      heading: "Margin floors and minimum price protection",
      paragraphs: [
        "The main risk with any automated pricing is an error that runs unchecked. One rule interacts badly with another and drags a product below the point where it makes money. Amazon Price Automation is built around hard margin floors to prevent exactly that. The floor takes priority over every category rule, SKU rule and preset, so no price is pushed below the margin you have set.",
        "Your minimum and maximum price bounds add a second set of limits at product level. The minimum is the lowest price you want each SKU to sell for, and the maximum is the most you are prepared to charge customers. Together with the margin floor, these bounds define the range your rules work within.",
        "Because every limit is yours, changing strategy means editing rules rather than fighting a system. Tighten a band before a busy trading period, widen it on stock you want to clear, or raise a margin floor when your costs change. The guardrails stay in place while you adjust, so price updates keep running within your limits and you review the results in the daily activity report.",
      ],
    },
    {
      heading: "Automated price updates via SP-API, with daily activity reports",
      paragraphs: [
        "Price changes reach Amazon through the Selling Partner API (SP-API), the interface Amazon provides so that applications a seller chooses to authorise can work with their account. You grant that access as the account owner, and the platform uses it to apply your rules to your own listings. It takes the place of manual edits in Seller Central and spreadsheet uploads, so prices move in line with your rules rather than whenever someone has time to update them.",
        "Each day you get an activity report for your own catalogue, showing which prices changed, when, and the effect on sales velocity and margin. It gives you a daily record to reconcile against your own figures, and helps you decide which rules to keep, tighten or retire as you learn how your products respond.",
        "Your part is the logic itself. A margin floor is only as accurate as the costs you base it on, so review your floors when supplier prices, shipping rates or Amazon fees change. Because every price change traces back to a rule or parameter you defined, you can explain any line of the report to your finance team or accountant.",
      ],
    },
    {
      heading: "Multi-marketplace Amazon pricing from one ruleset",
      paragraphs: [
        "Selling in several Amazon marketplaces usually means several sets of prices to keep consistent, and rules that drift apart over time. Amazon Price Automation lets you run one ruleset across the US, Canada, Mexico, UK, EU, Japan and Australia marketplaces. Your pricing logic, from margin floors to clearance presets, is defined once and applied across the marketplaces you sell in, rather than rebuilt and maintained separately in each one.",
        "One ruleset does not mean one treatment for every product. Category and SKU rules still decide how each line is priced, so surplus stock can run on a clearance preset while a hero product stays on steady-state pricing. As the service is for MuggleShip fulfillment clients, the analytics included with your fulfillment account sit alongside your pricing reports. Sales velocity figures and restock recommendations help you judge which lines need a different rule.",
      ],
    },
  ],
  process: [
    {
      title: "Request access",
      desc: "Tell us which Amazon marketplaces you sell in and how your catalogue is organised. If you are not yet a fulfillment client, we send an itemised, no-obligation quote within 24 hours.",
    },
    {
      title: "Onboard and authorise SP-API",
      desc: "New to MuggleShip? Fulfillment onboarding takes place within 5 business days of a signed quote; existing clients skip this step. Price automation is then set up on request, and you authorise SP-API access from your Amazon account.",
    },
    {
      title: "Define rules and floors",
      desc: "Set min/max price bounds, margin floors, and category or SKU rules, and choose margin-first, stock-clearance or steady-state presets where they fit. Automated changes follow the limits you define, and no rule can push a price below your margin floor.",
    },
    {
      title: "Review daily reports",
      desc: "Price updates start running inside your limits. Check the daily activity report, compare it with your own sales and margin figures, and adjust bands, floors or presets as you learn how products respond.",
    },
  ],
  idealFor: [
    "MuggleShip fulfillment clients who already know their target margins and want them enforced on every automated price change.",
    "Fulfillment clients selling across UK, EU and US marketplaces who want one ruleset instead of several.",
    "Sellers with surplus or end-of-line stock who want to clear it without dropping below a margin floor.",
    "Teams that want a daily report of price changes for finance or management review.",
    "Catalogues mixing hero products and slow movers that need different rules at category and SKU level.",
    "Sellers updating prices by hand in Seller Central or by spreadsheet upload who want rules applied consistently.",
  ],
  faqs: [
    {
      q: "What is Amazon price automation, and how is it different from editing prices by hand?",
      a: "Amazon price automation means your pricing rules are applied to your listings automatically, instead of someone editing prices one by one in Seller Central. With MuggleShip, you set the rules (price bounds, margin floors, category and SKU rules), and price updates are sent to Amazon through SP-API. You spend less time on routine price edits and keep full control over the limits.",
    },
    {
      q: "Is this a repricer that tracks other sellers’ prices?",
      a: "No. Amazon Price Automation is not a competitor-tracking repricer. It applies only the rules and parameters you define: min/max bounds, margin floors, category and SKU rules, and strategy presets. It does not collect, aggregate or display data about other sellers. Every price change follows your own logic, which is why each one can be explained from your rules and reviewed in the daily report.",
    },
    {
      q: "Can a rule ever push my price below my margin?",
      a: "No rule is allowed to. Margin floors are hard limits: whatever a category rule, SKU rule or strategy preset would otherwise do, the platform does not push a price below the margin you set. Combined with your minimum price bound, this gives each product a firm lower limit, and the daily activity report lets you confirm the floor held.",
    },
    {
      q: "Which Amazon marketplaces does it cover?",
      a: "Amazon Price Automation covers the US, Canada (CA), Mexico (MX), UK, EU, Japan (JP) and Australia (AU) marketplaces. You build one ruleset, including margin floors, category and SKU rules and presets, and it is used across the marketplaces you sell in rather than rebuilt for each one. When you request access, tell us which marketplaces your listings are live in.",
    },
    {
      q: "How does MuggleShip access my Amazon account, and what happens to my data?",
      a: "Access runs through Amazon’s Selling Partner API (SP-API), which you authorise as the account owner. The service operates exclusively on rules and parameters you define. The data processed for you belongs to you as the authorising seller and is used solely to operate your own business. The platform does not collect, aggregate or display data about other sellers.",
    },
    {
      q: "What do I need to provide to get started?",
      a: "As a MuggleShip fulfillment client, tell us which Amazon marketplaces you sell in and how your catalogue is organised, then authorise SP-API access from your Amazon account. Next, set a minimum and maximum price for each category or SKU, the lowest margin you will accept, and the preset that suits each part of your catalogue. Price updates then run within those limits, and a daily report shows what changed.",
    },
    {
      q: "Who can use it, and how is it priced?",
      a: "Amazon Price Automation is available on request to MuggleShip fulfillment clients. Pricing is quote-based and tailored to each account. There are no setup fees, no monthly subscriptions and no long-term contracts, and you pay only for the services you use. Mention price automation when you enquire and we will send an itemised, no-obligation quote within 24 hours.",
    },
  ],
  related: ["amazon-listing-optimization", "fba-prep-uk", "ecommerce-fulfillment-uk"],
  availability: "Available on request to MuggleShip fulfillment clients.",
  disclosure:
    "MuggleShip's pricing automation operates exclusively on rules and parameters defined by you, the seller. The platform does not collect, aggregate, or display data about other sellers. All data processed through MuggleShip belongs to the authorizing seller and is used solely to operate their own business.",
  ctaLabel: "Request access",
};

export default service;
