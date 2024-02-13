import mongoose from "mongoose";
import TweetModel from "../databases/models/tweet.model";
import { ItweetInterface } from "../databases/interfaces/tweet.interface";

export const getTweetRepo= async(
    tweetId:string
    ): Promise<ItweetInterface | null> =>{
    try{
        const tweet=await TweetModel.findOne({uid:tweetId});
        return tweet;
    }catch(error){
        console.log(error)
        return null;
    }
};

export const deleteTweetRepo= async(
    tweetId:string
    ): Promise<boolean> =>{
    try{
        const deleted=await TweetModel.findOneAndDelete({uid:tweetId});
        if(deleted){
            return true;
        }
        else{
            return false;
        }
    }catch(error){
        console.log(error)
        return false;
    }
};

export const createTweetRepo= async(
    tweet:ItweetInterface
    ): Promise<boolean> =>{
    try{
        await TweetModel.create(tweet);
        return true
       
    }catch(error){
        console.log(error)
        return false;
    }
};

export const updateTweetRepo= async(
    tweetId:string,
    updatedTweet:ItweetInterface
    
    ): Promise<boolean> =>{
    try{
        const result=await TweetModel.findOneAndUpdate(
            {uid:tweetId},
            updatedTweet,
            {new:true}
            );
            if(result) {
                return true;
            }
            else{
                    return false;
                }
            
       
    }
    catch(error){
        console.log(error)
        return false;

    }
};
