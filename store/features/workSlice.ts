import { Work } from "@/types/work";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
const initialState: Work[] = [
  {
    _id: "696e789d7f38df81bca23ee8",
    company: "Tech Immortals",
    logoUrl: {
      url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1768847515/hqfi9bwxwhamazfxeydx.png",
      publicId: "hqfi9bwxwhamazfxeydx",
    },
    type: "Full Time",
    role: "Front end Developer",
    location_type: "Remote",
    location: "Noida, India",
    href: "https://techimmortals.co/",
    tags: [
      "React",
      "Next",
      "TypeScript",
      "Figma",
      "Socket io",
      "Redux Toolkit",
      "Tailwind",
      "Rest Api",
      "More...",
    ],
    start: "Jul 2024",
    end: "Jan 2025",
    points: [
      "Worked as a Frontend Developer building modern web applications using React.js, Next.js, and TypeScript",
      "Developed and maintained multiple fantasy gaming platforms (similar to Dream11 / 1xBet) including Rummy, Roulette, and other interactive games",
      "Resolved complex bugs and production issues in existing Next.js projects, improving stability and user experience",
      "Built responsive and optimized UI screens with focus on performance, cross-browser compatibility, and mobile-first design",
      "Collaborated with designers and product stakeholders to align UI/UX, features, and business requirements",
      "Converted Figma designs into pixel-perfect, production-ready interfaces using best frontend practices",
      "Implemented real-time features and live event updates using Socket.io",
    ],
    createdAt: "2026-01-19T18:31:57.027Z",
    updatedAt: "2026-01-19T18:31:57.027Z",
    __v: 0,
  },
  {
    _id: "696e75da7f38df81bca23ec0",
    company: "Why Shy",
    logoUrl: {
      url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1768846500/ziqy3u5fyqdmk0oz3ffp.png",
      publicId: "ziqy3u5fyqdmk0oz3ffp",
    },
    type: "Internship",
    role: "Software Engineer",
    location_type: "Onsite",
    location: "Gurgaon, India",
    href: "https://www.whyshy.co/",
    tags: [
      "Python",
      "Php",
      "Laravel",
      "Mysql",
      "React",
      "Next Js",
      "Figma",
      "More...",
    ],
    start: "Jan 2024",
    end: "Jun 2024",
    points: [
      "Migrated legacy HTML/CSS to Next.js with a scalable, component-based structure",
      "Worked closely with stakeholders to align design, user experience, and functionality",
      "Redesigned the website end-to-end from concept to final implementation with strong UI/UX focus",
      "Optimized performance and overall site quality across devices and screen sizes",
      "Have done some web scraping to help the company with some required data using selenium and python",
    ],
    createdAt: "2026-01-19T18:20:10.109Z",
    updatedAt: "2026-01-19T18:32:26.508Z",
    __v: 1,
  },
  {
    _id: "696cd40eb9106ad4a3a34ea8",
    company: "Freelance",
    logoUrl: {
      url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1768739737/cmbhr9fqrpofwuqlzyh6.webp",
      publicId: "cmbhr9fqrpofwuqlzyh6",
    },
    type: "Part Time",
    role: "Full Stack Developer",
    location: "India",
    tags: [
      "Next",
      "React",
      "TypeScript",
      "Tailwind",
      "Express",
      "Node",
      "MongoDb",
      "Radish",
      "AWS",
      "Docker",
      "More...",
    ],
    start: "Dec 2023",
    end: "Present",
    points: [
      "Built pixel-perfect websites end-to-end with smooth, thoughtful user experience",
      "Worked closely with clients to turn rough ideas into clean, usable products",
      "Handled everything from design implementation to deployment and hosting",
      "Focused on performance, responsiveness, and intuitive, fast user interactions",
    ],
    createdAt: "2026-01-18T12:37:34.788Z",
    updatedAt: "2026-01-18T12:59:52.808Z",
    __v: 0,
    location_type: "Remote",
  },
  {
    _id: "696e7ad27f38df81bca23f02",
    company: "B alert",
    logoUrl: {
      url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1768847699/ioxkz9t21xzjdkewkhg0.png",
      publicId: "ioxkz9t21xzjdkewkhg0",
    },
    type: "Full Time",
    role: "Node Js Developer",
    location_type: "Remote",
    location: "Hydrabad, India",
    href: "https://balert.in/",
    tags: [
      "Node",
      "Express",
      "TypeScript",
      "Third Party Api's",
      "Cron jobs",
      "Geo Json",
      "MongoDb",
      "Maps",
      "Postman",
      "Geo Location",
      "More...",
    ],
    start: "Apr 2024",
    end: "Aug 2025",
    points: [
      "Worked as a Node.js Backend Developer building scalable APIs using Node.js, Express.js, and TypeScript",
      "Designed and developed RESTful APIs with clean architecture and proper validation/error handling",
      "Integrated multiple Third-Party APIs (payment, SMS/email, maps, etc.) based on project requirements",
      "Implemented Cron Jobs / Scheduled Tasks for automated operations like reports, cleanup, notifications, and syncing data",
      "Worked with MongoDB for database design, schema modeling, and query optimization",
      "Implemented GeoJSON-based location features including storing coordinates, radius-based queries, and geo indexing",
      "Built location & map-based modules such as nearby search, distance filtering, and location tracking like circle and poligon",
      "Ensured API security and stability with best practices like middleware-based authentication/authorizationCollaborated with frontend and product teams to deliver features with proper API documentation and support",
    ],
    createdAt: "2026-01-19T18:41:22.600Z",
    updatedAt: "2026-01-19T19:16:24.728Z",
    __v: 1,
  },
];
export const workSlice = createSlice({
  initialState,
  name: "works",
  reducers: {
    setWorksData: (_state, action: PayloadAction<Work[]>) => {
      return action.payload;
    },

    addWork: (state, action: PayloadAction<Work>) => {
      state.unshift(action.payload);
    },

    updateWork: (state, action: PayloadAction<Work>) => {
      const index = state.findIndex((w) => w._id === action.payload._id);
      if (index !== -1) state[index] = action.payload;
    },

    removeWork: (state, action: PayloadAction<string>) => {
      return state.filter((w) => w._id !== action.payload);
    },
  },
});

export const { setWorksData, addWork, removeWork, updateWork } =
  workSlice.actions;
export const getWorksData = (state: RootState) => state.works;
export default workSlice.reducer;
