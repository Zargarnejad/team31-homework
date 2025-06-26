"use client";

import React, { useState, useEffect } from "react";
import styles from "./MarsRoverPhoto.module.css";

const API_KEY = "8f077cfc-82b7-4e9f-8f50-95f72b62df62";
const marsRoverPhotoAPI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`;

export default function MarsRoverPhoto() {
  const [roverPhoto, setRoverPhoto] = useState({});
  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(marsRoverPhotoAPI).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
  });

  return (
    <div>
      {roverPhoto?.photos?.length ? (
        <div className={styles.roverContainer}>
          {roverPhoto.photos.map((photo, index) => (
            <div key={index} className={styles.roverImage}>
              <p>Date {photo.earth_date}</p>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={photo.img_src}
                alt={photo.roverName}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading rover photos...</p>
      )}
    </div>
  );
}
