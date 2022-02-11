import { useState } from 'react';

export const useImageUpload = () => {
  const [file, setFile] = useState();

  const imageUpload = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return [file, imageUpload];
};
