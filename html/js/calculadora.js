function pegarValor(){ 
    const nomeProd = document.getElementById("produto");
    const numerVal = document.getElementById("valor");
    const percentual= document.getElementById("porcento");
    calcular(nomeProd.value, numerVal.value, percentual.value);
    }
    
    function calcular(prod, val, por){
        const valDesc = (por * val) / 100
        const valFin= val - valDesc
        const prodRes= document.getElementById("nomeProdRes")
        prodRes.value= prod;
        const valDesRes= document.getElementById("valOgEs")
        valDesRes.value = val;
        const valFinRes= document.getElementById("valFinal")
        valFinRes.value = valFin;
        
     
    
    }
    function limpar(){
        document.getElementById('produto').value=null;
        document.getElementById('valor').value = null;
        document.getElementById('porcento').value = null;
    }