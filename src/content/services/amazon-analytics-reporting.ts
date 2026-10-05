import type { ServiceContent } from "@/lib/services";

const service: ServiceContent = {
  slug: "amazon-analytics-reporting",
  name: "Amazon Analytics & Reporting",
  metaTitle: "Amazon Analytics and Reporting for Your Own Data",
  metaDescription:
    "Amazon analytics and reporting from your own Seller Central data: inventory health, sales velocity, restock and returns. Included with fulfillment. Get a quote.",
  kicker: "Seller Central reporting",
  h1: "Amazon analytics and reporting built only from your own data",
  intro:
    "Amazon Analytics & Reporting gives MuggleShip fulfillment clients clear reports on inventory health, fulfillment SLA, sales velocity, restock recommendations and returns. Every report is built only from your own Seller Central data, never combined with other sellers’ figures, and you can schedule CSV or email exports for your team. It is included with your fulfillment account, so the reports sit alongside the stock we store and dispatch for you.",
  highlights: ["Built from your own data", "Scheduled CSV and email exports", "Included with fulfillment accounts"],
  included: [
    {
      icon: "boxes",
      title: "Inventory health report",
      desc: "See which stock is selling, which is ageing, and which has stopped moving, so you can act on slow lines before they tie up more cash and space.",
    },
    {
      icon: "clock",
      title: "Fulfillment SLA reporting",
      desc: "Follow how your orders are processed and dispatched from our Bedford warehouse, so you can check the service you are paying for against your own records.",
    },
    {
      icon: "trending",
      title: "Sales velocity by SKU",
      desc: "Track how quickly each SKU sells, so you can tell steady sellers from slowing lines and see which products are gaining or losing momentum in your catalogue.",
    },
    {
      icon: "list",
      title: "Restock recommendations",
      desc: "Reorder suggestions that use your sales velocity to help you decide when to place your next purchase order, before a fast-selling product runs low.",
    },
    {
      icon: "returns",
      title: "Returns analytics",
      desc: "Return rates by SKU and the reasons buyers give, so you can find product, listing or packaging problems that keep sending orders back.",
    },
    {
      icon: "file",
      title: "Scheduled CSV and email exports",
      desc: "Set reports to arrive by email or download them as CSV files for your spreadsheets, finance team or own reporting tools, without logging in to Seller Central.",
    },
  ],
  sections: [
    {
      heading: "What Amazon analytics and reporting covers",
      paragraphs: [
        "Amazon analytics and reporting at MuggleShip brings together the figures a fulfillment client checks most often: inventory health, fulfillment SLA, sales velocity, restock recommendations and returns. Instead of piecing these together from separate Seller Central screens and downloads, you get reports organised around the questions you actually need to answer each week, from what to reorder to which products are coming back.",
        "The reports are part of your fulfillment account rather than a separate product to buy. Because MuggleShip already stores, picks, packs and dispatches your stock, your reporting sits next to the operation it describes. You can look at stock levels, order handling and returns in one place, then raise anything that needs attention with the same operations team that handles your inventory day to day.",
      ],
    },
    {
      heading: "Seller Central reporting built only from your own data",
      paragraphs: [
        "Every report is built from your own Seller Central data, accessed through Amazon’s Selling Partner API (SP-API) with your authorisation as the account owner. SP-API is the interface Amazon provides so that applications a seller chooses to authorise can work with their account. The platform does not collect, aggregate or display data about other sellers, so there are no market benchmarks or competitor figures mixed into your reports.",
        "That keeps the numbers easy to trust and easy to explain. Every figure traces back to your own sales, stock and returns, which means you can reconcile reports with your own accounts and share them with a finance team or business partner without caveats about where the data came from. The data processed for you belongs to you and is used solely to operate your own business.",
      ],
    },
    {
      heading: "Amazon inventory health report and restock recommendations",
      paragraphs: [
        "The Amazon inventory health report shows how your stock is performing: what is selling through, what is ageing, and what has stopped moving. Ageing stock is worth catching early, because the longer it sits the more storage it uses and the harder it becomes to clear. Seeing it flagged lets you decide whether to run a promotion, change a price rule, or stop reordering that line.",
        "Restock recommendations work from the other direction. Using sales velocity by SKU, they suggest when to reorder so you can plan purchase orders before a fast seller runs low, rather than reacting once it has already gone out of stock. You still make the final call on quantities and timing, but you start from your own sales history instead of a guess or a spreadsheet someone forgot to update.",
        "Sales velocity is also useful on its own. Tracking each SKU over time helps you see which products are gaining momentum and which are slowing, so stock decisions, listing work and pricing rules can follow what your catalogue is actually doing rather than what it was doing when you last ran the numbers by hand.",
      ],
    },
    {
      heading: "Returns analytics and fulfillment SLA reporting",
      paragraphs: [
        "Returns analytics breaks your returns down by SKU and by the reason buyers give. A cluster of returns for one reason often points to a fixable cause, such as a sizing note missing from the listing, an image that sets the wrong expectation, or packaging that is not protecting the product. Reviewing return reasons regularly helps you decide what to change before the same problem repeats across more orders.",
        "Fulfillment SLA reporting covers the service side: how your orders are processed and dispatched from our Bedford warehouse. It gives you a record to check against your own order data and a factual basis for any conversation with our operations team. Together with returns analytics, it shows you both how orders leave and why some of them come back.",
      ],
    },
  ],
  process: [
    {
      title: "Request access",
      desc: "Tell us what you sell, which Amazon marketplaces you use and roughly how many SKUs you hold, and we send an itemised, no-obligation fulfillment quote within 24 hours. Reporting is included with the account.",
    },
    {
      title: "Onboard and authorise",
      desc: "Fulfillment onboarding takes place within 5 business days of a signed quote. You authorise SP-API access from your Amazon account so reports can be built from your own Seller Central data.",
    },
    {
      title: "Choose reports and exports",
      desc: "Agree which reports matter most to your team, from inventory health to returns analytics, and set up scheduled CSV or email exports for the people who use them, such as buyers, finance or management.",
    },
    {
      title: "Review and act",
      desc: "Use the reports in your regular planning: time reorders from restock recommendations, deal with ageing stock early, and follow up return reasons with listing or packaging changes.",
    },
  ],
  idealFor: [
    "Amazon sellers who want inventory, sales and returns reporting alongside the warehouse holding their stock.",
    "Brands that plan purchase orders and want restock recommendations based on their own sales velocity.",
    "Sellers with large or mixed catalogues who need to spot ageing and slow-moving stock early.",
    "Teams that want scheduled CSV or email reports for finance, buying or management reviews.",
    "Sellers with rising returns who want to see return reasons by SKU and fix the causes.",
    "Businesses that prefer reports built strictly from their own data, with no third-party benchmarks mixed in.",
  ],
  faqs: [
    {
      q: "What does Amazon analytics and reporting from MuggleShip include?",
      a: "Amazon analytics and reporting covers inventory health, fulfillment SLA, sales velocity by SKU, restock recommendations and returns analytics, with scheduled CSV and email exports. Every report is built only from your own Seller Central data. It is included with MuggleShip fulfillment accounts, so it sits alongside the storage, pick and pack, dispatch and returns handling we already carry out for your business.",
    },
    {
      q: "Do the reports include data about other sellers or market benchmarks?",
      a: "No. Reports are built only from your own Seller Central data. The platform does not collect, aggregate or display data about other sellers, so you will not see competitor figures, category benchmarks or market estimates. Every number relates to your own sales, stock and returns, which makes the reports straightforward to check against your own records and to explain to anyone in your business.",
    },
    {
      q: "How does MuggleShip access my Seller Central data?",
      a: "Access runs through Amazon’s Selling Partner API (SP-API), which you authorise as the account owner from your Amazon account. The data is used to build your reports and to operate your own business, and it belongs to you as the authorising seller. It is not combined with data from any other seller who uses MuggleShip.",
    },
    {
      q: "How do restock recommendations help with reorder timing?",
      a: "Restock recommendations use your sales velocity by SKU to suggest when a product needs reordering, so you can plan purchase orders before a fast seller runs low. They are a starting point based on your own sales history, not an instruction: you still decide quantities and timing, taking into account things only you know, such as supplier lead times and planned promotions.",
    },
    {
      q: "Can I get reports by email or export them to a spreadsheet?",
      a: "Yes. You can schedule reports to arrive by email or download them as CSV files. CSV exports open in any spreadsheet program and can be loaded into your own reporting tools, so finance, buying or management teams can work with the figures in the format they already use, without needing to log in to Seller Central.",
    },
    {
      q: "Is analytics and reporting available without MuggleShip fulfillment?",
      a: "Analytics and reporting is included with MuggleShip fulfillment accounts rather than sold separately. Fulfillment pricing is quote-based and tailored to each account, with no setup fees, no monthly subscriptions and no long-term contracts. Request access and we will send an itemised, no-obligation quote within 24 hours, with reporting included once your account is set up.",
    },
  ],
  related: ["amazon-price-automation", "amazon-listing-optimization", "ecommerce-fulfillment-uk"],
  availability: "Included with MuggleShip fulfillment accounts.",
  disclosure:
    "MuggleShip's reporting is built only from the authorizing seller's own Seller Central data. The platform does not collect, aggregate, or display data about other sellers. All data processed through MuggleShip belongs to the authorizing seller and is used solely to operate their own business.",
  ctaLabel: "Request access",
};

export default service;
