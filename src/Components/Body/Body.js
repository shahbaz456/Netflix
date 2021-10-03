import React from "react";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Body.css";
import Movie from "../Movie/Movie";

export default function Body() {
  const topmovies = useSelector((state) => state.data.topmovies);
  const popular = useSelector((state) => state.data.popular);
  const upcoming = useSelector((state) => state.data.upcoming);
  const { list } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const api_key = "?api_key=960a2cf27538aaa362a94e274d44861d";

  const topRated = async () => {
    await fetch(` https://api.themoviedb.org/3/movie/top_rated${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("show data of ", data.results);
        dispatch({ type: "TOP_RATED", payload: data.results });

        return;
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const poPular = async () => {
    await fetch(` https://api.themoviedb.org/3/movie/popular${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("show data of ", data.results);
        dispatch({ type: "POPULAR", payload: data.results });

        return;
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const upComing = async () => {
    await fetch(` https://api.themoviedb.org/3/movie/upcoming${api_key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("show data of ", data.results);
        dispatch({ type: "UPCOMING", payload: data.results });

        return;
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(
    () => {
      topRated();
      upComing();
      poPular();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div>
      <Banner />

      {list.length > 0 && <Movie movies={list} title="Search Result" />}
      {list.length > 0 ? null : (
        <Movie movies={topmovies} title="Trending Now" />
      )}
      {list.length > 0 ? null : <Movie movies={upcoming} title="Up Coming" />}
      {list.length > 0 ? null : (
        <Movie movies={popular} title="Popular Movies" />
      )}
    </div>
  );
}
