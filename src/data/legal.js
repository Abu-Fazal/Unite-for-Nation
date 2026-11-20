import img1 from "../assets/advocate/Mohd Arafat Khan.png";
import img2 from "../assets/advocate/Sanjiv Chikara.png";
import img3 from "../assets/advocate/Nadeem Akhtar.png";
import img4 from "../assets/advocate/Rashid Hasan Chaudhary.jpeg";
import img5 from "../assets/advocate/abdul hafeez.jpeg";

export const legalCounsel = [
  {
    id: 'advocate-001',
    name: 'Adv. Mohd Arafat Khan',
    designation: 'Legal Counsel',
    location: 'Lucknow UP',
    court: "District & High Court",
    image: img1,
    alt: 'Advocate Mohd Arafat Khan - Legal Counsel'
  },
  {
    id: 'advocate-002',
    name: 'Adv. Sanjiv Chikara',
    designation: 'Legal Counsel',
    location: 'Ghaziabad UP',
    court: "Modinagar Court",
    image: img2,
    alt: 'Advocate Sanjiv Chikara - Legal Counsel'
  },
  {
    id: 'advocate-003',
    name: 'Adv. Nadeem Akhtar',
    designation: 'Legal Counsel',
    location: 'Ghaziabad UP',
    court: "District Court",
    image: img3,
    alt: 'Advocate Nadeem Akhtar - Legal Counsel'
  },
  {
    id: 'advocate-004',
    name: 'Adv. Rashid Hasan Chaudhary',
    designation: 'Legal Counsel',
    location: 'Delhi',
    court: "Saket & Highcourt ",
    image: img4,
    alt: 'Advocate Rashid Hasan Chaudhary - Legal Counsel'
  },
  {
    id: 'advocate-005',

    name: 'Adv. abdul hafeez',
    designation: 'Legal Counsel',
    location: 'Lucknow UP',
    court: "District Court",
    image: img5,
    alt: 'Advocate abdul hafeez - Legal Counsel'
  },
];

export const hasAdvocates = () => legalCounsel.length > 0;

export const getAdvocateCount = () => legalCounsel.length;

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

export const addAdvocate = (advocate) => {
  if (isValidAdvocate(advocate) && !legalCounsel.some((a) => a.id === advocate.id)) {
    legalCounsel.push(advocate);
    return true;
  }
  return false;
};