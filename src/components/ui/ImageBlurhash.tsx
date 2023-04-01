// 'use client';
// import NextImage from 'next/image';
// import { FC, useEffect, useState } from 'react';
// import { Blurhash } from 'react-blurhash';

// interface ImageBlurhashProps {
//   hash: string;
//   src: string;
//   width: number;
//   height: number;
//   className?: string;
//   alt: string;
//   resolutionX?: number;
//   resolutionY?: number;
// }

// const ImageBlurhash: FC<ImageBlurhashProps | HTMLImageElement> = ({
//   hash,
//   src,
//   width,
//   height,
//   alt,
//   className,
//   resolutionX = 64,
//   resolutionY = 64,
//   ...props
// }: any) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <>
//       {!imageLoaded && (
//         <Blurhash
//           hash={hash}
//           width={width}
//           height={height}
//           resolutionX={resolutionX}
//           resolutionY={resolutionY}
//           punch={1}
//           className={className}
//         />
//       )}

//       <NextImage
//         src={src}
//         alt={alt}
//         width={width}
//         height={height}
//         onLoadingComplete={() => {
//           setImageLoaded(true);
//         }}
//         style={imageLoaded ? {} : { width: 0 }}
//         className={className}
//         {...props}
//       />
//     </>
//   );
// };

// export default ImageBlurhash;
