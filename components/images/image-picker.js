"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi"; // 🚀 Clean upload icon

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handleClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    // 🚀 Fixed: Moved FileReader logic safely inside the change handler
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-semibold text-neutral-300 tracking-wide"
      >
        {label}
      </label>

      {/* Hidden Native File Input */}
      <input
        type="file"
        id={name}
        name={name}
        accept="image/png, image/jpeg"
        className="hidden" // 🚀 Keeps it completely invisible
        ref={imageInputRef}
        onChange={handleImageChange}
      />

      {/* Interactive Upload Box Container */}
      <div
        onClick={handleClick}
        className="relative group flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-neutral-800 hover:border-green-500/60 bg-neutral-900/40 hover:bg-neutral-900/80 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden select-none"
      >
        {!pickedImage ? (
          /* Empty State: Shows Icon and Text instructions */
          <div className="flex flex-col items-center text-center p-6 space-y-2 pointer-events-none">
            <div className="p-3 bg-neutral-800/60 rounded-xl group-hover:bg-green-500/10 group-hover:text-green-400 text-neutral-400 transition-colors duration-300">
              <FiUploadCloud size={28} />
            </div>
            <div className="text-sm text-neutral-300 font-medium">
              <span className="text-green-500 font-semibold group-hover:underline">
                Click to upload
              </span>{" "}
              or drag and drop
            </div>
            <p className="text-xs text-neutral-500">
              PNG or JPEG (Max resolution recommended for cover artwork)
            </p>
          </div>
        ) : (
          /* Active State: Shows Selected Image Preview with a Hover overlay */
          <div className="relative w-full h-full">
            <Image
              src={pickedImage}
              alt="Image selected by user"
              fill
              className="object-cover"
            />
            {/* Change Image Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-sm font-medium transition-opacity duration-200 gap-1">
              <FiUploadCloud size={20} />
              <span>Change Cover Image</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
