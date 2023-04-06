var xhr = new XMLHttpRequest();
var num = 0;

$("#card").hide();



var paginas = document.getElementsByClassName('page-item');
var elementos = document.getElementsByClassName('dropdown-item');


for(let p = 0; p < paginas.length; p++) {
    var pagina = 1;
    const paginita = paginas[p];
    paginita.addEventListener('click', function(){

        pagina = p+1;
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                var personaje = JSON.parse(xhr.responseText);
        
                   
                    document.getElementById('1').innerHTML = personaje.results[0].name;
                    document.getElementById('2').innerHTML = personaje.results[1].name;
                    document.getElementById('3').innerHTML = personaje.results[2].name;
                    document.getElementById('4').innerHTML = personaje.results[3].name;
                    document.getElementById('5').innerHTML = personaje.results[4].name;
                    document.getElementById('6').innerHTML = personaje.results[5].name;
                    document.getElementById('7').innerHTML = personaje.results[5].name;
                    document.getElementById('8').innerHTML = personaje.results[7].name;
                    document.getElementById('9').innerHTML = personaje.results[8].name;
                    document.getElementById('10').innerHTML = personaje.results[9].name;
                    document.getElementById('11').innerHTML = personaje.results[10].name;
                    document.getElementById('12').innerHTML = personaje.results[11].name;
                    document.getElementById('13').innerHTML = personaje.results[12].name;
                    document.getElementById('14').innerHTML = personaje.results[13].name;
                    document.getElementById('15').innerHTML = personaje.results[14].name;
                    document.getElementById('16').innerHTML = personaje.results[15].name;
                    document.getElementById('17').innerHTML = personaje.results[16].name;
                    document.getElementById('18').innerHTML = personaje.results[17].name;
                    document.getElementById('19').innerHTML = personaje.results[18].name;
                    document.getElementById('20').innerHTML = personaje.results[19].name;

            }   
        };
        xhr.open('GET', 'https://rickandmortyapi.com/api/character?page='+pagina);
        xhr.send();

    })
    
};

for(let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
       elemento.addEventListener("click", function(){
        num = i;
        xhr.open('GET', 'https://rickandmortyapi.com/api/character?page='+pagina);
        xhr.send();
        $("#card").fadeIn();

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                var personaje = JSON.parse(xhr.responseText);
        
                    document.getElementById('image').innerHTML = '<img src="'+personaje.results[num].image+'" class="card-img-top" alt="...">';
                    document.getElementById('name').innerHTML = 'Nombre: '+personaje.results[num].name;
                    document.getElementById('status').innerHTML = 'Estado: '+personaje.results[num].status;
                    document.getElementById('species').innerHTML = 'Especie: '+personaje.results[num].species;
                    document.getElementById('origin').innerHTML = 'Origen: '+personaje.results[num].origin.name;
                    document.getElementById('location').innerHTML = 'Ubicación actual: '+personaje.results[num].location.name;            
                    
                    console.log(personaje);
            }   
        };

    })
};



