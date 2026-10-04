"use client";

import { useEffect, useState } from "react";

const envolCmsShots = [
  { src: "/envol-cms/dashboard.png", alt: "Tableau de bord du CMS L’Envol des Enfants", caption: "Tableau de bord — produits, commandes, abonnés et alertes de stock" },
  { src: "/envol-cms/produits.png", alt: "Gestion du catalogue et analyse IA des produits", caption: "Catalogue, recherche par image et actions en lot" },
  { src: "/envol-cms/notifications.png", alt: "Contrôle qualité du catalogue assisté par IA", caption: "Contrôle du catalogue et corrections assistées par IA" },
  { src: "/envol-cms/editeur-site.png", alt: "Éditeur des sections de la boutique", caption: "Éditeur de boutique et visibilité des sections" },
  { src: "/envol-cms/conseiller-ia.png", alt: "Conseiller IA pour l’audit des prix", caption: "Conseiller IA et audit des prix" },
];

export function EnvolCmsGallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowLeft") setOpen(current => current === null ? null : (current + envolCmsShots.length - 1) % envolCmsShots.length);
      if (event.key === "ArrowRight") setOpen(current => current === null ? null : (current + 1) % envolCmsShots.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("cms-lightbox-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("cms-lightbox-open");
    };
  }, [open]);

  return <div className="envol-cms-showcase">
    <button className="envol-cms-preview envol-cms-main" type="button" onClick={() => setOpen(0)}>
      <img src={envolCmsShots[0].src} alt={envolCmsShots[0].alt} loading="lazy" decoding="async" />
      <span>{envolCmsShots[0].caption}</span>
    </button>
    <div className="envol-cms-grid">
      {envolCmsShots.slice(1).map((shot,index) => <button className="envol-cms-preview" type="button" key={shot.src} onClick={() => setOpen(index+1)}>
        <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
        <span>{shot.caption}</span>
      </button>)}
    </div>
    {open !== null && <div className="cms-lightbox" role="dialog" aria-modal="true" onMouseDown={event => { if(event.target===event.currentTarget) setOpen(null); }}>
      <button className="cms-lightbox-close" type="button" onClick={() => setOpen(null)} aria-label="Fermer">×</button>
      <button className="cms-lightbox-nav cms-lightbox-prev" type="button" onClick={() => setOpen((open+envolCmsShots.length-1)%envolCmsShots.length)} aria-label="Précédente">‹</button>
      <figure><img src={envolCmsShots[open].src} alt={envolCmsShots[open].alt}/><figcaption>{envolCmsShots[open].caption}</figcaption></figure>
      <button className="cms-lightbox-nav cms-lightbox-next" type="button" onClick={() => setOpen((open+1)%envolCmsShots.length)} aria-label="Suivante">›</button>
    </div>}
  </div>;
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 420);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <button
    type="button"
    className={`back-to-top${visible ? " is-visible" : ""}`}
    aria-label="Retour en haut"
    title="Retour en haut"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  ><span className="back-to-top-orb" aria-hidden="true"><img src="/aipcreation-favicon-v1.png" alt="" width="46" height="46" decoding="async" /></span></button>;
}
