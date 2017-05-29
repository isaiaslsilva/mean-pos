const Localizacao = require('../model/localizacao');

function LocalizacaoService() {
    this.salvar = salvar;
    this.atualizar = atualizar;
    this.excluir = excluir;
    this.consultar = consultar;
    this.consultarPorId = consultarPorid;

    return this;
}

function salvar(localizacao) {
    return new Promise((resolve, reject) => {
        console.log(localizacao);
        localizacao.save((err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res);
        });
    });
}
function atualizar(localizacao) {
    return new Promise((resolve, reject) => {
        Localizacao.findByIdAndUpdate(localizacao._id, localizacao, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res);
        });
    });
}
function excluir(id) {
    return new Promise((resolve, reject) => {
        Localizacao.findByIdAndRemove(id, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res);
        });
    });
}
function consultar() {
    return new Promise((resolve, reject) => {
        let criteria = {};

        // Localizacao.find(criteria, (err, res) => {
        //     if(err) {return reject(err);}
        //     resolve(res);
        // });

        Localizacao
            .find({})
            .sort({dataHora: 'desc'})
            .exec((err, res) => {
                if (err) {
                    return reject(err);
                }
                resolve(res);
            });
    });
}
function consultarPorid(id) {
    return new Promise((resolve, reject) => {
        Localizacao.findById(id, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res);
        });
    });
}

module.exports = LocalizacaoService();