const { join } = require("../db/connection");
const knex = require("../db/connection");

function update(updatedReview) {
    return knex("reviews")
    .join("movies_theaters")
    .select("*")
    .where({"reviews.reviews":updatedReview.reviews})
    .update(updatedReview,"*");
}

module.exports = {
    update,
}