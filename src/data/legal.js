/**
 * Central registry for legal advocates.
 *
 * This file consolidates advocate data for the Legal Counsel page.
 * Contains placeholder records for schema definition only and an empty
 * registry that is populated with verified advocate information.
 *
 * The registry works correctly even when empty (exports empty array).
 * Placeholder records are schema examples only and are never included in
 * the actual legalCounsel registry. They must not be presented as real
 * advocates or displayed in advocate cards.
 *
 * Advocate data schema:
 * - id: Unique, stable string ID.
 * - name: Advocate's verified display name (empty until verified).
 * - designation: Verified professional designation (empty until verified).
 * - location: Verified city, state or region (empty until verified).
 * - image: Valid image path (empty until image is available).
 * - alt: Meaningful image alternative text (empty until provided).
 *
 * To add a verified advocate:
 * 1. Create a record object following the data schema above.
 * 2. Ensure all required fields (id, name, designation, location, image, alt)
 *    have verified, non-empty values.
 * 3. Add the record to the legalCounsel array in this file.
 * 4. Do NOT add placeholder records to the registry - they are examples only.
 *
 * Placeholder records (advocate-placeholder-001 and advocate-placeholder-002)
 * are defined below as schema examples only. They have empty name, designation,
 * location, image, and alt fields. They are NOT real advocates and must not
 * be treated as such. They are included to demonstrate the expected data shape
 * and must never be added to the legalCounsel array or displayed as actual
 * advocate cards.
 */
/** Placeholder record - schema example only.
 * This is NOT a real advocate. Do not add to legalCounsel array or display.
 * Use this as a reference for the expected data shape.
 */
export const advocatePlaceholder001 = {
  id: 'advocate-placeholder-001',
  name: '',
  designation: '',
  location: '',
  image: '',
  alt: ''
};
/** Placeholder record - schema example only.
 * This is NOT a real advocate. Do not add to legalCounsel array or display.
 * Use this as a reference for the expected data shape.
 */
export const advocatePlaceholder002 = {
  id: 'advocate-placeholder-002',
  name: '',
  designation: '',
  location: '',
  image: '',
  alt: ''
};
/** Central registry for legal advocates.
 * Contains only verified advocate records.
 * Starts empty and is populated when verified advocate information is available.
 * The registry works correctly even when empty (exports empty array).
 * Placeholder records (advocatePlaceholder001, advocatePlaceholder002) are
 * schema examples only and are automatically excluded from this registry
 * by the isValidAdvocate() validation function.
 */
export const legalCounsel = [];
/** Checks if the registry has any registered (verified) advocates.
 * @returns {boolean} true if the registry contains verified advocates, false otherwise.
 */
export const hasAdvocates = () => legalCounsel.length > 0;
/** Gets the count of registered (verified) advocates.
 * @returns {number} Number of verified advocates in the registry.
 */
export const getAdvocateCount = () => legalCounsel.length;
/** Validates whether a given advocate record has all required fields with
 * non-empty values. Used to ensure only verified records enter the registry.
 * Validation must not mutate the original data.
 * @param {object} advocate - The advocate record to validate
 * @param {string} advocate.id - Unique, stable string ID
 * @param {string} advocate.name - Advocate's verified display name
 * @param {string} advocate.designation - Verified professional designation
 * @param {string} advocate.location - Verified city, state or region
 * @param {string} advocate.image - Valid image path
 * @param {string} advocate.alt - Meaningful image alternative text
 * @returns {boolean} true if the advocate is valid (all required fields non-empty),
 * false otherwise.
 */
export const isValidAdvocate = (advocate) => {
  if (!advocate || typeof advocate !== 'object') {
    return false;
  }
  const { id, name, designation, location, image, alt } = advocate;
  return (
    typeof id === 'string' && id.trim().startsWith('advocate-') &&
    typeof name === 'string' && name.trim().length > 0 &&
    typeof designation === 'string' && designation.trim().length > 0 &&
    typeof location === 'string' && location.trim().length > 0 &&
    typeof image === 'string' && image.trim().length > 0 &&
    typeof alt === 'string' && alt.trim().length > 0
  );
};
/** Adds a verified advocate to the central registry.
 * Only records passing isValidAdvocate() are added.
 * Placeholder records are automatically rejected by validation.
 * @param {object} advocate - The advocate record to add
 * @returns {boolean} true if the advocate was successfully added, false otherwise.
 */
export const addAdvocate = (advocate) => {
  if (isValidAdvocate(advocate) && !legalCounsel.some((a) => a.id === advocate.id)) {
    legalCounsel.push(advocate);
    return true;
  }
  return false;
};