import { configureStore } from "@reduxjs/toolkit";
import ideasReducer from "@/lib/features/ideas/ideasSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ideas: ideasReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
