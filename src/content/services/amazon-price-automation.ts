import type { ServiceContent } from "@/lib/services";

const service: ServiceContent = {
  slug: "amazon-price-automation",
  name: "Amazon Price Automation",
  metaTitle: "Amazon Price Automation: Rule-Based Pricing",
  metaDescription:
    "Amazon price automation that applies only your rules — price bounds, margin floors, SKU rules — via SP-API, with daily reports. Ask for a fulfillment quote.",
  kicker: "Rule-based Amazon pricing",
  h1: "Amazon price automation that runs on your rules and margin floors",
  intro:
    "MuggleShip’s Amazon Price Automation applies the pricing rules you set — minimum and maximum prices, margin floors, category and SKU rules — to your listings through Amazon’s Selling Partner API (SP-API). One ruleset works across Amazon marketplaces including the UK, EU and US, hard margin floors stop any rule pricing below your margin, and a daily report shows what changed, when, and why.",
  highlights: ["Hard margin floors built in", "Daily activity reports", "Built on Amazon’s SP-API"],
  included: [
    {
      icon: "sliders",
      title: "Min/max price bounds",
      desc: "Set a lowest and highest price for each SKU or category, and every automated change stays inside the range you have defined.",
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
        "Amazon price automation at MuggleShip starts with rules you write, not with a system guessing on your behalf. You decide the lowest and highest price each product can sell for, the margin you will not go below, and which rules apply to whole categories or to individual SKUs. The platform applies those Amazon pricing rules to your listings and sends the resulting price updates to Amazon, so each change has a reason you can point to.",
        "A practical way to build a ruleset is to start at category level — a price band and a margin floor for each product category — and then add SKU-level rules for the products that behave differently. A hero product with steady demand might sit in a narrow band, while a slower line is given more room above its floor. You describe the logic once, and it is applied every time prices are updated.",
        "Strategy presets cover common situations without building every rule from scratch. Margin-first suits lines where protecting profit comes first, stock-clearance suits surplus or end-of-line stock you want to move, and steady-state suits established products where you want stable, predictable pricing. Each preset is driven by the parameters you enter, so choosing one never hands control to a formula you cannot see.",
      ],
    },
    {
      heading: "Margin floors and minimum price protection",
      paragraphs: [
        "The main risk with any automated pricing is an error that runs unchecked: a rule that interacts badly with another and drags a product below the point where it makes money. Amazon Price Automation is built around hard margin floors to prevent exactly that. Whatever a category rule, SKU rule or strategy preset would otherwise do, no price is pushed below the margin you have set.",
        "Your minimum and maximum price bounds add a second set of limits at product level. The minimum gives each SKU a firm price it will not go below, and the maximum stops a rule lifting a price beyond what you are prepared to charge customers. Together with the margin floor, these bounds define the space automation is allowed to work in, and nothing it does falls outside that space.",
        "Because every limit is yours, changing strategy means editing rules rather than fighting a system. Tighten a band before a busy trading period, widen it on stock you want to clear, or raise a margin floor when your costs change. The guardrails stay in place while you adjust, which is what makes it reasonable to let price updates run without checking every listing by hand.",
      ],
    },
    {
      heading: "Automated price updates via SP-API, with a daily audit trail",
      paragraphs: [
        "Price changes reach Amazon through the Selling Partner API (SP-API), the interface Amazon provides for authorised applications to work with a seller’s account. You grant that access as the account owner, and the platform uses it to apply your rules to your own listings. It takes the place of manual edits in Seller Central and spreadsheet uploads, so prices move in line with your rules rather than whenever someone has time to update them.",
        "Each day you get an activity report for your own catalogue. It shows which prices changed, when each change happened, and how each rule affected sales velocity and margin. That gives you an audit trail you can reconcile against your own figures, and the evidence you need to decide which rules to keep, tighten or retire as you learn how your products respond.",
        "The service works only with your information. It does not collect, aggregate or display data about other sellers, and data processed for you is used solely to run your own business. The result is pricing you can explain line by line to your finance team, your accountant or yourself, because every change traces back to a rule or parameter you defined.",
      ],
    },
    {
      heading: "Multi-marketplace Amazon pricing from one ruleset",
      paragraphs: [
        "Selling in several Amazon marketplaces usually means several sets of prices to keep consistent, and rules that drift apart over time. Amazon Price Automation lets you run one ruleset across the US, Canada, Mexico, UK, EU, Japan and Australia marketplaces. A margin floor, price band or clearance preset is defined once and applied where it is relevant, rather than rebuilt and maintained separately for each marketplace.",
        "The service is available on request to MuggleShip fulfillment clients, so your pricing sits with the same provider that handles your physical stock. Our Bedford operations team runs FBA Prep and eCommerce Fulfillment, and fulfillment accounts include analytics such as inventory health, sales velocity and restock recommendations, built only from your own Seller Central data. Read alongside your pricing reports, they help you judge when a clearance preset or a tighter band makes sense.",
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
      desc: "Fulfillment onboarding is completed within 5 business days of a signed quote. You then authorise access to your Amazon account through SP-API so the platform can work with your listings.",
    },
    {
      title: "Define rules and floors",
      desc: "Set your min/max price bounds, margin floors, and category or SKU rules, and choose margin-first, stock-clearance or steady-state presets where they fit. Nothing changes outside the limits you define.",
    },
    {
      title: "Review daily reports",
      desc: "Price updates run within your rules, and each day’s activity report shows what changed, when, and how each rule affected sales velocity and margin, so you can refine rules over time.",
    },
  ],
  idealFor: [
    "Amazon sellers who already know their target margins and want them enforced on every automated price change.",
    "Brands selling across UK, EU and US marketplaces who want one ruleset instead of several.",
    "Sellers with surplus or end-of-line stock who want to clear it without dropping below a margin floor.",
    "Teams that need an auditable daily record of price changes for finance or management review.",
    "Catalogues mixing hero products and slow movers that need different rules at category and SKU level.",
    "MuggleShip fulfillment clients who want pricing decisions to stay transparent and under their own control.",
  ],
  faqs: [
    {
      q: "What is Amazon price automation, and how is it different from editing prices by hand?",
      a: "Amazon price automation means your pricing rules are applied to your listings automatically, instead of someone editing prices one by one in Seller Central. With MuggleShip, you set the rules — price bounds, margin floors, category and SKU rules — and price updates are sent to Amazon through SP-API. You stop spending time on routine edits but keep full control over the limits.",
    },
    {
      q: "Is this a repricer that tracks other sellers’ prices?",
      a: "No. Amazon Price Automation is not a competitor-tracking repricer. It applies only the rules and parameters you define — min/max bounds, margin floors, category and SKU rules, and strategy presets — and it does not collect, aggregate or display data about other sellers. Every price change follows your own logic, which is why each one can be explained from your rules and reviewed in the daily report.",
    },
    {
      q: "Can a rule ever push my price below my margin?",
      a: "No rule is allowed to. Margin floors are hard limits: whatever a category rule, SKU rule or strategy preset would otherwise do, the platform does not push a price below the margin you set. Combined with your minimum price bound, this gives each product a firm lower limit, and the daily activity report lets you confirm the floor held.",
    },
    {
      q: "Which Amazon marketplaces does it cover?",
      a: "One ruleset can be applied across Amazon’s US, CA (Canada), MX (Mexico), UK, EU, JP (Japan) and AU (Australia) marketplaces. A margin floor, price band or clearance preset is set once rather than rebuilt for each marketplace. Your stock is still prepped, stored and dispatched by our operations team at the Bedford warehouse in the UK.",
    },
    {
      q: "How does MuggleShip access my Amazon account, and what happens to my data?",
      a: "Access runs through Amazon’s Selling Partner API (SP-API), which you authorise as the account owner. The service operates exclusively on rules and parameters you define, does not collect, aggregate or display data about other sellers, and uses the data processed for you solely to operate your own business. That data belongs to you as the authorising seller.",
    },
    {
      q: "What do the daily activity reports show?",
      a: "Each report covers your own catalogue and lists which prices changed and when, alongside how each rule affected sales velocity and margin. You can use it to spot rules that are too cautious or too aggressive, check that floors and bounds held, and keep a record of pricing decisions for your finance team or accountant.",
    },
    {
      q: "Who can use it, and how is it priced?",
      a: "Amazon Price Automation is available on request to MuggleShip fulfillment clients. Fulfillment accounts are priced by quote, tailored to your volume and service mix, with no setup fees, no monthly subscriptions and no long-term contracts, so you pay only for the services you use. Mention price automation when you enquire and we will send an itemised, no-obligation quote within 24 hours.",
    },
  ],
  related: ["amazon-listing-optimization", "fba-prep-uk", "ecommerce-fulfillment-uk"],
  availability: "Available on request to MuggleShip fulfillment clients.",
  disclosure:
    "MuggleShip's pricing automation operates exclusively on rules and parameters defined by you, the seller. The platform does not collect, aggregate, or display data about other sellers. All data processed through MuggleShip belongs to the authorizing seller and is used solely to operate their own business.",
  ctaLabel: "Request access",
};

export default service;
