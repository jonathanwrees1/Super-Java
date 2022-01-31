//IIFE Start//
let pokemonRepository = (function () {
  let modalContainer = document.querySelector('#modal-container');

  //3 parameters
  function showModal(title, text, imageUrl) {
    //clear existing modal content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    //add the new content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    //pokemon name
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    //pokemon height
    let contentElement = document.createElement('p');
    contentElement.innerText = text;
    //pokemon sprite added
    let imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.classList.add('image-element');

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    //pokemon sprite added to modal
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  //Closes modal when you hit the esc key
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Closes modal when you click outside of it
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  let pokemonList = [];
  //external site we get the pokemon info from
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  //add pokemon to end of list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  //return entire list
  function getAll() {
    return pokemonList;
  }
  //function to turn list items into buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('prettyButton');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    //listener so details are shown when button is clicked
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    //grabs list from site
    return (
      fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        //translates from json
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        })
    );
  }
  //selects details of each pokemon including sprite from external site
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //displays all details in the modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
    });
  }
  //object keys
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();
//IIFE End

//calling out functions
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
