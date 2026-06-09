import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type { Project } from "@/types/project";

type ProjectsState = {
  items: Project[];
};

const initialState: ProjectsState = {
  items: [
    {
      _id: "69c743f70915d4077e617432",
      title: "X Pic",
      subTitle: "Editor Section",
      image: {
        light: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1774666285/mbxa4yskigzallgoy6ha.png",
          publicId: "mbxa4yskigzallgoy6ha",
        },
        dark: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1774666717/nlmmebe84pcr2t43pfuk.png",
          publicId: "nlmmebe84pcr2t43pfuk",
        },
        _id: "69c743f70915d4077e617433",
      },
      stack: [
        "Vite",
        "React",
        "TypeScript",
        "Tailwind",
        "Framer Motion",
        "Shadcn",
      ],
      description: [
        "Real Tweet Fetching: Simply paste an X/Twitter URL to automatically fetch the post content, user info, and images.",
        "Interactive Editor: Click and edit any text directly on the card (Name, Handle, Content, Date, Stats).",
        "Media Support: Upload custom avatars and post images directly into the visual.",
        "High-Quality Export: Download your creations as PNG or JPG files with high pixel density.",
        'Quick Share: One-click "Copy to Clipboard" to quickly paste your visual into other apps.',
      ],
      links: {
        site: "https://x-screenshot.vercel.app/",
        github: "https://github.com/rameshdotdev/xpic",
      },
      status: "live",
      isPinned: false,
      createdAt: "2026-03-28T02:59:03.806Z",
      updatedAt: "2026-03-28T02:59:03.806Z",
      __v: 0,
    },
    {
      _id: "69a2c8b72c213288040e542d",
      title: "Aryan IT Solutions",
      subTitle: "A Service Provider",
      image: {
        light: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1772275882/rjkztnullblsjpoh3gqe.png",
          publicId: "rjkztnullblsjpoh3gqe",
        },
        dark: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1772275891/fbmukxc6dqqs9obzb84k.png",
          publicId: "fbmukxc6dqqs9obzb84k",
        },
        _id: "69a2c8b72c213288040e542e",
      },
      stack: ["Next Js", "Shadcn", "Node Js", "Express Js", "More..."],
      description: [
        "Introducing Aryan It Solutions - The app That help you to find out the engineer's that install security services like.. CCTV,Alarm and Security  stystem",
      ],
      links: {
        site: "https://cctv.imramesh.in",
        github: "https://github.com/rameshdotdev/cctv",
      },
      status: "live",
      isPinned: false,
      createdAt: "2026-02-28T10:51:35.839Z",
      updatedAt: "2026-03-26T03:35:10.302Z",
      __v: 1,
    },
    {
      _id: "6979f0df8479bd2138091e1f",
      title: "Aryan Estate - A real estate platform",
      subTitle: "Search results",
      image: {
        light: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769599172/xogf5gcjyrrg44nhjeuc.png",
          publicId: "xogf5gcjyrrg44nhjeuc",
        },
        dark: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769599172/xogf5gcjyrrg44nhjeuc.png",
          publicId: "xogf5gcjyrrg44nhjeuc",
        },
        _id: "6979f0df8479bd2138091e20",
      },
      stack: [
        "React Js",
        "Redux Toolkit",
        "Tailwind Css",
        "Node Js",
        "Express Js",
        "MongoDb",
        "JWT",
        "Google Auth",
        "Firebase",
      ],
      description: [
        "Built a full-stack MERN real estate platform with secure JWT and Google OAuth authentication.",
        "Implemented protected routes, user profile management, and complete CRUD for property listings.",
        "Developed advanced MongoDB search with filtering, sorting, and result limiting.",
        "Integrated multi-image uploads, Redux Toolkit state management, and responsive UI.",
      ],
      links: {
        site: "https://aryan-estate.onrender.com/",
        github: "https://github.com/rameshdotdev/aryan_estate",
      },
      status: "live",
      isPinned: false,
      createdAt: "2026-01-28T11:19:59.320Z",
      updatedAt: "2026-01-28T11:19:59.320Z",
      __v: 0,
    },
    {
      _id: "6974ca6f5ec6f8e948c2186c",
      title: "IMDB Clone",
      subTitle: "Home Feed",
      isPinned: false,
      image: {
        dark: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769261647/qzwlxhs89mguzdwjkqe5.png",
          publicId: "qzwlxhs89mguzdwjkqe5",
        },
        light: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769261647/qzwlxhs89mguzdwjkqe5.png",
          publicId: "qzwlxhs89mguzdwjkqe5",
        },
      },
      stack: ["Next Js", "TypeScript", "Tailwind CSS", "More..."],
      description: [
        "Our website is designed to provide you with a comprehensive database of movies from all around the world, along with the latest news, reviews, and trailers.",
      ],
      links: {
        site: "https://imdb-next-clone-two.vercel.app/",
        github: "https://github.com/rameshdotdev/imdb-next-clone",
      },
      status: "live",
      createdAt: "2026-01-24T13:34:39.636Z",
      updatedAt: "2026-01-24T13:34:39.636Z",
      __v: 0,
    },
    {
      _id: "6974c9fe5ec6f8e948c2185e",
      title: "Twitter Valentine",
      subTitle: "Home Feed",
      isPinned: true,
      image: {
        dark: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769261523/q3wnrue5dgwudaxxfsex.png",
          publicId: "q3wnrue5dgwudaxxfsex",
        },
        light: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769261523/q3wnrue5dgwudaxxfsex.png",
          publicId: "q3wnrue5dgwudaxxfsex",
        },
        _id: "6974d6189578bb5319465d89",
      },
      stack: ["React", "TypeScript", "Tailwind", "More..."],
      description: [
        "Introducing Twitter Valentine - The app that reveals your perfect match in the most hilarious way! 😂",
        "Collect funny memes the more you play",
      ],
      links: {
        site: "https://valentine-x.vercel.app/",
        github: "https://github.com/rameshdotdev/valentine-x",
      },
      status: "live",
      createdAt: "2026-01-24T13:32:46.044Z",
      updatedAt: "2026-01-24T14:33:20.005Z",
      __v: 1,
    },
    {
      _id: "6974c56704fcfca69d48de27",
      title: "Lunel",
      subTitle: "Comming Soon...",
      isPinned: false,
      image: {
        dark: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769260386/jb2wwlzlmcdbswgvohgi.webp",
          publicId: "jb2wwlzlmcdbswgvohgi",
        },
        light: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769260386/jb2wwlzlmcdbswgvohgi.webp",
          publicId: "jb2wwlzlmcdbswgvohgi",
        },
      },
      stack: ["Lorem", "Ipsum", "Dolar", "Sit", "Amet"],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      ],
      status: "building",
      createdAt: "2026-01-24T13:13:11.388Z",
      updatedAt: "2026-01-24T13:26:52.700Z",
      __v: 0,
      links: {
        site: "http://localhost",
        github: "http://localhost",
      },
    },
    {
      _id: "6974be3004fcfca69d48ddcf",
      title: "Asap",
      subTitle: "Comming Soon...",
      isPinned: false,
      image: {
        dark: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769260386/jb2wwlzlmcdbswgvohgi.webp",
          publicId: "gayrs853nwgvig26kd5v",
        },
        light: {
          url: "https://res.cloudinary.com/dvzsnzhka/image/upload/v1769260386/jb2wwlzlmcdbswgvohgi.webp",
          publicId: "gayrs853nwgvig26kd5v",
        },
      },
      stack: [
        "Next Js",
        "Bun",
        "TypeScript",
        "Express",
        "Prisma",
        "Socket.io",
        "WebRTC",
        "Tailwind",
        "TanStack Query",
        "Motion",
      ],
      description: [
        "A platform that lets you record studio-quality video calls without breaking the bank. Everything's captured locally on your device — no compression, no quality loss, just pure crisp content.",
        "Whether you're a creator, podcaster, or running remote interviews, Asap makes professional recording accessible to everyone. High-quality content creation shouldn't cost a fortune, and now it doesn't have to.",
      ],
      links: {
        github: "https://github.com/rameshdotdev/asap",
      },
      status: "building",
      createdAt: "2026-01-24T12:42:25.212Z",
      updatedAt: "2026-01-24T12:42:25.212Z",
      __v: 0,
    },
  ],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.items = action.payload;
    },

    addProject: (state, action: PayloadAction<Project>) => {
      state.items.unshift(action.payload);
    },

    updateProjectInStore: (state, action: PayloadAction<Project>) => {
      const updated = action.payload;
      const idx = state.items.findIndex((p) => p._id === updated._id);
      if (idx !== -1) state.items[idx] = updated;
    },

    removeProject: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items = state.items.filter((p) => p._id !== id);
    },

    clearProjects: (state) => {
      state.items = [];
    },
  },
});

export const {
  setProjects,
  addProject,
  updateProjectInStore,
  removeProject,
  clearProjects,
} = projectSlice.actions;

/* =========================
   Selectors
========================= */
export const selectProjects = (state: RootState) => state.projects.items;

export const selectProjectById = (id: string) => (state: RootState) =>
  state.projects.items.find((p) => p._id === id);

export default projectSlice.reducer;
