export const formatCurrency = (
  value: number,
  currency: string = "USD",
): string => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    // Fallback for invalid currency codes or Intl runtime issues.
    const safeValue = Number.isFinite(value) ? value : 0;
    return `$${safeValue.toFixed(2)}`;
  }
};
