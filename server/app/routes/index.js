/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/ddd')
        .get(api.listaDDD);
        
    app.route('/plano')
        .get(api.listaPlano);

    app.route('/tarifa')
    	.get(api.listaTarifas); 
      
};