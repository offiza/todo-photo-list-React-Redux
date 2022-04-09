import React, { useEffect, useState } from 'react';
import { Photo } from '../../libs/common';
import axios from 'axios';

export const useGetPhoto = (albumId: number) => {
  const [album, setAlbum] = useState<Photo[]>();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!albumId) return;

    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [albumId])



  return {
    album,
    error,
    isLoading
  }
}