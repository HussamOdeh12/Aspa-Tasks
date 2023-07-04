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

router.post("/", AuthMiddle, createCard);

router.patch("/:id", AuthMiddle, updateCard);
router.patch("/:id/likeCard", AuthMiddle, likeCard);

router.delete("/:id", AuthMiddle, deleteCard);

export default router;
