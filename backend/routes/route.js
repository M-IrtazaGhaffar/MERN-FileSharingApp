const express = require('express')
const { upload } = require('../middleware/middleware')
const router = express.Router()

router.post('/upload', upload.single('file'), (req, res) => {
    res.json({ path: `http://localhost:3000/file/${req.file.filename}`});
})
router.get('/file/:id', (req, res) => {
    const { id } = req.params;
    res.download(`uploads/${id}`)
})

module.exports = {
    router
}