let chart;

async function loadNames(){
    const name = document.getElementById("name").value

    if(!name){
        alert("VC NÃO DIGITOU UM NOME !!!")
        return;
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name.toUpperCase()}`);
    const dados = await response.json();
    
    console.log(dados)

    const registro = dados[0].res;
    const vetorDecadas = registro.map((item) => item.periodo.replace(/[^0-9]/g, "").substring(4,9));
    const vetorValores = registro.map((item) => item.frequencia);
    
    if(chart){
        chart.destroy();
    }
    
    
    const ctx = document.getElementById("chart");

    chart = new Chart(ctx,{
        type: 'line',
        data: {
            labels: vetorDecadas,
            datasets: [{
                label: `Frequencia do nome ${name} por decada`,
                data: vetorValores,
                
            }]
        }
    })
    




}


// const vetorDecadas = []
// const vetorValores = []

// for(var i =0; i < registro.length; i++){
//     vetorDecadas.push(registro[i].periodo)
//     vetorValores.push(registro[i].frequencia)
// }
