const express = require('express')
const session = require('express-session')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 4000
const Story = require('./models/story')
mongoose.connect('mongodb://localhost:27017/joke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(express.json())
app.use(bodyParser.json())


app.get('/', async(req, res) => {
    const story = await Story.find({})
    res.json(story)
})
app.post('/', async (req, res) => {
    const payload = req.body
    payload.like = false
    const joke = new Story(payload)
    await joke.save()
    res.status(201).end()
})
app.get('/:id', async(req, res) => {
    const story = await Story.findOne({_id: req.params.id})
    res.json(story)
})
app.delete('/:id', async(req, res) => {
    if(req.session.username){
        const { id } = req.params
        await Story.findByIdAndDelete(id)
        res.status(204).end()
    }
    else{
        res.status(401).end()
    }
})
app.post('/:id/like', async(req, res) => {
    const { id } = req.params
    const story = await Story.findByIdAndUpdate(id, { $set: {like: true} })
    res.json(story)
})
app.post('/:id/dislike', async(req, res) => {
    const { id } = req.params
    const story = await Story.findByIdAndUpdate(id, { $set: {like: false} })
    res.json(story)
})


app.post('/login', async(req, res) => {
    const payload = req.body
    if(payload.username&&payload.password){
        req.session.username = payload.username
        req.session.password = payload.password
        res.json({status: true, msg: 'login successfully'})
    }
    else{
        res.json({status: false, msg: 'please try again'})
    }
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})