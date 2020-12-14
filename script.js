
let lista = []


function adcionar() {
    
    let num = document.getElementById('txtn')
    let valorAdc = document.getElementById('valAdc')
    let res = document.getElementById('res')
    let n = Number(num.value)
    let i = 0    
    lista.push(n)
    let item = document.createElement('option')
    valorAdc.appendChild(item)
    
    
    if(num.value.length == 0){
        window.alert('Adcione um número ')

    }else if(num.value > 100 || num.value <= 0){
        window.alert('Número inválido [ADCIONE UM NÚMERO ENTRE 1 E 100]')
            
    }else{
        res.innerHTML = 'Valor adcionado: '+n

    
    }
    
    
    for( ; i <lista.length ; i++){
      
        item.value = 'valorAdc' +lista
        item.text = 'Valor ' +lista[i]+' adcionado.'    

        //console.log(lista, n, i)
        
    } 

}  

function Finalizar(){

    let item = document.createElement('option')
    let fin = document.getElementById('txtf') 
    let quant = lista.length
    let num = document.getElementById('txtn')
    let n = Number(num.value)

    if(item.length != 0){

        numerosCad.innerHTML = 'Quantidade de números cadastrados: '+quant

        res.innerHTML = ''
        
        var total = lista.reduce(function(total, lista){
            return total + lista;
        }, 0);

        numerosSoma.innerHTML = 'A soma dos números adcionados é: ' +total

        var media = total / lista.length

        numerosMed.innerHTML = 'A média dos números adcionados é: ' +media
    
        var max = lista.reduce(function( a, b ){
            return Math.max(a , b);
        });
    
            numerosMax.innerHTML = 'O maior valor adcionado foi: ' +max
    
    
        var min = lista.reduce(function( a, b){
            return Math.min(a,b);
        });

            numerosMin.innerHTML = 'O maior valor adcionado foi : '+min

    }



    











}


