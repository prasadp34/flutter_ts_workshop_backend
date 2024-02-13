import mongoose,{ Document,Schema } from "mongoose";

import {ItweetInterface} from '../interfaces/tweet.interface';

const tweetSchema=new Schema<ItweetInterface>({
    tweetId:{type:String,required:true},
    adminId:{type:String,required:true},
    content:{type:String,default:""},
    createdAt:{type:String,required:true}
});

const TweetModel= mongoose.model<ItweetInterface>('TweetModel',tweetSchema);
export default TweetModel;