"use client";

import { usePathname } from "next/navigation";
import { PAGE_LABELS, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

interface WhatsAppButtonProps {
  // Isi pesan. Nama halaman asal ditambahkan otomatis di belakangnya.
  message: string;
  className?: string;
  id?: string;
  ariaLabel?: string;
  iconClassName?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message,
  className = "",
  id,
  ariaLabel,
  iconClassName = "w-5 h-5",
  children,
}: WhatsAppButtonProps) {
  const pathname = usePathname() ?? "/";
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const pageLabel = PAGE_LABELS[normalized];

  return (
    <a
      href={whatsappLink(message, pageLabel)}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      aria-label={ariaLabel}
      className={className}
    >
      <WhatsAppIcon className={iconClassName} />
      {children}
    </a>
  );
}
