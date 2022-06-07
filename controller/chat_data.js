import express from "express";
import { getAllChats, getAChat, createChat, editChat, deleteChat } from "../model/chat_data.js"
const chatRouter = express.Router()

chatRouter.get('/api', async (req, res) => {
    try {
        const allChats = await getAllChats()
        res.json(allChats)
    } catch (error) {
        console.error(error)
    }
})

chatRouter.get('/api/:id', async (req, res) => {
    try {
        const oneChat = await getAChat(req.params.id)
        res.json(oneChat)
    } catch (error) {
        console.error(error)
    }
})

chatRouter.post('/api/create', async (req, res) => {
    try {
        const createdChat = await createChat(req.body)
        res.json(createdChat)
    } catch (error) {
        console.error(error)
    }
})

chatRouter.put("/api/:id", async (req, res) => {
    try {
        const editedChat = await editChat(req.params.id, req.body)
        res.json(editedChat)
    } catch (error) {
        console.error(error)
    }
})

chatRouter.delete("/api/:id", async (req, res) => {
    try {
        const deletedChat = await deleteChat(req.params.id)
        res.sendStatus(200)
    } catch (error) {
        console.error(error)
    }
})

export default chatRouter