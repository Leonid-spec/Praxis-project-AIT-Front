// export interface CropParams {
//     image: HTMLImageElement;
//     crop: {
//       x: number;
//       y: number;
//       width: number;
//       height: number;
//     };
//     fileName?: string;
//   }
  
//   const getCroppedImg = (previewUrl: string, {
//   image, crop, fileName = 'cropped.jpeg',
// }: CropParams): Promise<File> => {
//     const canvas = document.createElement('canvas');
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
  
//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext('2d');
  
//     if (!ctx) {
//       throw new Error('Canvas context is not available');
//     }
  
//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height
//     );
  
//     return new Promise((resolve, reject) => {
//       canvas.toBlob((blob) => {
//         if (!blob) {
//           reject(new Error('Canvas is empty or cannot be converted to blob'));
//           return;
//         }
//         const file = new File([blob], fileName, { type: 'image/jpeg' });
//         resolve(file);
//       }, 'image/jpeg');
//     });
//   };
  
//   export default getCroppedImg;
  
/**
 * Просте обрізання зображення за координатами
 * @param imageSrc - base64 або URL зображення
 * @param crop - обʼєкт з координатами { x, y, width, height }
 * @returns Promise<File>
//  */
// const getCroppedImg = (
//     imageSrc: string,
//     crop: { x: number; y: number; width: number; height: number }
//   ): Promise<File> => {
//     return new Promise((resolve, reject) => {
//       const image = new Image();
//       image.src = imageSrc;
  
//       image.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = crop.width;
//         canvas.height = crop.height;
  
//         const ctx = canvas.getContext("2d");
//         if (!ctx) {
//           reject(new Error("Не вдалося отримати контекст canvas"));
//           return;
//         }
  
//         ctx.drawImage(
//           image,
//           crop.x,
//           crop.y,
//           crop.width,
//           crop.height,
//           0,
//           0,
//           crop.width,
//           crop.height
//         );
  
//         canvas.toBlob((blob) => {
//           if (!blob) {
//             reject(new Error("Не вдалося створити Blob"));
//             return;
//           }
  
//           const file = new File([blob], "cropped.jpg", { type: "image/jpeg" });
//           resolve(file);
//         }, "image/jpeg");
//       };
  
//       image.onerror = () => {
//         reject(new Error("Не вдалося завантажити зображення"));
//       };
//     });
//   };
  
//   export default getCroppedImg;
  

// cropImageHelper.ts
// export default function getCroppedImg(imageSrc: string, pixelCrop: { width: number; height: number; x: number; y: number; }) {
//   return new Promise((resolve, reject) => {
//     const image = new Image();
//     image.src = imageSrc;
//     image.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = pixelCrop.width;
//       canvas.height = pixelCrop.height;
//       const ctx = canvas.getContext("2d");

//       ctx.drawImage(
//         image,
//         pixelCrop.x,
//         pixelCrop.y,
//         pixelCrop.width,
//         pixelCrop.height,
//         0,
//         0,
//         pixelCrop.width,
//         pixelCrop.height
//       );

//       canvas.toBlob((blob) => {
//         if (!blob) return reject("Failed to create blob");
//         const file = new File([blob], "cropped.jpg", { type: "image/jpeg" });
//         resolve(file);
//       }, "image/jpeg");
//     };
//     image.onerror = () => reject("Failed to load image");
//   });
// }


// cropImage.ts
import { Area } from "react-easy-crop";

const getCroppedImg = async (
  imageSrc: string,
  crop: Area
): Promise<File> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Could not get canvas context");

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise<File>((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(new File([blob], "cropped.jpg", { type: "image/jpeg" }));
      }
    }, "image/jpeg");
  });
};

function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous"; // дозволяє обробку зображення
    image.src = url;
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
  });
}

export default getCroppedImg;
