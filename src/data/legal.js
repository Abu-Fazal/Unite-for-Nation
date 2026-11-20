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
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Advocate Aisha Sharma - Legal Counsel'
  },
  {
    id: 'advocate-002',
    name: 'Mohd Arafat Khan',
    designation: 'Advocate',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1711993429168-d92ca29f2f61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Advocate Rohan Kumar - Legal Counsel'
  },
  {
    id: 'advocate-003',
    name: 'Nadeem Akhtar',
    designation: 'Advocate',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Advocate Priya Singh - Legal Counsel'
  },
  {
    id: 'advocate-004',
    name: 'Rashid Hasan Chaudhary',
    designation: 'Advocate',
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Advocate Vikram Patel - Legal Counsel'
  },
  {
    id: 'advocate-005',
    name: 'Sanjiv Chikara',
    designation: 'Advocate',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
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