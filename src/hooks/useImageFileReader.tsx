import { useEffect, useState } from 'react';

interface useImageFileReaderProps {}

const useImageFileReader = () => {
  const [image, setImage] = useState<any>();
  const [imageForm, setImageForm] = useState(null);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImageForm(file);

    const fileReader = new FileReader();
    fileReader.onload = function (e: ProgressEvent<FileReader>) {
      setImage(e.target?.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return [handleImage, image, imageForm];
};

export default useImageFileReader;
