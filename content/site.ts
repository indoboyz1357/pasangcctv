// Konstanta brand dan kontak — semua dari references/stats.md
// Jangan mengubah nilai ini tanpa memperbarui stats.md terlebih dahulu.

export const SITE = {
  name: "PasangCCTV",
  domain: "pasangcctv.id",
  url: "https://pasangcctv.id",
  defaultTitle: "PasangCCTV",
  locale: "id_ID",
  lang: "id",
} as const;

export const CONTACT = {
  whatsapp: "+6281919037533",
  whatsappUrl: "https://wa.me/6281919037533",
  phone: "0815-8606-9939",
} as const;

export const LOCATION = {
  name: "PasangCCTV Cilandak",
  street: "Jl. Bango IV No.49B, RT.10/RW.3",
  area: "Pd. Labu, Kec. Cilandak",
  city: "Jakarta Selatan",
  postalCode: "12450",
  province: "DKI Jakarta",
  country: "ID",
  fullAddress:
    "Jl. Bango IV No.49B, RT.10/RW.3, Pd. Labu, Kec. Cilandak, Jakarta Selatan 12450",
  openingHours: "Buka 24 jam",
  coordinates: {
    lat: -6.3044736,
    lng: 106.8078669,
  },
  googleMapsUrl:
    "https://www.google.com/maps/place/Jasa+Pasang+CCTV+-+CCTVGO+Cilandak/@-6.3044736,106.8078669,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69efd01ecd2e51:0x69ea2f25816e4ecd!8m2!3d-6.3044736!4d106.8078669!16s%2Fg%2F11nw70wl3z",
} as const;

export const SERVICE_AREA = "JABODETABEK";

export const BRANDS = ["Loewix", "HiLook", "Hikvision"] as const;

export const SEGMENTS = [
  "Rumah Tinggal",
  "Ruko",
  "Kantor",
  "Gudang",
] as const;

export const WARRANTY = {
  loewix: "1 tahun",
  hilook: "2 tahun",
  hikvision: "2 tahun",
} as const;
