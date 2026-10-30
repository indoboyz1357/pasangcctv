interface JsonLdProps {
  data: unknown;
}

// Menulis JSON-LD ke HTML hasil build. Karakter "<" di-escape agar teks
// di dalam data tidak bisa menutup tag script lebih awal.
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
