const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// get all thoughts
router.route("/").get(getAllThoughts);

// add thought by id
router.route("/:userId").post(addThought);

// Delete thought by id
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(addThought)
  .delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
