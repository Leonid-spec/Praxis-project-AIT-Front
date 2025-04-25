// import React, { useState, useRef } from 'react';
// import ReactCrop, { Crop } from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

// interface TopImageUploaderProps {
//   onImageCropped: (croppedImage: File) => void;
// }

// const TopImageUploader: React.FC<TopImageUploaderProps> = ({ onImageCropped }) => {
//   const [upImg, setUpImg] = useState<string>();
//   const imgRef = useRef<HTMLImageElement>(null);
//   const [crop, setCrop] = useState<Crop>({ unit: '%', width: 50, aspect: 3 });
//   const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);

//   const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const reader = new FileReader();
//       reader.addEventListener('load', () => setUpImg(reader.result as string));
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const onLoad = (img: HTMLImageElement) => {
//     imgRef.current = img;
//   };

//   const makeClientCrop = async (crop: Crop) => {
//     if (imgRef.current && crop.width && crop.height) {
//       const croppedImage = await getCroppedImg(imgRef.current, crop, 'newFile.jpeg');
//       onImageCropped(croppedImage);
//     }
//   };

//   const getCroppedImg = (image: HTMLImageElement, crop: Crop, fileName: string): Promise<File> => {
//     const canvas = document.createElement('canvas');
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width!;
//     canvas.height = crop.height!;
//     const ctx = canvas.getContext('2d');

//     if (ctx) {
//       ctx.drawImage(
//         image,
//         crop.x! * scaleX,
//         crop.y! * scaleY,
//         crop.width! * scaleX,
//         crop.height! * scaleY,
//         0,
//         0,
//         crop.width!,
//         crop.height!
//       );
//     }

//     return new Promise((resolve, reject) => {
//       canvas.toBlob((blob) => {
//         if (!blob) {
//           console.error('Canvas is empty');
//           return;
//         }
//         const file = new File([blob], fileName, { type: 'image/jpeg' });
//         resolve(file);
//       }, 'image/jpeg');
//     });
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={onSelectFile} />
//       {upImg && (
//         <ReactCrop
//           src={upImg}
//           onImageLoaded={onLoad}
//           crop={crop}
//           onChange={(newCrop) => setCrop(newCrop)}
//           onComplete={(c) => {
//             setCompletedCrop(c);
//             makeClientCrop(c);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default TopImageUploader;
