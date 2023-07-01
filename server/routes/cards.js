import express from "express";
import AuthMiddle from "../middleware/AuthMiddle.js";
import {
  getCards,
  getCardsBySearch,
  getCard,
  createCard,
  updateCard,
  deleteCard,
  likeCard,
} from "../controllers/cards.js";

const router = express.Router();

router.get("/", getCards);
router.get("/search", getCardsBySearch);
router.get("/:id", getCard);

router.post("/", createCard);

router.patch("/:id", updateCard);
router.patch("/:id/likeCard", likeCard);

router.delete("/:id", deleteCard);

export default router;
