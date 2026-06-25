import { useEffect, useState, useCallback } from "react";
import "../css/ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (!project || project.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [project]);

  // Reset slide on open
  useEffect(() => {
    setCurrent(0);
  }, [project]);

  // ESC to close
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Image slider */}
        <div className="modal-slider">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className={`modal-slide ${i === current ? "active" : ""}`}
            />
          ))}
          {/* Dot indicators */}
          {project.images.length > 1 && (
            <div className="modal-dots">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="modal-body">
          <div className="modal-header">
            <div>
              <p className="modal-eyebrow">Project</p>
              <h2 className="modal-title">{project.title}</h2>
            </div>
            <button className="modal-close" onClick={onClose}>
              ✕
            </button>
          </div>

          <p className="modal-description whitespace-pre-line">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag text-xs px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="modal-footer">
            <span className="modal-year">{project.year}</span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn"
              >
                View Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
