import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialState = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

const UpdateForm = (props) => {
  const { push } = useHistory();
  const { id } = useParams();
  const [movie, setMovie] = useState(initialState);

  const handleChange = (e) => {
    setMovie({
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={movie.title}
            placeholder="movie title"
          />
        </label>
        <label htmlFor="director">
          Director:
          <input
            type="text"
            onChange={handleChange}
            name="director"
            value={movie.director}
            placeholder="director"
          />
        </label>
        <label htmlFor="movieTitle">
          Metascore:
          <input
            type="number"
            onChange={handleChange}
            name="metascore"
            value={movie.metascore}
            placeholder="metascore"
          />
        </label>
        <label htmlFor="movieTitle">
          Stars:
          <input
            type="text"
            onChange={handleChange}
            name="stars"
            value={movie.stars}
            placeholder="stars"
          />
        </label>
        <button onClick={() => push(`/`)}>Update</button>
      </form>
    </div>
  );
};
export default UpdateForm;
