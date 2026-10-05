import type { GuideContent } from "@/lib/guides";

const guide: GuideContent = {
  slug: "volumetric-weight-explained",
  metaTitle: "Volumetric Weight Explained: How to Calculate It",
  metaDescription: "What volumetric weight is, how to calculate it from carton dimensions, how chargeable weight is set, and practical ways sellers cut it with better packaging.",
  kicker: "Shipping costs",
  h1: "Volumetric weight explained: how carriers charge for space, and how to pay for less of it",
  intro: "Volumetric weight, also called dimensional weight, is how carriers put a weight figure on the space a parcel takes up. If your cartons are large but light, you may be paying for air rather than product. This guide explains how volumetric weight is calculated, how it becomes your chargeable weight, and the packaging habits that keep it down, with a worked example you can repeat on your own cartons.",
  published: "2026-10-05",
  updated: "2026-10-05",
  keyTakeaways: [
    "Volumetric weight converts a parcel's size into a notional weight so carriers can charge for the space it occupies.",
    "It is usually calculated as length × width × height in centimetres divided by a divisor that varies by carrier and service.",
    "Chargeable weight is whichever is greater: the actual weight on the scale or the volumetric weight.",
    "Right-sized cartons, less void fill and accurate measuring are the most reliable ways to lower volumetric weight.",
    "Always check your carrier's current terms for the divisor, rounding rules and units before you rely on a calculation.",
  ],
  sections: [
    {
      heading: "What volumetric weight is",
      paragraphs: [
        "Volumetric weight is a calculated figure, not something you can read off a scale. A carrier takes the outside dimensions of a parcel, works out its volume and converts that volume into a weight using a set ratio. The result tells the carrier how heavy the parcel would be if it were packed at an assumed density.",
        "You will see it called dimensional weight, dim weight or volume weight depending on the carrier and the country, but the idea is the same. It matters most for light, bulky items such as pillows, lampshades, plastic storage boxes, toys in large retail packaging and anything shipped with a lot of protective padding.",
      ],
    },
    {
      heading: "Why carriers and warehouses charge for space as well as mass",
      paragraphs: [
        "A van, a lorry trailer or an aircraft hold fills up in two ways: by weight and by space. A cage full of duvets may be well under its weight limit and still be completely full. If carriers charged only by actual weight, light but bulky parcels would take up capacity without paying for it, so volumetric weight closes that gap.",
        "Warehouses face the same constraint. Racking, shelving and floor space are finite, so warehouse storage is commonly billed by the space goods occupy rather than by how heavy they are. A pallet of lightweight cushions uses as much racking as a pallet of tinned food. At MuggleShip, for example, storage is billed by space and duration, whether that is box, pallet, shelf or container storage, not by the number of SKUs.",
      ],
    },
    {
      heading: "How to calculate volumetric weight",
      paragraphs: [
        "The common formula for volumetric weight in metric units is: length × width × height in centimetres, divided by a divisor, giving a result in kilograms. The divisor is set by each carrier and can differ between services, such as domestic and international or express and economy. Some carriers work in inches and pounds with their own divisor instead.",
        "Because the divisor changes the answer so much, never assume one figure applies everywhere. Check your carrier's current terms, rate card or account documentation for the divisor, the units and any rounding rules before you price products or compare quotes.",
      ],
      list: {
        ordered: true,
        items: [
          "Measure the longest side of the packed parcel, the side at right angles to it, and the height, all at their widest points.",
          "Round each measurement the way your carrier specifies, since many round up to the next whole centimetre.",
          "Multiply length × width × height to get the volume in cubic centimetres.",
          "Divide the volume by your carrier's divisor for that service to get the volumetric weight in kilograms.",
          "Weigh the packed parcel on a calibrated scale and compare the two figures to find the chargeable weight.",
        ],
      },
    },
    {
      heading: "A worked example (illustrative figures)",
      paragraphs: [
        "The numbers below are illustrative only and use a divisor of 5,000 to keep the arithmetic simple. Your carrier's divisor may be different, and so may its rounding rules, so substitute your own figures before drawing any conclusions about cost or comparing one carrier against another.",
        "Say you ship a set of three cushions in a carton measuring 50 cm × 40 cm × 30 cm. The volume is 60,000 cubic centimetres. Divided by 5,000, that gives a volumetric weight of 12 kg. On the scale, the packed carton weighs 7 kg. Because 12 kg is greater than 7 kg, you would be billed as if the parcel weighed 12 kg.",
        "Now repack the same cushions, compressed slightly, into a 40 cm × 30 cm × 30 cm carton. The volume drops to 36,000 cubic centimetres, and the volumetric weight falls to 7.2 kg. The actual weight is still about 7 kg, so the chargeable weight is now 7.2 kg instead of 12 kg, purely from a smaller box.",
      ],
    },
    {
      heading: "Chargeable weight: the figure you actually pay on",
      paragraphs: [
        "Chargeable weight is the weight a carrier uses to price a shipment. In most cases it is the greater of the actual weight and the volumetric weight. Dense items, such as books or metal tools, are usually charged on actual weight, while light, bulky items are usually charged on volumetric weight.",
        "The same logic applies across a whole consignment. On a multi-carton or palletised shipment, carriers may compare total actual weight with total volumetric weight, or assess each piece separately, depending on the service. Rounding also matters: if your carrier rounds chargeable weight up to a set increment, a parcel just over a boundary costs the same as one near the top of the next band. Check how your carrier applies both rules.",
      ],
    },
    {
      heading: "Practical ways to reduce volumetric weight",
      paragraphs: [
        "Most of the saving comes from packaging decisions made once and repeated on every order. Small reductions in each dimension compound, because volume multiplies all three. Trimming a few centimetres off each side of a carton can make a noticeable difference to the volumetric weight, as the worked example above shows.",
        "Start with the products that ship most often or most bulkily, since that is where a change pays back fastest. Pack a few units of each into the cartons you currently use, note how much empty space is left, and compare the volumetric weight against the actual weight. Wherever the volumetric figure is clearly higher, there is usually room to tighten the packaging.",
      ],
      list: {
        items: [
          "Right-sized cartons — keep a small range of carton sizes matched to your best sellers instead of one large box for everything.",
          "Packaging choices — consider mailer bags or padded envelopes for soft, non-fragile items that do not need a rigid box.",
          "Flat-packing — ship items that can be assembled by the customer flat, with clear instructions, rather than built up.",
          "Less void fill — use only enough padding to stop movement; excess fill usually means the carton is too big.",
          "Compression — vacuum-pack or gently compress soft goods such as bedding and textiles where it will not damage the product.",
          "Retail packaging review — ask your supplier whether oversized display boxes can be slimmed down without hurting presentation.",
          "Accurate measuring — measure packed parcels at their widest points so declared dimensions match what the carrier records.",
        ],
      },
      after: [
        "Protection still comes first. A smaller box that leads to breakages or returns costs more than the shipping it saves, so test any new packaging on a handful of orders before rolling it out across a SKU. Fragile items such as glassware or ceramics still need enough cushioning to survive handling, even if that adds a little volume.",
      ],
    },
    {
      heading: "Where volumetric weight shows up in a seller's costs",
      paragraphs: [
        "Volumetric weight is not only a parcel-carrier issue. It can affect almost every leg of a product's journey, and the same oversized carton can cost you more than once. Look at where your goods travel and where they sit, and check which of these legs are priced on chargeable weight or on space.",
      ],
      list: {
        items: [
          "Inbound freight — air and courier shipments from suppliers are typically priced on chargeable weight, so supplier carton sizes matter.",
          "Inbound to Amazon — carton and pallet shipments into fulfillment centres may be priced by size as well as weight; check Seller Central.",
          "Customer orders — each parcel to a buyer is assessed individually, so a slightly oversized box repeats its cost on every order.",
          "Cross-border parcels — international services often use their own divisors, so check the terms for each destination and service.",
          "Returns — a returned item shipped back in its original oversized packaging is charged on the same basis again.",
          "Storage — warehouses commonly bill by the space stock occupies, so bulky retail packaging uses more of what you pay for.",
        ],
      },
      after: [
        "When you work out a product's landed cost or margin, use the chargeable weight for each leg rather than the product's weight on a spec sheet. For international orders, MuggleShip's Cross-Border Shipping service offers DDP dispatch from the UK with customs clearance handled, and the carton you choose still drives the chargeable weight on each parcel.",
      ],
    },
    {
      heading: "Measuring accurately and avoiding surprise adjustments",
      paragraphs: [
        "Carriers often measure parcels themselves as they pass through their network. If the dimensions you declared are smaller than what they record, the shipment can be re-billed at the higher figure, sometimes with an added charge. Bulging cartons are a common cause, because an overfilled box measures larger than its nominal size.",
        "Keep a tape measure and a calibrated scale at the packing bench, record standard dimensions and weights for each SKU and carton combination, and update them whenever packaging changes. If you use a fulfillment provider, ask how they measure and record parcels. With MuggleShip's eCommerce Fulfillment service, for instance, orders are picked, packed and quality checked before dispatch, and custom packaging options can help match carton size to the product.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you calculate volumetric weight?",
      a: "Multiply the parcel's length, width and height in centimetres, then divide by your carrier's divisor to get a weight in kilograms. As an illustration, a 50 × 40 × 30 cm carton with a divisor of 5,000 gives 12 kg. Divisors differ by carrier and service, so check your carrier's current terms before using the result.",
    },
    {
      q: "Is dimensional weight the same as volumetric weight?",
      a: "Yes. Dimensional weight, dim weight and volumetric weight all describe the same idea: a notional weight based on the space a parcel occupies. The name varies by carrier and region, and some carriers calculate it in inches and pounds rather than centimetres and kilograms, using a different divisor.",
    },
    {
      q: "What is chargeable weight?",
      a: "Chargeable weight is the weight a carrier uses to price your shipment. It is normally the greater of the actual weight on the scale and the volumetric weight. A light but bulky parcel is charged on its volumetric weight, while a small, dense parcel is charged on its actual weight.",
    },
    {
      q: "How can I reduce the volumetric weight of my parcels?",
      a: "Use cartons sized to the product, switch soft items to mailer bags where they do not need a box, flat-pack anything the customer can assemble, and cut back on void fill. Measure packed parcels accurately so your declared dimensions match what the carrier records, and test new packaging before rolling it out.",
    },
    {
      q: "Does volumetric weight affect warehouse storage costs?",
      a: "Not directly, but the same principle applies. Warehouse storage is commonly billed by the space goods occupy rather than their weight. MuggleShip bills box, pallet, shelf or container storage by space and duration, so compact packaging can help on storage as well as shipping. Quotes are itemised and tailored to each account.",
    },
  ],
  relatedServices: ["ecommerce-fulfillment-uk", "cross-border-shipping", "fba-prep-uk"],
  relatedGuides: ["how-to-choose-a-3pl-uk", "fba-prep-checklist"],
};

export default guide;
