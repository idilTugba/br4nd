"use client";

import { FormEvent, useRef, useState } from "react";

import { useAppDispatch } from "@/lib/redux/Hooks";
import { setImageURL } from "@/lib/redux/features/uploads/ImageSlice";

const UploadImg = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleUploud = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (imageRef.current?.files && imageRef.current.files[0]) {
      const file = imageRef.current.files[0];
      setPhoto(file);
      const imageUrl = URL.createObjectURL(file);

      dispatch(setImageURL(imageUrl));
    }
  };
  return (
    <form onSubmit={handleUploud}>
      <input ref={imageRef} type="file" accept="image/*" />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default UploadImg;
