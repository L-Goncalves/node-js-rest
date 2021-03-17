const Atendimento = require('../models/atendimentos')


module.exports = app => {
    // GET 
    app.get('/atendimentos', (req, res ) => {
        Atendimento.lista(res);
    })

    app.get('/atendimentos/:id', (req, res) => {
        let id = parseInt(req.params.id);

        Atendimento.buscaPorId(id, res)
    })

    // POST
    app.post('/atendimentos', (req, res) => {
        // Saves the request to PostReq
        const postReq = req.body;

        // PUSHES DATA INTO DATABASE
        Atendimento.adiciona(postReq, res)
      
    })

    app.patch('/atendimentos/:id', (req, res) => {
        let id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.altera(id, valores, res);
    })
}