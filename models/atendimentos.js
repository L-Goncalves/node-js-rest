const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {
    adiciona(atendimento, res){
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const IsValidData = moment(data).isSameOrAfter(dataCriacao);
        const isValidCliente = atendimento.cliente.length >= 5;

        const validacoes = [{
                nome: 'data' ,
                valido: IsValidData,
                mensagem: 'Data deve ser maior que atual',
            },
            {
                nome: 'cliente',
                valido: isValidCliente,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        // Faz um filter que retorna o campo que o .valido seja false
        const erros = validacoes.filter(campo => !campo.valido)

        const ExistemErros = erros.length;


        // Se houver algum erro no array de erros retorna 400
        if(ExistemErros){
            res.status(400).json(erros)
        }
        // Se não prosseguir
        else{

        const dataAtendimento = {
            ...atendimento,
            dataCriacao,
            data
        
        }

        const sql = `INSERT INTO Atendimentos SET ?`


        conexao.query(sql, dataAtendimento, (err, resultados) => {
            if(err){
                res.status(400).json(err)
                console.log(err)
            }
            else{
                res.status(201).json(resultados)
                console.log(resultados)
            }
        })

        }

    }

    lista(res) {
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => { 
            if(erro){
                res.status(400).json(erro)
            }
            
            else{
                res.status(200).json(resultados)
            }
                
        })
        
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })

    }


    altera(id, valores, res){
        const sql = `UPDATE Atendimentos SET ? WHERE id=${id}`

        if(valores.data){
            valores.data =  moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados);
            }
        })
    }
}

module.exports = new Atendimento;