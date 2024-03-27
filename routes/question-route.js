const express = require('express')
const { getAllQuestion, getQuestionById, createQuestion } = require('../controllers/question-controller')
const route = express.Router()

route.get('/', getAllQuestion)
route.get('/:id', getQuestionById)
route.post('/', createQuestion)

module.exports = route