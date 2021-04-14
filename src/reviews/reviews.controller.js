const knex = require("../db/connection");
const service = require("./reviews.service");

const VALID_PROPERTIES = [
    "score",
    "content"
]

function hasOnlyValidProperties() {

}

function reviewExists() {

}

async function update(req, res) {
    const updatedReview = {
        ...req.body.data,
        reviews: req.params.reviewId
    };
    const data = await service.update(updatedReview);
    res.json({data});
}

module.exports = {
    update,
}