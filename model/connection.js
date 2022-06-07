import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/outreach-chat-data"

mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to MongoDB at: ${connectionString}`)
    })

export default mongoose