import mongoose from "./connection.js"

const ChatDataSchema = new mongoose.Schema({
    chat: Number,
    isConverted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
})

const ChatDataCollection = mongoose.model("chat_data", ChatDataSchema)

const getAllChats = () => {
    return ChatDataCollection.find()
}

const getAChat = (chatId) => {
    return ChatDataCollection.findById(chatId)
}

const createChat = (newChat) => {
    return ChatDataCollection.create(newChat)
}

const editChat = (chatId, editedChat) => {
    return ChatDataCollection.updateOne({_id: chatId}, editedChat)
}

const deleteChat = (chatId) => {
    return ChatDataCollection.deleteOne({_id: chatId})
}

export {
    getAllChats,
    getAChat,
    createChat,
    editChat,
    deleteChat
}