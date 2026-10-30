"use client";

import { useState } from "react";
import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

interface FormData {
  name: string;
  placeType: string;
  cameraCount: string;
  area: string;
}

export function QuoteForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    placeType: "",
    cameraCount: "",
    area: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function buildWhatsAppUrl() {
    const lines = [
      "Halo, saya ingin minta penawaran pasang CCTV.",
      form.name ? `Nama: ${form.name}` : "",
      form.placeType ? `Jenis tempat: ${form.placeType}` : "",
      form.cameraCount ? `Perkiraan jumlah kamera: ${form.cameraCount}` : "",
      form.area ? `Area: ${form.area}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // Form ini hanya ada di beranda.
    return whatsappLink(lines, "Beranda");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full bg-bg border border-border rounded-lg px-4 py-3 text-white placeholder-text-secondary text-sm " +
    "focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="quote-name"
          className="block text-sm font-semibold text-text-secondary mb-1.5"
        >
          Nama
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          placeholder="Nama Anda"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label
          htmlFor="quote-place-type"
          className="block text-sm font-semibold text-text-secondary mb-1.5"
        >
          Jenis tempat
        </label>
        <select
          id="quote-place-type"
          name="placeType"
          value={form.placeType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Pilih jenis tempat</option>
          <option value="Rumah tinggal">Rumah tinggal</option>
          <option value="Ruko">Ruko</option>
          <option value="Kantor">Kantor</option>
          <option value="Gudang">Gudang</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="quote-camera-count"
          className="block text-sm font-semibold text-text-secondary mb-1.5"
        >
          Perkiraan jumlah kamera
        </label>
        <select
          id="quote-camera-count"
          name="cameraCount"
          value={form.cameraCount}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Pilih jumlah kamera</option>
          <option value="2 kamera">2 kamera</option>
          <option value="3 kamera">3 kamera</option>
          <option value="4 kamera">4 kamera</option>
          <option value="5 sampai 8 kamera">5 sampai 8 kamera</option>
          <option value="9 sampai 16 kamera">9 sampai 16 kamera</option>
          <option value="Belum tahu">Belum tahu</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="quote-area"
          className="block text-sm font-semibold text-text-secondary mb-1.5"
        >
          Area (kota/kecamatan)
        </label>
        <input
          id="quote-area"
          name="area"
          type="text"
          placeholder="Contoh: Ciledug, Tangerang"
          value={form.area}
          onChange={handleChange}
          className={inputClass}
          autoComplete="address-level2"
        />
      </div>

      <button
        type="submit"
        id="quote-submit-btn"
        className="btn-primary w-full justify-center mt-2"
      >
        <WhatsAppIcon className="w-4 h-4" />
        Kirim via WhatsApp
      </button>
    </form>
  );
}
