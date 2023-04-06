var xhr = new XMLHttpRequest();
var num = 0;
$("#card").hide();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        var personaje = JSON.parse(xhr.responseText);

            document.getElementById('image').innerHTML = '<img src="'+personaje.results[num].image+'" class="card-img-top" alt="...">';
            document.getElementById('name').innerHTML = 'Nombre: '+personaje.results[num].name;
            document.getElementById('status').innerHTML = 'Estado: '+personaje.results[num].status;
            document.getElementById('species').innerHTML = 'Especie: '+personaje.results[num].species;
            document.getElementById('type').innerHTML = 'Tipo: '+personaje.results[num].type;
            console.log(personaje);
    }   
};







var elementos = document.getElementsByClassName('dropdown-item');

for(let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
       elemento.addEventListener("click", function(){
        num = i;
        xhr.open('GET', 'https://rickandmortyapi.com/api/character');
        xhr.send();
        $("#card").fadeIn();
    })
};
