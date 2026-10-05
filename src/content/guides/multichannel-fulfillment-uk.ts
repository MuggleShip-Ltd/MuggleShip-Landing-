import type { GuideContent } from "@/lib/guides";

const guide: GuideContent = {
  slug: "multichannel-fulfillment-uk",
  metaTitle: "Multichannel Fulfillment UK: One Stock Pool Guide",
  metaDescription: "How UK sellers on Amazon, Shopify and eBay can run multichannel fulfillment from one inventory pool: FBA and FBM options, stock splits, sync and reporting.",
  kicker: "Multichannel guide",
  h1: "Multichannel fulfillment in the UK: running Amazon, Shopify and eBay from one stock pool",
  intro: "Selling on Amazon, your own Shopify store and eBay at the same time is a sensible way to spread risk, but it turns fulfillment into a stock-control problem. This guide to multichannel fulfillment in the UK explains what goes wrong when stock is split badly, the main operating models, how to divide units between FBA and a 3PL, and how to keep inventory, packaging and reporting consistent across every channel.",
  published: "2026-10-05",
  updated: "2026-10-05",
  keyTakeaways: [
    "Treat all your sellable units as one inventory pool with one source of truth, even if they sit in two physical locations.",
    "Most sellers end up with a hybrid model: FBA for Amazon orders, plus a 3PL that ships direct orders and replenishes FBA.",
    "Split stock between FBA and your 3PL using sales velocity and lead times, and review the split on a fixed schedule.",
    "Sync inventory automatically and hold a small buffer per channel so a delay in one feed does not cause overselling.",
    "Keep packaging and reporting consistent across channels so customers get the same brand experience and you can compare true costs.",
  ],
  sections: [
    {
      heading: "What multichannel fulfillment means for a UK seller",
      paragraphs: [
        "Multichannel fulfillment in the UK simply means shipping orders from several sales channels, such as Amazon, Shopify, eBay, Etsy or WooCommerce, using a single, planned operation rather than a separate process for each. The goal is that a customer on any channel gets the right item, in the right packaging, on time, while you only buy and hold one stock of each product.",
        "The difficulty is that each channel has its own order flow, its own stock count and its own rules. Amazon wants FBA stock inside its own network; your Shopify store expects you to ship direct orders; eBay buyers expect fast dispatch and tracking. Without a plan, sellers end up running three small businesses that happen to share a product range.",
      ],
    },
    {
      heading: "The problems a split operation creates",
      paragraphs: [
        "Most multichannel headaches come from stock being counted in more than one place, or sitting in the wrong place. A seller who lists 200 units of a cotton throw on Shopify and eBay while 150 of them are already inside FBA will sooner or later sell stock they cannot ship. The problems below tend to arrive together, and they usually get worse as you add channels.",
      ],
      list: {
        items: [
          "Overselling — two channels sell the last unit within minutes of each other because stock counts are not updated in real time.",
          "Split stock — units sit in FBA while your direct channels show out of stock, or the reverse, so sales are lost on one side.",
          "Stranded stock — inventory is in the wrong location for where demand is, and moving it costs time and shipping.",
          "Inconsistent packaging — Amazon orders arrive in one box style and Shopify orders in another, so the brand looks different by channel.",
          "Duplicated admin — separate order downloads, carrier accounts and stock spreadsheets for each marketplace multiply the chance of errors.",
          "Unclear costs — fulfillment costs are recorded differently per channel, so you cannot tell which channel is actually profitable.",
        ],
      },
    },
    {
      heading: "Your options: all-in FBA, self-fulfil, or a 3PL feeding both",
      paragraphs: [
        "There are three broad ways to run Amazon and Shopify fulfillment together, and each suits a different stage of business. None is right for everyone, so compare them against your order volume, product type and how much warehouse work you want to do yourself.",
        "Amazon also offers its own option for fulfilling non-Amazon orders from FBA stock. If you are considering it, check the current terms, eligibility and fees in Seller Central, and think about whether Amazon-branded packaging and Amazon's handling suit your own store's customers.",
      ],
      list: {
        items: [
          "All-in FBA — all stock sits with Amazon and other channels are fulfilled from it, which is simple but ties every channel to Amazon's terms and packaging.",
          "Self-fulfil everything (FBM) — you store and ship all orders yourself, keeping control but taking on space, staff, packaging and carrier management.",
          "Hybrid with a 3PL — a third-party warehouse holds your main stock, ships Shopify, eBay and FBM orders, and sends replenishment shipments into FBA.",
          "Hybrid in-house — you keep main stock yourself and send it into FBA, which works at low volume but stretches as orders grow.",
        ],
      },
      after: [
        "For many growing UK sellers, the hybrid 3PL model is the practical middle ground. It keeps FBA and FBM side by side: Amazon ships its own orders from its network, while the 3PL acts as the central stock holding that feeds both your direct customers and Amazon. This is how MuggleShip's eCommerce Fulfillment service is usually used, with orders flowing in from Amazon, Shopify, eBay, Walmart, WooCommerce, BigCommerce and Etsy.",
      ],
    },
    {
      heading: "How to split stock between FBA and a 3PL",
      paragraphs: [
        "The split between FBA and your 3PL should follow demand, not habit. Start by looking at how many units of each SKU sell per week on Amazon and how many sell on your other channels. Then add the time it takes to prep, ship and have stock received into FBA. That lead time decides how much cover Amazon needs before the next replenishment lands.",
        "Amazon applies its own storage limits, capacity rules and storage fees, and these change, so check the current position in Seller Central before deciding how much to send. Holding the bulk of slower-moving stock at your 3PL and sending smaller, more frequent FBA shipments often keeps more units available for every channel.",
      ],
      list: {
        ordered: true,
        items: [
          "List every SKU with its weekly sales on Amazon and its weekly sales across your other channels combined.",
          "Note the full lead time to get stock live in FBA, from prep at the 3PL through to Amazon finishing receiving.",
          "Set an FBA target of enough units to cover Amazon sales over that lead time, plus a safety margin you choose.",
          "Keep the remaining units at the 3PL as the central pool for direct orders and future FBA replenishment.",
          "Flag slow sellers and bulky items, which are often cheaper to keep mainly at the 3PL and send to FBA in small batches.",
          "Review the split on a fixed schedule, such as weekly, and after any promotion or seasonal peak.",
        ],
      },
      after: [
        "Replenishment works best when the 3PL can prep stock to Amazon's requirements in the same building, rather than moving it to a separate prep centre. MuggleShip's FBA Prep service handles FNSKU labelling, bagging, inspection and palletisation from the same Bedford stock that ships your direct orders.",
      ],
    },
    {
      heading: "Keeping one inventory pool in sync across channels",
      paragraphs: [
        "One inventory pool does not mean one physical location. It means one agreed number for how many units of each SKU you can sell, with every channel drawing from it. In a hybrid model, your FBA stock is managed by Amazon, while the 3PL's stock is shared by your other channels and by FBA replenishment.",
        "The practical rule is to pick a single system as the source of truth for your 3PL stock, whether that is your warehouse's system, your Shopify admin or a dedicated inventory tool, and push stock levels out to every channel from it. Manual spreadsheet updates rarely keep pace once you sell on more than two channels.",
      ],
      list: {
        items: [
          "Connect each sales channel to your warehouse so orders download automatically and stock levels update as orders are picked.",
          "Use the same SKU code for a product on every channel, or keep a clear mapping table if marketplaces force different codes.",
          "Hold a small buffer on each channel, for example listing a few units fewer than you hold, to absorb sync delays.",
          "Deduct units from the 3PL pool as soon as an FBA replenishment shipment is planned, not when it arrives at Amazon.",
          "Check that bundles and multipacks draw down the correct number of individual units from the pool.",
          "Reconcile physical stock against system stock regularly and investigate any SKU that keeps drifting.",
        ],
      },
    },
    {
      heading: "Branded packaging consistency across channels",
      paragraphs: [
        "Customers who buy from your Shopify store and later from Amazon or eBay should feel they are dealing with the same brand. FBA orders ship in Amazon's own packaging, so the consistency you control is on your direct orders and on the product packaging itself, which travels inside every box regardless of channel.",
        "Decide on a packaging standard per product type, and apply it to every direct order whichever marketplace it came from. A glass candle should get the same protective wrap whether it was sold on Etsy or your own site, and a gift set should be presented the same way each time.",
      ],
      list: {
        items: [
          "Write a packing specification per SKU or product type, covering box size, protective materials and any inserts.",
          "Decide whether marketplace orders get branded boxes or plain outer packaging, and keep that rule consistent per channel.",
          "Check marketplace rules on inserts and marketing material before adding them, as some channels restrict what can go in the box.",
          "Make sure product packaging carries your branding clearly, since that is the one layer every customer sees.",
          "Agree packaging stock levels with your warehouse so a shortage of branded boxes does not hold up orders.",
        ],
      },
    },
    {
      heading: "Reporting: knowing what each channel really costs and earns",
      paragraphs: [
        "Multichannel selling only pays if you can see channel-level performance. At a minimum, track sales velocity per SKU per channel, stock cover in FBA and at your 3PL, fulfillment cost per order, returns rate and dispatch performance. Those figures tell you when to replenish FBA, which SKUs to move, and whether a channel is worth the effort.",
        "Pull the numbers from the same sources every time and compare like with like: FBA fees from Seller Central, 3PL charges from your invoices, and order data from each marketplace. MuggleShip's Analytics & Reporting service builds inventory health, sales velocity and restock recommendations from your own Seller Central data, with scheduled CSV or email exports.",
      ],
      list: {
        items: [
          "Weekly — check stock cover per SKU in FBA and at the 3PL, and plan any replenishment shipments.",
          "Weekly — review oversells, cancellations and late dispatches by channel to spot sync or capacity problems early.",
          "Monthly — compare fulfillment, storage and returns costs per channel against sales and margin for each.",
          "Quarterly — revisit your FBA and 3PL split, slow-moving stock and which channels deserve more inventory.",
        ],
      },
    },
  ],
  faqs: [
    {
      q: "What is multichannel fulfillment in the UK?",
      a: "Multichannel fulfillment in the UK means shipping orders from several sales channels, such as Amazon, Shopify, eBay and Etsy, from one planned operation and one inventory pool. It usually combines FBA for Amazon orders with a 3PL or in-house warehouse that ships direct orders and replenishes FBA, so you avoid overselling and duplicated admin.",
    },
    {
      q: "Can I use FBA and FBM at the same time?",
      a: "Yes, many sellers run FBA and FBM side by side, often on the same products. Amazon orders ship from FBA stock, while a 3PL or your own warehouse handles other channels and acts as backup stock. Check Seller Central for the current rules on running both fulfillment methods on one listing before you set it up.",
    },
    {
      q: "How do I stop overselling across Amazon, Shopify and eBay?",
      a: "Use one system as the source of truth for stock, connect every channel to it so orders and stock levels update automatically, and keep a small buffer on each listing to cover sync delays. Use consistent SKU codes across channels and reconcile physical stock against system stock regularly.",
    },
    {
      q: "How much stock should I keep in FBA versus a 3PL?",
      a: "Base it on demand and lead time. Keep enough in FBA to cover Amazon sales for the time it takes to prep, ship and have new stock received, plus a safety margin. Hold the rest at your 3PL for direct orders and replenishment, and check Amazon's current storage limits and fees in Seller Central.",
    },
    {
      q: "Can one UK 3PL handle both Amazon FBA replenishment and Shopify orders?",
      a: "Yes. A 3PL can store your main stock, pick and pack direct orders from Shopify, eBay and other channels, and prep replenishment shipments into FBA. MuggleShip does this from its Bedford warehouse, with quote-based pricing, no setup fees or monthly subscriptions, and an itemised quote within 24 hours of an enquiry.",
    },
  ],
  relatedServices: ["ecommerce-fulfillment-uk", "fba-prep-uk", "amazon-analytics-reporting"],
  relatedGuides: ["how-to-choose-a-3pl-uk", "ecommerce-returns-process-uk"],
};

export default guide;
