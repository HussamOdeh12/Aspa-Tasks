import mongoose from "mongoose";
import CardMessage from "../models/cardMessage.js";

//-------------------------------------------------------------------
//--- Fetch All Cards ---

export const getCards = async (req, res) => {
  const { page } = req.query; // query => /cards?page=1 => page = 1
  try {
    const LIMIT = 6;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index for every page
    const total = await CardMessage.countDocuments({});
    const cards = await CardMessage.find() // find() => used to retrieve all documents from the CardMessage collection in the database
      .sort({ _id: -1 }) // from newest to oldest
      .limit(LIMIT) // just 8 in each page
      .skip(startIndex); // if you're on page 2 for example, you need to skip fetching the first 8 cards
    res.status(200).json({
      data: cards,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

//-------------------------------------------------------------------
//--- Fetch Cards By Search ---

export const getCardsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i"); // i flag => ignore casing
    const cards = await CardMessage.find({ title });
    res.status(200).json({ data: cards });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

//-------------------------------------------------------------------
//--- Fetch One Card For Details Page ---

// params => /cards/:id => /cards/:123 => id = 123
export const getCard = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const card = await CardMessage.findById(_id);
    res.status(200).json(card);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

//-------------------------------------------------------------------
//--- Create A New Card ---

/*
card => is assumed to contain the data necessary to create a new card. 
Creating a new instance of CardMessage: This creates a new document that can be saved to the database.
save() => save the document to the MongoDB. 
*/
export const createCard = async (req, res) => {
  const card = req.body;
  const newCard = new CardMessage({
    ...card,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

//-------------------------------------------------------------------
//--- Update Existing Card ---

/*
1) mongoose.Types.ObjectId.isValid(_id)): 
method is used in the Mongoose library to check the validity of a string as a MongoDB ObjectId. 
2) { new: true }: This option tells Mongoose to return the updated document after the update operation is performed.
*/
export const updateCard = async (req, res) => {
  const { id: _id } = req.params;
  const card = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No card with this id");
    const updatedCard = await CardMessage.findByIdAndUpdate(_id, card, {
      new: true,
    });
    res.status(200).json(updatedCard);
  } catch (error) {
    res.json({ message: error });
  }
};

//-------------------------------------------------------------------
//--- Delete card ---

export const deleteCard = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No card with this id");
    await CardMessage.findByIdAndRemove(_id);
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    res.json({ message: error });
  }
};

//-------------------------------------------------------------------
//--- Like Card ---

/*
like card with user authentication: 
const index = card.likeCount.findIndex((id) => id === String(req.userId));
if (index === -1) {
  card.likeCount.push(req.userId);
} else {
  card.likeCount = card.likeCount.filter((id) => id !== String(req.userId));
}
*/
export const likeCard = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!req.userId) return res.json({ message: "Not Authenticated" });
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No post with id: ${_id}`);
    const card = await CardMessage.findById(_id);
    const index = card.likeCount.findIndex((id) => id === String(req.userId));
    if (index === -1) {
      card.likeCount.push(req.userId);
    } else {
      card.likeCount = card.likeCount.filter((id) => id !== String(req.userId));
    }
    const updatedCard = await CardMessage.findByIdAndUpdate(_id, card, {
      new: true,
    });
    res.json(updatedCard);
  } catch (error) {
    res.json({ message: error });
  }
};
