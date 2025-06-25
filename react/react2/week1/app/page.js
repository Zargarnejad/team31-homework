"use server";
const API_KEY = "lvfBJ4fDBKiwaeLkZ6JvznJ1QB2DbLevZ4Nxevrg";
const picOfTheDayURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
import MarsRoverPhoto from "../components/MarsRoverPhoto/MarsRoverPhoto";
import styles from "./page.module.css";

export default async function HomePage() {
  const data = await fetch(picOfTheDayURL).then((response) => response.json());

  return (
    <>
    <div className={styles.mainContainer}>
      <p>{data.title}</p>
      <img src={data.url} />
      <p>{data.explanation}</p>
    </div>
    <MarsRoverPhoto/>
    </>
  );
}
