// Indicative rates for the homepage cost estimator. Real prices come from
// the itemised quote; change the numbers here, nothing else needs editing.

/** Volumetric units ("desi"): L × W × H in cm divided by this. */
export const VOLUME_DIVISOR = 3000;

/** Monthly storage in GBP, tiered by total volumetric units. */
export const STORAGE_TIERS = {
  /** Flat monthly charge covering the first `baseUnits`. */
  base: 0.75,
  baseUnits: 10,
  /** Rate per unit per month for units above `baseUnits` up to `midUnits`. */
  midRate: 0.04,
  midUnits: 100,
  /** Rate per unit per month for units above `midUnits`. */
  highRate: 0.02,
};

/** Domestic (UK) shipping, per order, "from" price. */
export const DOMESTIC_SHIPPING_FROM = 6;

export const CURRENCY = "GBP";

export function volumetricUnits(lengthCm: number, widthCm: number, heightCm: number) {
  return (lengthCm * widthCm * heightCm) / VOLUME_DIVISOR;
}

/** Monthly storage charge for a total number of volumetric units. */
export function storagePerMonth(units: number) {
  if (units <= 0) return 0;
  const t = STORAGE_TIERS;
  const mid = Math.max(0, Math.min(units, t.midUnits) - t.baseUnits);
  const high = Math.max(0, units - t.midUnits);
  return t.base + mid * t.midRate + high * t.highRate;
}
