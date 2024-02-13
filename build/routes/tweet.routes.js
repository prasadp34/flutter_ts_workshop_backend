"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_comtroller_1 = require("../controllers/tweet.comtroller");
const tweetRouter = (0, express_1.Router)();
//Define route paths
tweetRouter.get("/:tweetId", tweet_comtroller_1.getTweetController);
//tweetRouter.get("/",getAllTweetController)
tweetRouter.post("/", tweet_comtroller_1.createTweetController);
tweetRouter.delete("/:userId", tweet_comtroller_1.deleteTweetController);
tweetRouter.put("/", tweet_comtroller_1.updateTweetController);
exports.default = tweetRouter;
