import React, { useEffect, useState } from "react";
import { Trophy, Award, ExternalLink, X } from "lucide-react";

// Certification shape:
// {
//   image?: string, // path to a thumbnail image under /public
//   title: string,
//   year: string,
//   description?: string,
//   proof?: { type: 'image' | 'link', url: string, sourceUrl?: string }
// }
const certifications = [
  {
    id: 1,
    image: "/certificates/aws-academy-graduate-cloud-architecting-training-ba.png",
    title: "AWS Academy Cloud Architecting ",
    description: "Aws Academy",
    year: "2025",
    proof: { type: "link", url: "https://www.credly.com/badges/ab72e31b-ab15-4c1d-8e9f-21e7da3400a6/public_url" },
  },
  {
    id: 2,
    image: "/certificates/aws-academy-graduate-cloud-foundations-training-bad.png",
    title: "AWS Academy Cloud Foundations",
    description: "Aws Academy",
    year: "2025",
    proof: { type: "link", url: "https://www.credly.com/badges/05528077-0286-4585-b0a4-0bce35561bb9" },
  },
  {
    id: 3,
    image: "/certificates/resumecert.png",
    title: "Certificate of participation",
    description: "Cebu Institute Of Tehcnology - University",
    year: "2025",
  },
  {
    id: 4,
    image: "/certificates/sololearn certificate.png",
    title: "Sololearn Certificate",
    description: "Sololearn",
    year: "2024",
  },
  {
    id: 5,
    image: "/certificates/ccert.png",
    title: "Basic Programming Certification",
    description: "Codechum",
    year: "2023",
  },
];

export const MyCertification = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProof, setActiveProof] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openProof = (proof) => {
    if (!proof) return;
    if (proof.type === "link") {
      window.open(proof.url, "_blank", "noopener,noreferrer");
    } else if (proof.type === "image") {
      setActiveProof(proof);
      setModalOpen(true);
    }
  };

  // Preview any image by URL (thumbnail or proof image)
  const previewImage = (url, sourceUrl, title, year) => {
    if (!url) return;
    setActiveProof({ type: "image", url, sourceUrl, title, year });
    setModalOpen(true);
  }; 

  return (
    <section id="certifications" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Highlights from my recent certifications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((c) => (
            <div key={c.id} className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-transparent hover:border-primary/20 transition">
              <div className="flex justify-center pt-6">
                {/* Determine thumbnail source: explicit `image` first, then proof image */}
                {(() => {
                  const thumb = c.image || (c.proof && c.proof.type === "image" && c.proof.url);
                  return thumb ? (
                    <button
                      onClick={() => previewImage(thumb, c.proof && c.proof.sourceUrl, c.title, c.year)}
                      className="w-24 h-24 rounded-xl overflow-hidden bg-white p-2 shadow-md hover:scale-105 transition-transform focus:outline-none"
                      aria-label={`Preview ${c.title} certificate`}
                    >
                      <img
                        src={thumb}
                        alt={`${c.title} certificate`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center rounded-xl bg-primary/10">
                      {c.id === 2 ? (
                        <Award className="h-10 w-10 text-primary" />
                      ) : (
                        <Trophy className="h-10 w-10 text-primary" />
                      )}
                    </div>
                  );
                })()}
              </div>

              <div className="p-6 text-center mt-3">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{c.title}</h3>
                <div className="text-xs text-primary font-medium mb-2">Issued {c.year}</div>
                <p className="text-muted-foreground text-sm mb-6">{c.description}</p>

                <div>
                  {c.proof ? (
                    c.proof.type === "link" ? (
                      <a
                        href={c.proof.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
                      >
                        View Proof <ExternalLink size={16} />
                      </a>
                    ) : (
                      <div className="text-xs text-muted-foreground">Click image to preview</div>
                    )
                  ) : (
                    <div className="text-xs text-muted-foreground"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image modal (image-only preview) */}
        {modalOpen && activeProof && activeProof.type === "image" && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-3 -right-3 p-2 rounded-full bg-muted/10"
                onClick={() => setModalOpen(false)}
                aria-label="Close preview"
              >
                <X size={20} />
              </button>

              <img
                src={activeProof.url}
                alt="Certificate preview"
                className="w-full h-auto max-h-[90vh] object-contain rounded-md shadow-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};