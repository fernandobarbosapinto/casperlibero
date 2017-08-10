class NegociacaoController {
    
    importaDDD() {

        const URL_DDD = '/ddd';
        fetch(URL_DDD, {
            method: 'get'
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){

                if(Array.isArray(data) === false){
                    return;
                }
                const html = data.reduce(function(prev, current){
                    return prev + `<option value="${current.origem}">${current.descricao}</option>`;
                }, '');

                document.getElementById('origem').innerHTML = html;
                document.getElementById('destino').innerHTML = html;
        })
        .catch(function(err){
            console.error('Falha na recuperação do DDD', err);
        });
    }

    importarPlano(){

        const URL_PLANO = '/plano';
        fetch(URL_PLANO, {
            method: 'get'
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let verificaTempo = document.getElementById('tempo').value;
            if(Array.isArray === false || verificaTempo === ''){
                return alert('Preencha o campo tempo');
            }

            let selectOrigem = document.getElementById('origem');
            let currentOrigem = selectOrigem.options[selectOrigem.selectedIndex];
            let selectDestino = document.getElementById('destino');
            let currentDestino = selectDestino.options[selectDestino.selectedIndex];

            let valorTarifa;

            if(currentOrigem.value == "11" && currentDestino.value == "16" ){
                valorTarifa = 1.90;
            }
            else if(currentOrigem.value == "16" && currentDestino.value == "11" ){
                valorTarifa = 2.90;
            }
            else if(currentOrigem.value == "11" && currentDestino.value == "17" ){
                valorTarifa = 1.70;
            }
            else if(currentOrigem.value == "17" && currentDestino.value == "11" ){
                valorTarifa = 2.70;
            }
            else if(currentOrigem.value == "11" && currentDestino.value == "18" ){
                valorTarifa = 0.90;
            }
            else if(currentOrigem.value == "18" && currentDestino.value == "11" ){
                valorTarifa = 1.90;
            } else {
                alert('Ligações diretas para essa origem e destino não fazem parte do pacote');
                return false;
            }

            const html = data.reduce(function(prev, current){
                let tempo = verificaTempo - current.tempo;
                let tarifa = valorTarifa + (valorTarifa * 0.1);
                let total =  (tempo * tarifa).toFixed(2);
                if(total < 0){
                    total = 0;
                }
                return prev + `
                <tr>
                    <td>${current.plano}</td>
                    <td>${total}</td>
                </tr>`;
            }, '');

            document.getElementById('plano').innerHTML = html;
            document.getElementById('totalNormal').innerHTML = `
               <td>Normal</td>
               <td>R$ ${verificaTempo * valorTarifa}.00</td> 
            `;
        })
        .catch(function(err){
            console.log('Falha na recuperação do Plano', err);
        })
    }
}