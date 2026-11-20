import img1 from "../assets/advocate/abdul hafeez.jpeg";
import img2 from "../assets/advocate/Mohd Arafat Khan.png";
import img3 from "../assets/advocate/Nadeem Akhtar.png";
import img4 from "../assets/advocate/Rashid Hasan Chaudhary.jpeg";
import img5 from "../assets/advocate/Sanjiv Chikara.png";

export const legalCounsel = [
  {
    id: 'advocate-001',
    name: 'abdul hafeez',
    designation: 'Advocate',
    location: 'Lucknow UP',
    court: "District Court",
    image: img1,
    alt: 'Advocate Aisha Sharma - Legal Counsel'
  },
  {
    id: 'advocate-002',
    name: 'Mohd Arafat Khan',
    designation: 'Advocate',
    location: 'Lucknow UP',
    court: "District & High Court",
    image: img2,
    alt: 'Advocate Rohan Kumar - Legal Counsel'
  },
  {
    id: 'advocate-003',
    name: 'Nadeem Akhtar',
    designation: 'Advocate',
    location: 'Ghaziabad UP',
    court: "District Court",
    image: img3,
    alt: 'Advocate Priya Singh - Legal Counsel'
  },
  {
    id: 'advocate-004',
    name: 'Rashid Hasan Chaudhary',
    designation: 'Advocate',
    location: 'Delhi',
    court: "Saket & Highcourt ",
    image: img4,
    alt: 'Advocate Vikram Patel - Legal Counsel'
  },
  {
    id: 'advocate-005',
    name: 'Sanjiv Chikara',
    designation: 'Advocate',
    location: 'Ghaziabad UP',
    court: "Modinagar Court",
    image: img5,
    alt: 'Advocate Nisha Sharma - Legal Counsel'
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