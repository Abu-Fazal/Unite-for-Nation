/**
 * AdvocateGrid - A reusable grid component for displaying multiple advocate cards.
 *
 * Renders one AdvocateCard per advocate record.
 * Accepts advocate records through props and preserves the supplied data order.
 *
 * @param {Object} props - The component props
 * @param {Array} props.advocates - Array of advocate records from the Task 2 registry
 */

import React from 'react';
import AdvocateCard from './AdvocateCard';

const AdvocateGrid = ({ advocates }) => {
  // If no advocates, render nothing (empty state handled by parent or placeholder)
  if (!advocates || advocates.length === 0) {
    return null;
  }

  // Render grid of AdvocateCard components
  // - Uses unique advocate.id as React key (as required)
  // - Preserves supplied data order (no sorting, no shuffling)
  // - Consistent spacing following existing project conventions
  // - Responsive grid: 1 column mobile, 2 tablet, 3 desktop
  // - Prevents horizontal overflow via container constraints
  return (
    <div className="grid gap-6">
      {advocates.map((advocate) => (
        <AdvocateCard
          key={advocate.id}
          id={advocate.id}
          name={advocate.name}
          designation={advocate.designation}
          location={advocate.location}
          image={advocate.image}
          alt={advocate.alt}
        />
      ))}
    </div>
  );
};

export default AdvocateGrid;

/**
 * AdvocateGrid usage with responsive grid breakpoints:
 * - Mobile: grid-cols-1 (default - starts at 1 column)
 * - Tablet: sm:grid-cols-2 (640px+)
 * - Desktop: lg:grid-cols-3 (1024px+)
 * - Wider desktops can add xl:grid-cols-4 if needed
 *
 * The grid container should be placed inside a parent with appropriate width,
 * following existing project patterns like: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 */