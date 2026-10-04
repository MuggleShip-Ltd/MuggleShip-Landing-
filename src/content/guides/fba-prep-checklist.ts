import type { GuideContent } from "@/lib/guides";

const guide: GuideContent = {
  slug: "fba-prep-checklist",
  metaTitle: "FBA Prep Checklist: Stage-by-Stage Do-List (UK)",
  metaDescription: "A printable FBA prep checklist for UK sellers: supplier orders, FNSKU labels, inspection, packaging, cartons, pallets, dispatch and checking Amazon receipts.",
  kicker: "Checklist",
  h1: "The FBA prep checklist: what to check before you send stock to Amazon",
  intro: "This FBA prep checklist breaks an Amazon inbound shipment into eight stages, from the purchase order you send your supplier to the receipt Amazon records at the fulfillment centre. Each stage is a short list you can tick off or copy into your own SOP. It deliberately skips the theory, so keep Seller Central open alongside it for the current requirements.",
  published: "2026-10-04",
  updated: "2026-10-04",
  keyTakeaways: [
    "Most prep problems are cheapest to fix at the supplier stage, before goods are made, labelled and boxed.",
    "Confirm every listing, its barcode type and its FNSKU before a single label is printed.",
    "Inspect stock on arrival and quarantine anything damaged, mislabelled or short before it enters a carton.",
    "Check carton and pallet weights and dimensions against Amazon's current limits in Seller Central, not against memory.",
    "Reconcile received quantities after delivery and follow up any discrepancy while the paperwork is fresh.",
  ],
  sections: [
    {
      heading: "1. Before you order from your supplier",
      paragraphs: [
        "The cheapest place to solve an FBA prep issue is in the purchase order. Anything your supplier can do at the factory, such as bagging units or printing your barcode, saves handling later, but only if the instructions are written down and agreed before production starts. Use this stage of the FBA prep checklist to set those expectations in writing.",
      ],
      list: {
        items: [
          "Confirm the exact product specification, pack size and units per outer carton in writing with your supplier.",
          "Decide whether the supplier will apply FNSKU labels or bag units, or whether that happens after the goods land in the UK.",
          "Send the supplier your label files and placement instructions if they are labelling, and request a photo of a finished sample.",
          "Ask for a packing list showing SKU, quantity per carton and total cartons, so your inbound inspection has something to check against.",
          "Check whether any item is fragile, liquid, sharp, expiry-dated or possibly hazmat, and flag it early in Seller Central.",
          "Agree carton marking with the supplier so each outer box shows the SKU and quantity on the outside.",
        ],
      },
    },
    {
      heading: "2. Listing and FNSKU readiness",
      paragraphs: [
        "Before any stock moves, every product needs a live listing set up for FBA and a decided barcode approach. Getting this wrong is the root of most labelling mix-ups, because a label printed against the wrong listing or condition sends units into the wrong inventory pool. Work through this list in Seller Central once per new SKU, and again whenever you change a listing.",
      ],
      list: {
        items: [
          "Check that each ASIN is live, matched to the right listing and set to be fulfilled by Amazon.",
          "Decide per SKU whether you use an Amazon FNSKU label or the manufacturer barcode, and record the choice in your SKU sheet.",
          "Confirm the item condition on the listing matches the stock you are sending, since each condition has its own FNSKU.",
          "Check the listing for any prep or hazmat review flags and resolve them before booking a shipment.",
          "Print a test FNSKU label and scan it to confirm it reads cleanly and carries the right title and condition.",
          "Note which SKUs are variations of one parent, such as sizes or colours, so they are not confused on the bench.",
        ],
      },
    },
    {
      heading: "3. When stock arrives: inbound inspection",
      paragraphs: [
        "Inbound inspection is where you catch supplier mistakes while they are still your problem and not Amazon's. Count and check stock before any prep starts, and keep anything doubtful separate from good stock. A single carton of mixed sizes, for example a box labelled medium that also holds large T-shirts, can cause stranded or mismatched inventory if it goes through unchecked.",
      ],
      list: {
        items: [
          "Count cartons on delivery against the courier paperwork and note any visible damage before you sign.",
          "Open and count units per carton against the supplier packing list, recording every shortage or overage.",
          "Spot-check or fully inspect units for damage, defects, wrong colours or sizes, and missing parts or instructions.",
          "Check expiry or best-before dates on dated goods and confirm they are legible on each unit.",
          "Quarantine damaged, incorrect or doubtful units in a clearly marked area away from stock being prepped.",
          "Photograph any problems and send them to your supplier the same day while the evidence is clear.",
        ],
      },
    },
    {
      heading: "4. Unit labelling",
      paragraphs: [
        "Labelling is repetitive, which is why mistakes creep in. Work one SKU at a time, clear the bench between SKUs, and make sure every barcode on the outside of a unit points to the same product. If you want the reasoning behind each of these checks, our step-by-step guide on how to prep products for Amazon FBA in the UK explains why each one matters.",
      ],
      list: {
        items: [
          "Cover or remove old barcodes, supplier stickers and retail labels so only one scannable barcode is visible.",
          "Apply each FNSKU label flat, unwrinkled and on a smooth surface, not across a seam, edge or curve.",
          "Label one SKU at a time and clear leftover labels from the bench before starting the next SKU.",
          "Scan a sample of finished units to confirm every label reads and matches the expected SKU.",
          "Use labels and printing that will not smudge or peel, checking against Amazon's current label requirements in Seller Central.",
          "If a unit is bagged, make sure the FNSKU label is on the outside of the bag and scannable without opening it.",
        ],
      },
    },
    {
      heading: "5. Protective packaging by product type",
      paragraphs: [
        "Protective packaging depends on what the product is, not on what packaging you happen to have. A soft textile, a glass candle and a set of three tea towels sold as one SKU each need different handling. Check each product against Amazon's prep and packaging requirements, then confirm your approach on a few units before you prep a full run.",
      ],
      list: {
        items: [
          "Textiles and soft goods — poly bag them so they stay clean, using bags that meet Amazon’s current poly bag requirements in Seller Central.",
          "Fragile items such as glass, ceramics or candles — wrap in bubble wrap so the item survives handling without breakage.",
          "Liquids — seal caps securely and bag the unit so a leak cannot spread to other stock.",
          "Sets sold as one SKU — bag or band the set together and mark it as sold as a set, so it is not split up.",
          "Sharp items — cover exposed points or edges so they cannot injure handlers or puncture packaging.",
          "Small items — bag them if they could fall out of packaging or get lost in a carton.",
          "Expiry-dated items — keep dates visible on the outside of any added packaging and check Seller Central for dated-goods rules.",
        ],
      },
    },
    {
      heading: "6. Carton packing, carton labels and pallets",
      paragraphs: [
        "Once units are prepped, pack them into cartons that protect the stock and match what you will tell Amazon in the shipment. Every number you enter during shipment creation should come from the cartons on your floor, not from the purchase order.",
        "For larger shipments sent as a pallet or less-than-truckload delivery, the pallet itself becomes part of the prep. Amazon sets requirements for pallet type, height, weight and labelling, so check the current version in Seller Central each time rather than reusing an old shipment's setup.",
      ],
      list: {
        items: [
          "Use sturdy cartons in good condition and remove or cover any old shipping labels and barcodes.",
          "Fill empty space with dunnage so units cannot move, and keep heavy items at the bottom.",
          "Check carton weight and dimensions against Amazon's current limits in Seller Central before sealing.",
          "Record units per carton and SKU per carton exactly as packed, for the box contents information in your shipment.",
          "Print and apply carton labels from Seller Central once the shipment is created, one unique label per carton.",
          "Place carton labels on a flat side where they will not be cut when the carton is opened.",
          "Stack pallets with heavier cartons at the base and keep cartons within the pallet edges.",
          "Stretch-wrap pallets securely and apply pallet labels as Seller Central instructs for that shipment.",
        ],
      },
    },
    {
      heading: "7. Shipment creation and dispatch",
      paragraphs: [
        "Shipment creation is where your physical stock and Amazon's records have to agree. Enter what is actually packed, keep copies of everything you submit, and book collection only when the cartons are sealed and labelled. Anything you record now becomes your evidence later if Amazon's received quantities differ from what you sent.",
      ],
      list: {
        items: [
          "Create the shipment in Seller Central with quantities that match your counted, prepped units.",
          "Enter carton weights, dimensions and box contents from your packing records, not from estimates.",
          "Check the destination fulfillment centres Amazon assigns and label each carton for the right shipment ID.",
          "Book your carrier and note collection date, tracking numbers and any appointment details.",
          "Photograph sealed, labelled cartons or the finished pallet before collection as a record of condition.",
          "Keep the packing list, proof of collection and tracking in one folder per shipment.",
          "Mark the shipment as shipped in Seller Central once the carrier has collected it.",
        ],
      },
    },
    {
      heading: "8. After delivery: reconciling received quantities",
      paragraphs: [
        "A shipment is not finished when the carrier delivers it. Amazon checks in your stock over time, and the quantity it records as received is what you can sell. Watch the shipment until receiving closes, and compare Amazon's figures with your own records SKU by SKU.",
      ],
      list: {
        items: [
          "Track the shipment status in Seller Central from delivered through receiving to closed.",
          "Compare units received per SKU against units shipped, and note every shortage, overage or unexpected SKU.",
          "Gather your evidence for any discrepancy: packing list, carton photos, proof of delivery and box contents data.",
          "Raise a case or reconciliation request through Seller Central within the time Amazon currently allows.",
          "Look for patterns, such as one supplier or one SKU that is regularly short, and fix the cause at stage one.",
          "Update your checklist or SOP after each shipment with anything that slowed you down or went wrong.",
        ],
      },
      after: [
        "If you would rather not run these stages in-house, MuggleShip's FBA Prep service covers inspection of every item, FNSKU labelling, poly bagging and bubble wrap, removal of old labels, palletisation and shipping into Amazon fulfillment centres from our Bedford warehouse. You still own the listings and the shipment decisions; we handle the physical work on the floor.",
      ],
    },
  ],
  faqs: [
    {
      q: "What should be on an FBA prep checklist?",
      a: "A useful FBA prep checklist follows the stock from supplier to Amazon: supplier instructions, listing and FNSKU checks, inbound inspection, unit labelling, protective packaging, carton and pallet packing, shipment creation and dispatch, then reconciling what Amazon received. Keep each item short and checkable, and point to Seller Central for anything with a number attached.",
    },
    {
      q: "What do I need to check before I send stock to Amazon?",
      a: "Before you send stock to Amazon, check that every listing is live for FBA, units are counted and inspected, each unit carries one scannable barcode, fragile or loose items are protected, and cartons match what you entered in the shipment. Confirm carton weights and dimensions against Amazon's current limits in Seller Central before booking collection.",
    },
    {
      q: "Is there an FBA inbound checklist for UK sellers specifically?",
      a: "The prep stages are the same wherever you sell, but UK sellers should work from the UK marketplace in Seller Central, because requirements and options can differ by region. Stock arriving from overseas should also be inspected in the UK before prep, since that is your last chance to catch supplier errors before goods reach Amazon.",
    },
    {
      q: "How do I handle missing units after Amazon receives a shipment?",
      a: "Compare received quantities with what you shipped, SKU by SKU, once receiving has progressed. Gather your packing list, carton photos, proof of delivery and box contents data, then raise a case in Seller Central within the time Amazon allows. Good records at dispatch make this step far easier.",
    },
    {
      q: "Can someone else work through this checklist for me?",
      a: "Yes. A prep provider can take delivery from your supplier, inspect and label stock, bag or wrap it, pack and palletise it, and ship it into Amazon. MuggleShip's FBA Prep service does this from Bedford, with quote-based pricing, no setup fees and no long-term contract, and an itemised quote within 24 hours of an enquiry.",
    },
  ],
  relatedServices: ["fba-prep-uk", "returns-management", "ecommerce-fulfillment-uk"],
  relatedGuides: ["how-to-prep-products-for-amazon-fba-uk", "ddp-vs-dap-shipping-to-eu-from-uk"],
};

export default guide;
