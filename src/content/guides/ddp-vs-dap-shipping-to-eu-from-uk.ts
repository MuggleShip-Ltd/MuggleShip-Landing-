import type { GuideContent } from "@/lib/guides";

const guide: GuideContent = {
  slug: "ddp-vs-dap-shipping-to-eu-from-uk",
  metaTitle: "DDP vs DAP: Shipping to EU Customers from the UK",
  metaDescription: "DDP vs DAP for UK sellers shipping to EU customers: who pays import duty and VAT, what happens at the door, the paperwork involved and when each term fits.",
  kicker: "Cross-border shipping",
  h1: "DDP vs DAP: a UK seller's guide to shipping EU orders",
  intro: "Since Brexit, every parcel you send from the UK to a customer in the EU is an export, and someone has to pay the import VAT and any duty. DDP vs DAP is the choice of who that someone is. This guide explains both terms in plain English, what each means for your customer at the door, the paperwork behind them, and how to decide which to offer.",
  published: "2026-10-04",
  updated: "2026-10-04",
  keyTakeaways: [
    "Under DAP the buyer pays import VAT, duty and any carrier handling fee on delivery; under DDP the seller settles them before the parcel arrives.",
    "For consumer orders, unexpected charges at the door are a common cause of refused parcels, costly returns and complaints.",
    "DDP only works if your commercial invoice, HS codes, country of origin and declared values are accurate and consistent.",
    "DAP can still suit trade buyers, high-value one-off orders and customers who have agreed in advance to pay import charges.",
    "Customs and VAT rules change, so confirm the current position with GOV.UK, the EU's official guidance or your accountant before you set your terms.",
  ],
  sections: [
    {
      heading: "What DDP and DAP mean in plain English",
      paragraphs: [
        "DAP (Delivered at Place) and DDP (Delivered Duty Paid) are two of the Incoterms 2020 rules published by the International Chamber of Commerce. Incoterms set out who is responsible for each stage of a shipment: transport, risk, export clearance, import clearance and the taxes due at the border. In the DDP vs DAP comparison, the transport part is the same. The difference is what happens when the parcel reaches the destination country.",
        "Under DAP, you pay to get the goods to the buyer's address, but the buyer is responsible for import clearance and for paying import VAT and any customs duty. Under DDP, you take on everything: you or your shipping provider clear the goods through customs and pay the import charges, so the buyer receives the parcel with nothing left to pay.",
        "Incoterms were written for contracts between businesses, and parcel carriers often use the labels more loosely, offering \"DDP\" or \"DAP\" as a service option at checkout. The practical question for an eCommerce seller is simple: does your customer pay anything extra on delivery, or not?",
      ],
    },
    {
      heading: "What happens at the customer's door",
      paragraphs: [
        "Picture a customer in Lyon who orders a glass candle and a set of three tea towels from your Shopify store. With DAP, the parcel arrives in France, the carrier or postal operator clears it, pays the import VAT and any duty on the buyer's behalf, then asks the buyer to repay those amounts, usually with a handling or clearance fee on top. The buyer gets a text or a card asking for payment before release.",
        "With DDP, those charges were settled at or before clearance, so the courier simply hands the parcel over. From the customer's point of view it feels like a domestic order. The data and payments still happened; they just happened between you, your shipping provider and customs instead of at the front door.",
      ],
    },
    {
      heading: "Why surprise fees cost UK sellers more than they save",
      paragraphs: [
        "DAP looks cheaper on paper because the import charges move off your books. For consumer orders, that saving is often wiped out by what happens next. A buyer who paid the price shown at checkout and then receives a payment demand tends to feel misled, even if your terms mentioned import charges in small print.",
      ],
      list: {
        items: [
          "Refused parcels — some buyers decline to pay, so the parcel sits in a depot, is returned to you or is abandoned, and you pay outbound and return carriage.",
          "Delayed delivery — the parcel is held until the buyer pays, which turns a routine order into a support ticket about where the item is.",
          "Refund requests and chargebacks — buyers may ask you to cover the fees or dispute the payment with their card issuer.",
          "Negative feedback — marketplace feedback and product reviews that mention hidden charges can put off future EU buyers who read them.",
          "Lost repeat custom — a customer who paid unexpected fees once is less likely to order from a UK shop again.",
        ],
      },
      after: [
        "Before choosing DAP for consumer orders, add up what a refused parcel costs you in carriage, handling and lost stock, and compare it with the import charges you would have paid under DDP. For many consumer products, paying the charges upfront is the cheaper option once refusals and repeat-order losses are counted.",
      ],
    },
    {
      heading: "How sellers fund delivered duty paid eCommerce",
      paragraphs: [
        "Moving to delivered duty paid eCommerce means the import VAT, any duty and the clearance cost become part of your cost of sale. There are three common ways to handle that, and many sellers combine them by market or by product line.",
      ],
      list: {
        items: [
          "Absorb it — keep your UK prices and treat import charges as a cost of selling into the EU, which can work for high-margin products.",
          "Price it in — set separate EU prices in euros that include the expected VAT and duty, so the price shown is the price paid.",
          "Charge it as delivery — add a clearly labelled EU delivery or \"duties and taxes included\" charge at checkout.",
          "Mix by market — use landed-cost pricing for your biggest EU countries and a delivery charge for occasional destinations.",
        ],
      },
      after: [
        "Whichever approach you choose, make it visible before payment. EU consumers expect the checkout total to be final, and clear wording such as \"Price includes all import taxes and duties\" on product pages and in the basket reduces both abandoned baskets and pre-sale support questions from EU buyers.",
      ],
    },
    {
      heading: "The paperwork and data behind every EU parcel",
      paragraphs: [
        "DDP is only as reliable as the customs data attached to each shipment. If the description is vague or the value does not match the order, the parcel can be held, reassessed or returned, whoever is paying the charges. Build these fields into your product data once, rather than typing them per order.",
      ],
      list: {
        items: [
          "Commercial invoice — lists seller, buyer, goods, quantities, values and currency; customs uses it to assess what is owed.",
          "HS code — the commodity code for each product, which determines how customs classifies it and what duty applies.",
          "Country of origin — where the goods were made, not where they shipped from; this affects whether preferential treatment applies.",
          "Declared value — the actual transaction value per item, consistent with what the buyer paid, including how you treat shipping charges.",
          "Clear goods description — \"cotton tea towels, set of three\" rather than \"homeware\" or \"gift\".",
          "EORI number — your Economic Operators Registration and Identification number, needed to move goods out of the UK as a business.",
          "IOSS number, where used — identifies sales on which EU VAT was collected at checkout, so it is not charged again on import.",
        ],
      },
      after: [
        "IOSS, the EU's Import One-Stop Shop, lets sellers collect EU VAT at the point of sale on eligible lower-value consignments and pay it through one return, usually via an intermediary for UK businesses. Origin also matters: goods that qualify as UK origin under the UK–EU trade agreement may avoid duty, but products made elsewhere and resold from the UK generally do not. Check eligibility, limits and origin rules on GOV.UK, the EU's official guidance or with your accountant.",
      ],
    },
    {
      heading: "Who pays import duty on EU orders sold through marketplaces",
      paragraphs: [
        "If you sell on Amazon, eBay, Etsy or another marketplace, the answer to who pays import duty on EU orders may not be you or your customer alone. Some marketplaces collect and remit VAT themselves on certain sales to EU consumers, treating the marketplace as responsible for that VAT rather than the seller.",
        "Which sales are covered depends on the marketplace, the destination, the value of the consignment and where your goods are when they are sold. Do not assume one rule fits every channel. Check each marketplace's tax help pages, look at what your order reports show about VAT collected, and ask your accountant how marketplace-collected VAT interacts with any IOSS registration or DDP service you use, so the same VAT is not paid twice.",
      ],
    },
    {
      heading: "When DAP can still be the right choice",
      paragraphs: [
        "DDP is the safer default for consumer parcels, but DAP is not wrong in every case. It can make sense when the buyer understands import charges, wants to handle them through their own arrangements, or when the order value makes upfront calculation impractical.",
      ],
      list: {
        items: [
          "B2B buyers — trade customers often have their own EORI and VAT registration and may prefer to clear goods and reclaim import VAT themselves.",
          "High-value one-off orders — for a bespoke or large order, agreeing DAP in writing can be simpler than estimating landed cost upfront.",
          "Buyer-requested terms — some customers use their own customs broker and ask you to ship DAP.",
          "Non-EU destinations — for occasional orders to countries you rarely serve, DAP with a clear checkout warning may be workable.",
          "Low-volume testing — if you are trialling a market, DAP with explicit notice can be a short-term option before committing to DDP.",
        ],
      },
      after: [
        "In every DAP case, tell the buyer before they pay that import VAT, duty and carrier fees may be due on delivery. Put the same wording on the invoice and in your order confirmation. For routine consumer orders to the EU, offering DDP is usually the better experience and the one that protects your reviews.",
      ],
    },
    {
      heading: "How MuggleShip handles DDP from Bedford",
      paragraphs: [
        "MuggleShip's Cross-Border Shipping service ships EU and international orders on DDP terms, so your customers face no surprise fees on delivery, and we handle customs clearance. Orders are picked, packed and dispatched from our Bedford warehouse, with multi-marketplace dispatch from the UK covering orders from Amazon, Shopify, eBay and your other connected channels.",
        "If your stock is already with us through eCommerce Fulfillment, EU orders flow in automatically and are processed the same day alongside UK orders. Your part is keeping HS codes, country of origin and values accurate in your product data. Pricing is quote-based with no setup fees, and an itemised quote arrives within 24 hours.",
      ],
    },
  ],
  faqs: [
    {
      q: "DDP vs DAP: what is the difference?",
      a: "Both terms mean the seller pays to deliver the goods to the buyer's address. Under DAP, the buyer handles import clearance and pays import VAT, duty and any carrier fees on arrival. Under DDP, the seller or their shipping provider clears the goods and pays those charges, so the buyer has nothing to pay at the door.",
    },
    {
      q: "Do EU customers pay import VAT on orders from the UK?",
      a: "Import VAT is generally due on goods entering the EU from the UK. The question is who pays it and when: the buyer on delivery under DAP, the seller under DDP, or collected at checkout through IOSS or by a marketplace on certain sales. Confirm the current rules with GOV.UK, the EU's official guidance or your accountant.",
    },
    {
      q: "Do I need an EORI number to ship to EU customers from the UK?",
      a: "UK businesses moving goods out of the UK generally need a UK EORI number, and carriers will ask for it on export paperwork. If you act as importer of record in the EU, an EU EORI may also be needed. Check GOV.UK for current requirements and how to apply.",
    },
    {
      q: "What is IOSS and do UK sellers need it?",
      a: "IOSS is the EU's Import One-Stop Shop. It lets sellers collect EU VAT at checkout on eligible lower-value consignments and pay it through a single return, so the parcel is not charged again on import. UK sellers usually register through an EU-based intermediary. Whether it suits you depends on your order values and channels, so take advice.",
    },
    {
      q: "Can MuggleShip ship my EU orders on DDP terms?",
      a: "Yes. MuggleShip Cross-Border Shipping dispatches orders from our Bedford warehouse on DDP terms, handling customs clearance so your EU customers face no surprise fees on delivery. You provide accurate product data such as HS codes and country of origin, and we can quote within 24 hours of your enquiry.",
    },
  ],
  relatedServices: ["cross-border-shipping", "ecommerce-fulfillment-uk", "fba-prep-uk"],
  relatedGuides: ["how-to-prep-products-for-amazon-fba-uk", "fba-prep-checklist"],
};

export default guide;
