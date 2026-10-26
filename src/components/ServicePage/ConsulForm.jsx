import { useState } from "react";
import { Check, Phone, MoveRight, Mail } from "lucide-react";

const benefits = [
  "Konsultasi awal tanpa biaya",
  "Respon cepat tim ahli lingkungan",
  "Estimasi proses & biaya transparan",
];

export default function ConsulForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    needs: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form belum terhubung ke backend.
    console.log("Data konsultasi:", formData);

    setMessage(
      "Form berhasil divalidasi. Silakan hubungkan ke backend untuk mengirim data.",
    );
  };

  const inputClass =
    "w-full rounded-sm border border-near bg-white px-3 py-2.5 text-xs text-dark outline-none transition placeholder:text-neutral focus:border-secondary focus focus:ring-secondary";

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
      <div className="pt-1">
        <span className="text-xxs font-medium uppercase tracking-wide text-neutral">
          Hubungi Kami
        </span>

        <h2 className="mt-3 max-w-md text-3xl font-semibold leading-[1.15] tracking-tight text-dark sm:text-4xl">
          Mulai Konsultasi
          <br />
          Anda Hari Ini
        </h2>

        <p className="mt-3 max-w-md text-xs leading-relaxed text-dark sm:text-sm">
          Isi formulir di samping dan tim kami akan menghubungi Anda dalam 1x24
          jam kerja.
        </p>

        <div className="mt-5 space-y-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-near">
                <Check size={11} strokeWidth={2.5} className="text-secnear" />
              </span>

              <p className="text-[11px] text-dark sm:text-xs">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3 text-neutral">
          <a
            href="tel:+6281234567890"
            className="flex items-center gap-2.5 text-xxs transition hover:text-dark"
          >
            <Phone size={15} fill="currentColor" />
            <span>+62 812-3456-7890</span>
          </a>

          <a
            href="mailto:info@matoaenvicon.co.id"
            className="flex items-center gap-2.5 text-xxs transition hover:text-dark"
          >
            <Mail size={15} />
            <span>info@matoaenvicon.co.id</span>
          </a>
        </div>
      </div>

      <div className="w-full rounded-md border border-near bg-white p-5 sm:p-7">
        <div className="mb-3">
          <h3 className="text-base font-semibold text-dark">Form Konsultasi</h3>

          <p className="mt-1 text-xxs text-[#858C7D]">
            Lengkapi data di bawah ini
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div>
            <label
              htmlFor="consultation-name"
              className="mb-1 block text-xxs font-semibold text-dark"
            >
              Nama lengkap
            </label>

            <input
              id="consultation-name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="consultation-email"
              className="mb-1 block text-xxs font-semibold text-dark"
            >
              Email perusahaan
            </label>

            <input
              id="consultation-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@perusahaan.co.id"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="consultation-phone"
              className="mb-1 block text-xxs font-semibold text-dark"
            >
              Nomor telepon
            </label>

            <input
              id="consultation-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="08xx xxxx xxxx"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="consultation-needs"
              className="mb-1 block text-xxs font-semibold text-dark"
            >
              Kebutuhan Anda
            </label>

            <textarea
              id="consultation-needs"
              name="needs"
              rows={4}
              value={formData.needs}
              onChange={handleChange}
              placeholder="Ceritakan kebutuhan perizinan lingkungan Anda..."
              required
              className={`${inputClass} min-h-[90px] resize-y`}
            />
          </div>

          {message && (
            <p
              role="status"
              className="rounded bg-[#F0F5E7] p-2 text-xs leading-relaxed text-[#486523]"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-1.5 bg-primary px-4 py-3 text-[11px] font-semibold text-dark transition hover:bg-[#DF7E25] focus:outline-none focus:ring-2 focus:ring-[#ED8F35] focus:ring-offset-2"
          >
            Kirim Konsultasi
            <MoveRight size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
