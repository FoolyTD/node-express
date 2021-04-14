const { select } = require("../db/connection");
const knex = require("../db/connection");

async function hi(theater) {
    theater.movies = await knex("movies")
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .where({"movies_theaters.theater_id":theater.theater_id})

    return theater;
}

function list() {
    return knex("theaters")
    .select("*")
    .then((data)=>Promise.all(data.map(hi)))
    
}

module.exports = {
    list,
}