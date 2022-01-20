let pokemonRepository = (function () {
  let pokemonList = [
    { myName: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },

    { myName: 'Charmander', height: 0.6, type: ['fire.'] },

    { myName: 'Beedrill', height: 1.0, type: ['bug', 'poison'] },
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem (pokemon){
    let superPokey = document.querySelector ('.pokemon-list');
    let listItem = document.createElement ('li');
    let button = document.createElement ('button');
    button.innerText = pokemon.myName;
    button.classList.add ('prettyButton');
    listItem.appendChild (button);
    superPokey.appendChild (listItem);
    button.addEventListener ('click', function (showDetails) {
      console.log (pokemon.myName);
    });
  }

  function showDetails(pokemon){
    console.log (pokemon.myName);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  
pokemonRepository.addListItem (pokemon);




  
  


});
