"use server";
const API_KEY = "lvfBJ4fDBKiwaeLkZ6JvznJ1QB2DbLevZ4Nxevrg";
const picOfTheDayURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
import MarsRoverPhoto from "../components/MarsRoverPhoto/MarsRoverPhoto";
import styles from "./page.module.css";
// import data from "../assets/pod.json";

export default async function HomePage() {
  const data = await fetch(picOfTheDayURL).then((response) => response.json());

  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Picture of The Day: {data.title}</h1>
        <img src={data.url} className={styles.picOfTheDay} />
        <p className={styles.picOfTheDayDescription}>{data.explanation}</p>
        <h1>Rover Photo Of The Day</h1>
        <MarsRoverPhoto />
      </div>
    </>
  );
}
