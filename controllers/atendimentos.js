module.exports = app => {
    app.get('/atendimentos', (req, res ) => {
        res.send('Servidor OK!')
    })

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Post Realizado!')
    })
}