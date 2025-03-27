import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800  text-white border border-gray-600 p-5 rounded-2xl">
      <img src={movie.img_url} alt={movie.title} />
      <h3 className="font-bold text-2xl">{movie.title}</h3>
      <p>{movie.info}</p>
      <button>🤍</button>
    </div>
  );
}

export default MovieCard;
