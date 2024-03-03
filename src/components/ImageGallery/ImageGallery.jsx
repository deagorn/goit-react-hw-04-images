import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'
import s from './ImageGallery.module.css'

export const ImageGallery = ({images, openModal}) => {
const uniqueIds = {};

  return (
    <ul className={s.gallery}>
      {images.map(image => {
        if (!uniqueIds[image.id]) {
          uniqueIds[image.id] = true;
          return <ImageGalleryItem key={image.id} {...image} openModal={openModal} />;
        }
        return null;
      })}
    </ul>
  );
}


