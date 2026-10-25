import { useRef, useState } from "react";
import { Check, ArrowRight, Upload } from "lucide-react";
import Container from "../Container";

const benefits = [
  {
    title: "Lingkungan kerja kolaboratif",
    description: "Tim solid & terbuka terhadap ide baru",
  },
  {
    title: "Pengembangan karier jelas",
    description: "Pelatihan & sertifikasi berkelanjutan",
  },
  {
    title: "Proyek nasional bergengsi",
    description: "Terlibat langsung dalam proyek strategis",
  },
];

export default function FormCareer() {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    email: "",
    message: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    setError("");

    if (!file) {
      setCvFile(null);
      return;
    }

    if (file.type !== "application/pdf") {
      setError("File harus berformat PDF.");
      event.target.value = "";
      setCvFile(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Ukuran file maksimal 5 MB.");
      event.target.value = "";
      setCvFile(null);
      return;
    }

    setCvFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!cvFile) {
      setError("Silakan unggah CV atau portofolio dalam format PDF.");
      return;
    }

    // Belum terhubung ke backend.
    console.log("Data lamaran:", {
      ...formData,
      cvFile,
    });

    alert("Validasi berhasil! Form belum terhubung ke backend.");
  };

  const inputClass =
    "mt-2 w-full rounded-sm border border-neutral bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-neutral focus:border-secondary focus:ring-1 focus:ring-secondary";

  return (
    <Container>
      <div className=" grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div className="rounded-xl border border-[#D8E2CD] bg-white p-6 sm:p-8">
          <div className="mb-5">
            <h2 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
              Kirim Lamaran / CV
            </h2>

            <p className="mt-1 text-sm text-neutral">
              Bergabunglah dengan tim Matoa Envicon
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-black"
                >
                  Nama lengkap
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-semibold text-black"
                >
                  Posisi dilamar
                </label>

                <input
                  id="position"
                  name="position"
                  type="text"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="cth. Staff AMDAL"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nama@email.com"
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="cv"
                className="block text-sm font-semibold text-black"
              >
                Upload CV / Portofolio
              </label>

              <input
                ref={fileInputRef}
                id="cv"
                name="cv"
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                required
                className="sr-only"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-2 flex min-h-[51px] w-full items-center gap-3 rounded-sm border border-neutral bg-white px-4 py-3 text-left transition hover:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
              >
                <Upload size={17} className="shrink-0 text-neutral" />

                <span className="truncate text-sm text-neutral">
                  {cvFile ? cvFile.name : "Pilih file (PDF, max 5MB)"}
                </span>
              </button>

              <p className="mt-1.5 text-xs text-[#858C7D]">
                Format PDF, ukuran maksimal 5 MB.
              </p>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-black"
              >
                Pesan singkat
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ceritakan mengapa Anda cocok bergabung..."
                rows={3}
                required
                className={`${inputClass} resize-y`}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-4 text-sm font-semibold text-black transition-colors hover:bg-[#DF7E25] focus:outline-none focus:ring-2 focus:ring-[#ED8F35] focus:ring-offset-2"
            >
              Kirim Lamaran
              <ArrowRight size={17} />
            </button>
          </form>
        </div>

        <div className="pt-1 lg:pt-0">
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral">
            Karier
          </span>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Berkarier di Matoa
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-black sm:text-base">
            Kami mencari individu yang peduli lingkungan & ingin bertumbuh
            bersama tim konsultan profesional.
          </p>

          <div className="mt-8 space-y-7">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check size={18} strokeWidth={2.5} className="text-dark" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-black sm:text-base">
                    {benefit.title}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-neutral sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
