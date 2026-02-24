"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    societe: "",
    email: "",
    secteur: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ prenom: "", nom: "", societe: "", email: "", secteur: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">
        Demande d'un rendez-vous.
      </h3>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
          <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center text-2xl">
            ✅
          </div>
          <p className="font-semibold text-[#1A1A2E]">Demande envoyée avec succès !</p>
          <p className="text-sm text-gray-400">Nous vous répondrons sous 24h ouvrées.</p>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm text-[#1E3A5F] underline underline-offset-2 hover:text-[#162C48] transition-colors"
          >
            Envoyer une nouvelle demande
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Prénom <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="prenom"
                value={form.prenom}
                onChange={handleChange}
                required
                placeholder="Jean"
                className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Nom <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                placeholder="Dupont"
                className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Société
            </label>
            <input
              type="text"
              name="societe"
              value={form.societe}
              onChange={handleChange}
              placeholder="Nom de votre entreprise"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Email professionnel <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="jean.dupont@societe.fr"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Votre secteur
            </label>
            <select
              name="secteur"
              value={form.secteur}
              onChange={handleChange}
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] bg-white focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors"
            >
              <option value="">Sélectionnez votre secteur…</option>
              <option>Concessionnaire automobile</option>
              <option>Garage / Agent indépendant</option>
              <option>Import / Export automobile</option>
              <option>Société de services automobiles</option>
              <option>Éditeur de logiciels / Plateforme</option>
              <option>Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Décrivez votre besoin ou votre projet…"
              className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-500 text-center bg-red-50 border border-red-200 rounded-lg py-2.5 px-4">
              Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#1E3A5F] text-white font-semibold py-3 rounded-xl hover:bg-[#162C48] transition-colors shadow-md shadow-[#1E3A5F]/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Vos données sont traitées conformément au RGPD et ne seront jamais
            revendues à des tiers.
          </p>
        </form>
      )}
    </div>
  );
}
