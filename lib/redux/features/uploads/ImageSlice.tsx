import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImageState {
  image: string | null;
}

const initialState: ImageState = {
  image: null,
};
const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImageURL: (state, action: PayloadAction<string | null>) => {
      state.image = action.payload;
    },
  },
});

export const { setImageURL } = imageSlice.actions;
export default imageSlice.reducer;
