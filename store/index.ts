import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import themeReducer from "./features/themeSlice";
import heroReducer from "./features/heroSlice";
import projectReducers from "./features/projectSlice";
import messageReducer from "./features/messageSlice";
import contactReducer from "./features/contactSlice";
import worksReducer from "./features/workSlice";
import loadingReducer from "./features/loadingSlice";
import visitorReducer from "./features/visitorSlice";
import wakatimeReducer from "./features/wakatimeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    hero: heroReducer,
    projects: projectReducers,
    messages: messageReducer,
    contact: contactReducer,
    works: worksReducer,
    loading: loadingReducer,
    visitor: visitorReducer,
    wakatime: wakatimeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
