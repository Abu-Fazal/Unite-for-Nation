/**
 * AdvocateCard - A reusable card component for displaying advocate information.
 *
 * Accepts advocate data through props and renders a professional,
 * minimal card following the existing Unite for Nation design system.
 *
 * @param {Object} props - The component props
 * @param {string} props.id - Unique advocate ID (used as React key by parent grid)
 * @param {string} props.name - Advocate's display name
 * @param {string} props.designation - Professional designation (e.g., "Advocate")
 * @param {string} props.location - City, state or region
 * @param {string} props.image - Image path (e.g., "/images/legal-counsel/advocate-001.webp")
 * @param {string} props.alt - Meaningful alternative text for the image
 *
 * @example
 * <AdvocateCard
 *   id="advocate-001"
 *   name="Advocate Name"
 *   designation="Advocate"
 *   location="Delhi"
 *   image="/images/legal-counsel/advocate-001.webp"
 *   alt="Portrait of Advocate Name"
 * />
 */

import React from 'react';

// Utility function for meaningful alt text fallback
const altFor = (suppliedAlt) =>
  suppliedAlt || 'Advocate portrait';

const AdvocateCard = ({
  name,
  designation,
  location,
  court,
  image,
  alt,
}) => {
  // Respect prefers-reduced-motion for hover effects
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  return (
    <div
      className="group bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-xs overflow-hidden"
      // Reduced motion: disable aggressive hover transforms
      style={{ transitionDuration: reducedMotion.matches ? '0s' : '0.2s' }}
    >
      <div className="relative aspect-square overflow-hidden mb-4">
        <img
          src={image}
          alt={alt || altFor(alt)}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-fill object-center transition-all duration-300 group-hover:opacity-90 hover:scale-120 hover:cursor-pointer"
          // Fallback if image fails to load
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loops
            e.target.alt = alt || altFor(alt) || "Advocate portrait";
            // Add fallback background image style
            e.target.style.cssText +=
              '; background-image: url(/images/legal-counsel/advocate-template-001.webp); background-size: cover; background-position: center;';
          }}
        />


      </div>

      <div>
        {/* Advocate name - most prominent */}
        <h3
          className="
            text-sm sm:text-base md:text-lg font-body font-extrabold
            tracking-tight text-slate-900 line-clamp-2
          "
        >
          {name || 'Advocate Name'}
        </h3>

        {/* Professional designation - secondary */}
        {designation && (
          <p
            className="
              text-xs sm:text-sm mt-1 text-slate-600 font-body font-medium
              line-clamp-1
            "
          >
            {designation}
          </p>
        )}

        {/* court details */}
        {court && (
          <p
            className="
              text-xs sm:text-sm mt-1 text-slate-600 font-body font-medium
              line-clamp-1
            "
          >
            {court}
          </p>
        )}
          <span className="text-xs sm:text-sm mt-1 font-body font-medium
              line-clamp-1 text-[#2A9D8F] shrink-0">
            {location}
          </span>
      </div>
    </div>
  );
};

export default AdvocateCard;