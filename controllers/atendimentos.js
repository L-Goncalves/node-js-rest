const Atendimento = require('../models/atendimentos')


module.exports = app => {
    // GET 
    app.get('/atendimentos', (req, res ) => {
        
        res.send('Servidor OK!')
    })

    // POST
    app.post('/atendimentos', (req, res) => {
        // Saves the request to PostReq
        const postReq = req.body;

        // PUSHES DATA INTO DATABASE
        Atendimento.adiciona(postReq, res)
      
    })
}