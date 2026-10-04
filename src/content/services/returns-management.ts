import type { ServiceContent } from "@/lib/services";

const service: ServiceContent = {
  slug: "returns-management",
  name: "Returns Management",
  metaTitle: "eCommerce Returns Management UK and RMA Handling",
  metaDescription:
    "eCommerce returns management UK: returns processed same day, inspected and graded to your rules, then restocked or disposed of. Itemised quote in 24 hours.",
  kicker: "Returns processing service",
  h1: "eCommerce returns management UK: every return checked and handled the same day",
  intro:
    "MuggleShip provides eCommerce returns management in the UK for Shopify, Amazon and marketplace sellers. Returned parcels come back to our Bedford warehouse, where they are logged against their RMA, inspected and graded against the instructions you set. Sellable items go back into your available stock, damaged goods are disposed of, and any replacement you have approved is re-shipped. Returns are processed the same day.",
  highlights: ["Returns processed same day", "Handled to your instructions", "Pay only for services used"],
  included: [
    {
      icon: "returns",
      title: "Returns accepted and logged",
      desc: "Returned parcels are accepted at our Bedford warehouse and logged against their RMA (return merchandise authorisation), so each one is matched to the order it came from.",
    },
    {
      icon: "clipboard",
      title: "Inspection on arrival",
      desc: "Each returned item is opened and inspected by our operations team, who check the product and its condition before anything is decided about where it goes next.",
    },
    {
      icon: "sliders",
      title: "Graded to your rules",
      desc: "You set the rules for what counts as sellable and what is treated as damaged, and we grade every return against those instructions rather than guessing.",
    },
    {
      icon: "boxes",
      title: "Restocking sellable items",
      desc: "Items that pass your rules go back into your available inventory at Bedford, ready to be picked for the next order on any connected sales channel.",
    },
    {
      icon: "shield",
      title: "Disposal of damaged goods",
      desc: "Items you class as damaged are disposed of instead of restocked, so a faulty unit is not packed again and sent out to another customer.",
    },
    {
      icon: "truck",
      title: "Replacement re-shipping",
      desc: "Where you have approved a replacement, we pick it from your stock and ship it to the customer with tracking, using carriers such as Royal Mail, DPD or Evri.",
    },
  ],
  sections: [
    {
      heading: "How our returns processing service works, from RMA to restock",
      paragraphs: [
        "eCommerce returns management is fulfillment running in reverse, which is why it is often called reverse logistics. Instead of stock leaving the warehouse, it comes back from customers, and every item needs a decision. At MuggleShip that work happens at our Bedford warehouse, carried out by the same operations team that picks and packs your outbound orders, so returns are handled next to the stock records they change.",
        "The flow starts with the RMA, or return merchandise authorisation: the record that links a returned parcel to the order it belongs to. When a return arrives we accept it, log it against its RMA and inspect the item. It is then graded against your instructions and either restocked or disposed of, and if you have approved a replacement, that is picked and shipped too. Returns are processed the same day rather than left in a queue.",
      ],
    },
    {
      heading: "Returns inspection and restocking, graded against your rules",
      paragraphs: [
        "What happens to a returned item is your decision, not ours. During onboarding we record your handling instructions as part of SOP alignment: what condition an item must be in to be resold, what should be treated as damaged, and when a replacement should go out. Those rules can differ by product, because the standard for a sealed accessory is rarely the same as for something that has been opened and used.",
        "Each return is then inspected and graded against those rules. Items that meet your sellable standard go back into available inventory at Bedford, where they can be picked for the next order like any other unit. Items that fail are disposed of, so damaged stock does not take up storage space you are paying for, and it cannot be sent by mistake to the next customer who orders that product.",
        "Your instructions are not fixed at onboarding. If a supplier corrects a fault, or you decide to stop reselling opened items in a particular category, tell us and we change how future returns of those products are graded. The aim is that our team applies the judgement you would apply yourself if you were opening the parcels.",
      ],
    },
    {
      heading: "Returns for Shopify and marketplace sellers, from one UK stock pool",
      paragraphs: [
        "Returns Management works alongside our eCommerce Fulfillment. When we also fulfil your orders, an item bought on your Shopify store or on a marketplace such as eBay, Etsy or Walmart comes back to the same Bedford warehouse it was dispatched from and is restocked into the same inventory. There is no separate returns stock to reconcile, and a unit that passes inspection can be sold again on whichever channel orders it next.",
        "Restocked units are not limited to website and marketplace orders. Amazon sellers who also use our FBA Prep service can have sellable returns FNSKU labelled and added to a future shipment into Amazon FBA fulfillment centres. Brands selling abroad can use Cross-Border Shipping to send international orders from the same stock on a DDP (delivered duty paid) basis, with MuggleShip handling customs clearance.",
      ],
    },
    {
      heading: "Returns data, reporting and Amazon buyer messages",
      paragraphs: [
        "Fulfillment accounts include Analytics & Reporting, which covers returns analytics alongside inventory health, fulfillment SLA, sales velocity and restock recommendations. Reports are built only from your own Seller Central data and can be delivered as scheduled CSV or email exports. Seeing which products come back is the starting point for fixing the listing, packaging or product problems behind them, before they cost you more stock and margin.",
        "For Amazon orders, returns correspondence with buyers can also be handled inside Amazon’s Buyer-Seller Messaging service, written to Amazon’s Communication Guidelines and never used to ask for reviews. That keeps conversations about a return in the channel Amazon expects, alongside the order enquiries and dispatch updates the same service covers.",
      ],
    },
  ],
  process: [
    {
      title: "Describe your returns",
      desc: "Tell us your sales channels, active SKUs, monthly order and return volumes and how you want returns handled. We reply with an itemised, no-obligation quote within 24 hours of your enquiry.",
    },
    {
      title: "Agree your handling rules",
      desc: "Within 5 business days of a signed quote we take in your inventory, set up your integrations and write your returns instructions into our SOPs: what is resold, what is disposed of, when replacements go out.",
    },
    {
      title: "Returns received and graded",
      desc: "Customers send returns to our Bedford warehouse. Each parcel is logged against its RMA, inspected and graded to your rules, then restocked or disposed of, with returns processed the same day.",
    },
    {
      title: "Restock, re-ship and report",
      desc: "Sellable units rejoin your available inventory, approved replacements are shipped with tracking, and returns analytics from Analytics & Reporting, included with fulfillment accounts, show which products are coming back.",
    },
  ],
  idealFor: [
    "Shopify and marketplace sellers whose returns are arriving faster than the team can open and sort them.",
    "Brands that want returns graded against their own condition rules rather than case-by-case judgement calls.",
    "Sellers whose resaleable returns sit unprocessed for days instead of going back into sellable stock.",
    "Existing eCommerce Fulfillment clients who want returns handled by the same team, from the same stock.",
    "Overseas brands selling to UK customers who need returns received and processed inside the UK.",
  ],
  faqs: [
    {
      q: "What does your eCommerce returns management service in the UK include?",
      a: "Returns Management covers the whole return: accepting returned parcels at our Bedford warehouse, RMA handling, inspection, grading against your instructions, restocking sellable items into your inventory, disposing of damaged goods and re-shipping replacement items. Returns are processed the same day. If we also fulfil your orders, restocked units join the same stock your outbound orders are picked from.",
    },
    {
      q: "How do you handle RMAs?",
      a: "An RMA, or return merchandise authorisation, is the approval that links a customer’s return to the original order. RMA handling is part of the service: when a parcel arrives at Bedford we log it against its RMA, so the return is matched to the order it came from and to the instructions you have set for that product before it is inspected and graded.",
    },
    {
      q: "Who decides whether a returned item can be resold?",
      a: "You do. During onboarding we record your handling instructions as part of SOP alignment, setting out what condition an item must be in to go back into stock, what counts as damaged and when a replacement should be sent. Our team inspects each return and grades it against those rules, so the outcome reflects your standards rather than a call made by the warehouse.",
    },
    {
      q: "What happens to returns that cannot be resold?",
      a: "Items that fail your rules are treated as damaged goods and disposed of, rather than being put back on a shelf where they could be picked for another order. Because storage is billed by the space your stock occupies and for how long, keeping unsellable units out of your inventory also stops them adding to your storage costs.",
    },
    {
      q: "How quickly are sellable returns available to sell again?",
      a: "Returns are processed the same day they reach us. Once an item passes inspection against your rules, it goes back into available inventory at our Bedford warehouse and can be picked for the next order like any other unit. If you also use FBA Prep, sellable returns can be labelled and sent into Amazon as part of a later FBA shipment.",
    },
    {
      q: "Where do customers send their returns?",
      a: "Returns come to our Bedford warehouse at Unit 2, Caxton Road, Elms Farm Industrial Estate, Bedford MK41 0LF, which is where all of our fulfillment, prep and dispatch takes place. You use that address in your returns instructions to customers, and our operations team receives each parcel, logs it against its RMA and processes it the same day.",
    },
    {
      q: "How is returns processing priced?",
      a: "Every account gets custom pricing, worked out from your volumes and the mix of services you use, such as returns handling, fulfillment and storage. Returns handling carries no setup fee or monthly subscription, you are not tied into a long-term contract and you can cancel anytime. Tell us roughly how many orders and returns you handle each month and we will send an itemised, no-obligation quote within 24 hours.",
    },
  ],
  related: ["ecommerce-fulfillment-uk", "fba-prep-uk", "cross-border-shipping"],
};

export default service;
