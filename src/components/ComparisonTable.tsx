interface ComparisonRow {
  feature: string;
  values: string[];
  highlight?: number; // index of the winning column
}

interface ComparisonTableProps {
  products: string[];
  rows: ComparisonRow[];
  prices?: string[];
  affiliateUrls?: string[];
}

export function ComparisonTable({
  products,
  rows,
  prices,
  affiliateUrls,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
      <table className="w-full text-sm">
        {/* Header */}
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Feature
            </th>
            {products.map((product, i) => (
              <th
                key={i}
                className="px-6 py-4 text-center"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-sm font-bold text-[var(--text-primary)]">
                  {product}
                </span>
                {prices?.[i] && (
                  <div className="mt-1 text-xs font-semibold text-[var(--accent)]">
                    {prices[i]}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        {/* Rows */}
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="border-b border-[var(--border)] last:border-0 transition-colors hover:bg-[var(--bg-secondary)]"
            >
              <td className="px-6 py-3.5 text-sm font-medium text-[var(--text-secondary)]">
                {row.feature}
              </td>
              {row.values.map((val, colIdx) => (
                <td
                  key={colIdx}
                  className={`px-6 py-3.5 text-center text-sm ${
                    row.highlight === colIdx
                      ? "font-semibold text-[var(--accent)]"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        {/* CTA row */}
        {affiliateUrls && (
          <tfoot>
            <tr className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
              <td className="px-6 py-4" />
              {affiliateUrls.map((url, i) => (
                <td key={i} className="px-6 py-4 text-center">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center rounded-lg bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[var(--bg-primary)] transition-all hover:brightness-110"
                  >
                    Check Price →
                  </a>
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
