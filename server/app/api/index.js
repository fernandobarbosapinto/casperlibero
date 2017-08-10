/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var ddd = [
      { origem : 11, descricao : 'São Paulo'},
      { origem : 16, descricao : 'Ribeirão Preto'},
      { origem : 17, descricao : 'Mirassol'},
      { origem : 18, descricao : 'Tupi Paulista'}
    ];

var plano = [
      { plano : 'FaleMuito 30', tempo : 30},
      { plano : 'FaleMuito 60', tempo : 60},
      { plano : 'FaleMuito 120', tempo : 120}
    ]

var tarifa = [
      { id : 1116, valor: 1.90},
      { id : 1611, valor: 2.90},
      { id : 1117, valor: 1.70},
      { id : 1711, valor: 2.70},
      { id : 1118, valor: 0.90},
      { id : 1811, valor: 1.90}
    ]

api.listaDDD = function(req, res) {
    var dddAtuais = ddd.filter(function(ddds) {
        return ddds;
    });
    res.json(dddAtuais);
};

api.listaPlano = function(req, res){
    var planosAtuais = plano.filter(function(planos){
        return planos;
    });
    res.json(planosAtuais);    
};

api.listaTarifas = function(req, res){
    var tarifasAtuais = tarifa.filter(function(tarifas){
        return tarifas;
    });
    res.json(tarifasAtuais);
}

module.exports = api;