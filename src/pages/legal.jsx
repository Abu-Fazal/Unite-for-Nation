/**
 * LegalCounsel - The Legal Counsel page displaying advocates associated with Unite for Nation.
 *
 * This page uses the central advocate registry from Task 2 (src/data/legal-counsel/index.js)
 * and the reusable AdvocateCard/AdvocateGrid components from Task 3.
 *
 * Layout:
 * - MainLayout with currentPath="/legal" for SEO metadata updates
 * - Section heading and introductory paragraph
 * - AdvocateGrid rendering cards from the central registry
 * - Empty state when no advocates are registered
 *
 * Accessibility:
 * - Semantic heading hierarchy (h1 for page title)
 * - All images receive alt text from advocate data records
 * - Reduced-motion respected via AdvocateCard's prefers-reduced-motion handling
 *
 * Performance:
 * - No unnecessary state or effects
 * - AdvocateGrid preserves registry order (no sorting/shuffling)
 * - Images use loading="lazy" and decoding="async" from Task 3
 */

import MainLayout from '../components/layout/MainLayout';
import { legalCounsel } from '../data/legal';
import AdvocateGrid from '../components/sections/legal/AdvocateGrid';

export function LegalCounsel() {
  return (
    <MainLayout currentPath="/legal">
      <section className="py-12 sm:py-16 bg-[#faf8f5]">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-body font-extrabold tracking-tight text-slate-900">
              Legal Counsel
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-body">
              This section presents the advocates associated with Unite for Nation. They
              support our mission to defend individuals facing false accusations and
              wrongful criminal cases across India.
            </p>
          </div>

          {/* Advocate grid - works with populated or empty registry */}
          <AdvocateGrid advocates={legalCounsel} />
        </Container>
      </section>
    </MainLayout>
  );
}

export default LegalCounsel;