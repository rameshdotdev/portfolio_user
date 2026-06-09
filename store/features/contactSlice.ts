import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ContactData } from "@/types/type";
import type { RootState } from "..";

const initialState: ContactData = {
  email: "ittsramesh@gmail.com",
  social: {
    X: {
      name: "Twitter",
      url: "https://x.com/rameshdotin",
      icon: "x",
      navbar: true,
    },
    Linkedin: {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/rameshdotin/",
      icon: "linkedin",
      navbar: true,
    },
    GitHub: {
      name: "GitHub",
      url: "https://github.com/rameshdotdev",
      icon: "github",
      navbar: true,
    },
    Medium: {
      name: "Medium",
      url: "https://medium.com/@rameshdotin",
      icon: "medium",
      navbar: true,
    },
    Leetcode: {
      name: "Leetcode",
      url: "https://leetcode.com/u/rameshdotin/",
      icon: "leetcode",
      navbar: true,
    },
    Bluesky: {
      name: "Bluesky",
      url: "https://bsky.app/profile/rameshdotdev.bsky.social",
      icon: "bluesky",
      navbar: true,
    },
    Youtube: {
      name: "Youtube",
      url: "https://www.youtube.com/@BaisYards",
      icon: "youtube",
      navbar: true,
    },
    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/rameshdotin",
      icon: "instagram",
      navbar: true,
    },
  },
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContactData: (state, action: PayloadAction<ContactData>) => {
      state.email = action.payload.email;
      state.social = action.payload.social;
    },

    // Optional: reset (useful on logout)
    resetContactData: () => initialState,
  },
});

export const { setContactData, resetContactData } = contactSlice.actions;

// Selector
export const getContactData = (state: RootState) => state.contact;

export default contactSlice.reducer;
