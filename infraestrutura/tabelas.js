class Tabelas{
    init(conexao){
        this.conexao = conexao;
        console.log('Tabelas foram chamadas')
        this.criarAtendimentos()
    }

    criarAtendimentos(){
        //                       |Nome da table| |tipo inteiro não nulo que auto-incrementa|
        // 
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT,
            cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL,
            data datetime NOT NULL, datacriacao datetime NOT NULL,
            status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id) )`
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            }
            else{
                console.log("tabela de atendimentos criada com sucesso!")
            }
        })

    }
}

module.exports = new Tabelas;