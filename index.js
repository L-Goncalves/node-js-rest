const customExpress = require('./config/custom-express')
const conexao = require('./infraestrutura/conexao')
const app = customExpress()

conexao.connect(erro =>{
    if(erro){
        console.log(erro)
    }

    else{
        app.listen(3001, () => {
            console.log('Servidor rodando na porta 3000')
        })
        
    }
   
})


