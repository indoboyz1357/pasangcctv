// Konstanta brand dan kontak — semua dari references/stats.md
// Jangan mengubah nilai ini tanpa memperbarui stats.md terlebih dahulu.

export const SITE = {
  name: "PasangCCTV",
  domain: "pasangcctv.my.id",
  url: "https://pasangcctv.my.id",
  defaultTitle: "PasangCCTV",
  locale: "id_ID",
  lang: "id",
} as const;

export const CONTACT = {
  whatsapp: "+6281919037533",
  whatsappUrl: "https://wa.me/6281919037533",
  phone: "0819-1903-7533",
  phoneE164: "+6281919037533",
} as const;

export const LOCATION = {
  name: "PasangCCTV Tangerang",
  street: "Mulya IV RT 001/RW018 No. 43A",
  area: "Paninggilan, Kec. Ciledug",
  city: "Kota Tangerang",
  postalCode: "15153",
  province: "Banten",
  country: "ID",
  fullAddress:
    "Mulya IV RT 001/RW018 No. 43A, Paninggilan, Kec. Ciledug, Kota Tangerang, Banten 15153",
  openingHours: "Buka 24 jam",
  coordinates: {
    lat: -6.247047,
    lng: 106.712742,
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mulya+IV+RT+001%2FRW018+No.+43A+Paninggilan+Ciledug+Kota+Tangerang+Banten+15153",
} as const;

export const SERVICE_AREA = "Jabodetabek";

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
