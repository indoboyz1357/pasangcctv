import type { ReactNode } from "react";
import type { Series } from "@/content/packages";

interface PackageSeriesCardProps {
  series: Series;
  description?: ReactNode;
  note?: ReactNode;
  className?: string;
}

// Satu kartu per seri kamera. Dipakai oleh semua seri (Loewix, HiLook, Hikvision)
// agar tampilannya sama. Kolom spesifikasi hanya muncul jika datanya ada (Loewix).
export function PackageSeriesCard({
  series,
  description,
  note,
  className = "",
}: PackageSeriesCardProps) {
  return (
    <div className={`card h-full ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 className="font-bold text-white text-lg">{series.title}</h3>
        <span className="text-xs text-text-secondary bg-bg border border-border rounded-full px-3 py-1">
          Garansi {series.warranty}
        </span>
      </div>

      {description && (
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>
      )}

      <div className="overflow-x-auto -mx-2">
        <table
          className={`w-full text-sm ${
            series.hasSpecs ? "min-w-[520px]" : "min-w-[280px]"
          }`}
        >
          <caption className="sr-only">
            Harga {series.title} menurut jumlah kamera
          </caption>
          <thead>
            <tr className="border-b border-border">
              <th scope="col" className="px-2 py-2 text-left text-text-secondary font-medium">
                Kamera
              </th>
              <th scope="col" className="px-2 py-2 text-left text-accent font-semibold">
                Harga
              </th>
              {series.hasSpecs && (
                <>
                  <th scope="col" className="px-2 py-2 text-left text-text-secondary font-medium">
                    DVR
                  </th>
                  <th scope="col" className="px-2 py-2 text-left text-text-secondary font-medium">
                    Hard disk
                  </th>
                  <th scope="col" className="px-2 py-2 text-left text-text-secondary font-medium">
                    Kabel
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {series.packages.map((p) => (
              <tr
                key={p.cameras}
                id={`${series.id}-${p.cameras}-kamera`}
                className="border-b border-border/50 last:border-0 hover:bg-accent/5 transition-colors"
              >
                <td className="px-2 py-3 text-text-secondary whitespace-nowrap">
                  {p.cameras} kamera
                </td>
                <td className="px-2 py-3 font-bold text-white whitespace-nowrap">
                  {p.priceFormatted}
                </td>
                {series.hasSpecs && (
                  <>
                    <td className="px-2 py-3 text-text-secondary whitespace-nowrap">{p.dvr}</td>
                    <td className="px-2 py-3 text-text-secondary whitespace-nowrap">{p.hdd}</td>
                    <td className="px-2 py-3 text-text-secondary whitespace-nowrap">{p.cable}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note && (
        <div className="mt-4 text-xs text-text-secondary leading-relaxed">
          {note}
        </div>
      )}
    </div>
  );
}
