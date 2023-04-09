import { useState } from 'react';

interface useImageFileReaderProps {}

const useImageFileReader = () => {
  const [image, setImage] = useState<any>();
  const [imageInput, setImageInput] = useState(null);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImageInput(file);

    const fileReader = new FileReader();
    fileReader.onload = function (e: ProgressEvent<FileReader>) {
      setImage(e.target?.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  return [handleImage, image, imageInput];
};

export default useImageFileReader;
