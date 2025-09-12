import React from "react";
import { CloudinaryContext, Image } from "cloudinary-react";

function CloudinaryImage(props) {
  const { publicId, secure = true, alt, className } = props;

  const cloudName = import.meta.env.VITE_CLOUDINARY_NAME || "";

  return (
    <CloudinaryContext cloudName={cloudName}>
      <Image
        publicId={publicId || "public/placeholders/placeholder-dark_uwuxct"}
        secure={secure}
        alt={alt}
        className={className}
      />
    </CloudinaryContext>
  );
}

export default CloudinaryImage;
