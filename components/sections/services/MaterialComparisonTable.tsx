"use client";

import SectionLabel from "@/components/ui/SectionLabel";

interface MaterialComparisonTableProps {
  label: string;
  title: string;
  titleAccent: string;
  headers: string[];
  rows: string[][];
  note?: string;
  id?: string;
}

export default function MaterialComparisonTable({
  label,
  title,
  titleAccent,
  headers,
  rows,
  note,
  id,
}: MaterialComparisonTableProps) {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
        </div>

        <div className="overflow-x-auto border border-border-subtle rounded-[4px]">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.15em] border-r border-white/10 last:border-r-0"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-bg-off/60"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${row[0]}-${cellIndex}`}
                      className={`px-5 py-4 text-sm leading-relaxed border-r border-border-subtle/60 last:border-r-0 ${
                        cellIndex === 0
                          ? "font-bold text-primary whitespace-nowrap"
                          : "text-secondary"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {note && (
          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-8 max-w-3xl border-l-2 border-stone pl-5">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
