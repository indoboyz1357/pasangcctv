"use client";

import { useState } from "react";

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

    return `https://wa.me/6281919037533?text=${encodeURIComponent(lines)}`;
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
          <option value="5–8 kamera">5–8 kamera</option>
          <option value="9–16 kamera">9–16 kamera</option>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.856L.057 23.492a.75.75 0 0 0 .93.93l5.7-1.493A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.964-1.356l-.356-.212-3.685.966.983-3.596-.232-.371A9.75 9.75 0 1 1 12 21.75z" />
        </svg>
        Kirim via WhatsApp
      </button>
    </form>
  );
}
