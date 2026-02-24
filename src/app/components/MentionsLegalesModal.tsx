"use client";

import { useState } from "react";

export default function MentionsLegalesModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white/40 text-sm hover:text-white/70 transition-colors underline-offset-2 hover:underline cursor-pointer"
      >
        Mentions légales
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
              <h2 className="text-xl font-extrabold text-[#1A1A2E]">Mentions légales</h2>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors text-lg leading-none"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-8 py-6 flex flex-col gap-6 text-sm text-gray-600 leading-relaxed">

              <section>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">Éditeur du site</h3>
                <p>Le présent site est édité par la société :</p>
                <p className="mt-2">
                  <strong>Novae Mobility</strong><br />
                  Forme juridique : Société par Actions Simplifiée à Associé Unique (SASU)<br />
                  Capital social : 1 000,00 €<br />
                  Siège social : 15 avenue Alan Turing, 59410 Anzin – France<br />
                  Immatriculée au Registre du Commerce et des Sociétés de Valenciennes<br />
                  Sous le numéro <strong>990 224 271 R.C.S. Valenciennes</strong><br />
                  Numéro de TVA intracommunautaire : FR04990224271<br />
                  Email : <a href="mailto:nitrocerfa@gmail.com" className="text-[#2D6A9F] hover:underline">nitrocerfa@gmail.com</a>
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">Directeur de la publication</h3>
                <p>
                  Le directeur de la publication est :<br />
                  <strong>Monsieur Brahim Belghiti</strong>,<br />
                  Président de la société Novae Mobility.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">Hébergement du site</h3>
                <p>
                  Le site est hébergé par :<br />
                  <strong>OVH SAS</strong>, société immatriculée au RCS de Lille sous le numéro 537 407 926,
                  sise 2, rue Kellermann, 59100 Roubaix.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">Propriété intellectuelle</h3>
                <p>
                  L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes,
                  éléments visuels, logiciels, etc.) est la propriété exclusive de Novae Mobility, sauf mention contraire.
                </p>
                <p className="mt-2">
                  Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle,
                  sans autorisation écrite préalable de Novae Mobility est strictement interdite.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">Responsabilité</h3>
                <p>
                  Novae Mobility s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
                </p>
                <p className="mt-2">
                  Toutefois, la société ne saurait être tenue responsable des erreurs, omissions ou
                  indisponibilités temporaires du site.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">Données personnelles</h3>
                <p>
                  Les données personnelles collectées via le site sont traitées conformément à la réglementation
                  en vigueur, notamment au Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p className="mt-2">
                  Les utilisateurs disposent d'un droit d'accès, de rectification, d'effacement, de limitation et
                  d'opposition au traitement de leurs données.
                </p>
                <p className="mt-2">
                  Toute demande peut être adressée à :{" "}
                  <a href="mailto:nitrocerfa@gmail.com" className="text-[#2D6A9F] hover:underline">nitrocerfa@gmail.com</a>.
                </p>
              </section>

              <section>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">Cookies</h3>
                <p>
                  Le site peut utiliser des cookies afin d'améliorer l'expérience utilisateur et de réaliser des
                  statistiques de navigation.
                </p>
                <p className="mt-2">
                  L'utilisateur peut configurer son navigateur pour refuser tout ou partie des cookies.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="bg-[#1E3A5F] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#162C48] transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
