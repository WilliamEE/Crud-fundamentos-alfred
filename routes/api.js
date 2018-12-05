const Db = require('../lib/post')

module.exports = {
    loadPost: async (req, res) =>{
        const Entries = await Db.getPosts()
        res.status(200) // 200 => todo esta ok
        res.json(Entries)
    },
    loadPost: async (req, res) => {
        const Entry = await Db.getPost(req.params.id)
        res.status(200)
        res.json(Entry)
    },
    newPost: async (req, res) => {
        const newEntry = await Db.createOrUpdatePost (req.body)
        res.status(201) // hay nuevo contenido
        res.json(newEntry)
    },
    updatePost: async (req, res) => {
        const updateEntry = await Db.createOrUpdatePost (req.body)
        res.status(201) // No existe contenidp
        res.json(updateEntry)
    },
    deletePost: async (req, res) => {
        const deletedEntry = await Db.deletePost (req.params.id)
        res.status(204) // No existe contenidp
        res.json(deletedEntry)
    }

}