const knex = require("../db/connection");

const mapProperties = require("../map-properties/map-properties");

const addMovie = mapProperties({
    movie_id: "m.movie_id",
    title: "m.title",
    runtime_in_minutes: "m.runtime_in_minutes",
    rating: "m.rating",
    description: "m.description",
    image_url: "m.image_url",
    is_showing: "mt.is_showing",
    theater_id: "t.theater_id",
});

function list() {
    return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*", "m.*")
    .first()
    .then(addMovie);
}

module.exports = {
    list,
}