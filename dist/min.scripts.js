let pokemonRepository = (function () {
  let t = [],
    e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(e) {
    t.push(e);
  }
  function o(t) {
    let e = t.detailsUrl;
    return fetch(e)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types);
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  function i(t) {
    o(t).then(function () {
      !(function (t) {
        let e = $('.modal-body'),
          n = $('.modal-title');
        n.empty(), e.empty();
        let o = $('<h1>' + t.name + '</h1>'),
          i = $('<img class="modal-img"/>');
        i.attr('src', t.imageUrl);
        let a = $('<p>height : ' + t.height + '</p>');
        n.append(o), e.append(i), e.append(a);
      })(t),
        $('#exampleModal').modal('show');
    });
  }
  return {
    add: n,
    getAll: function () {
      return t;
    },
    addListItem: function (t) {
      let e = document.querySelector('.list-group'),
        n = document.createElement('li');
      n.classList.add('list-group-item');
      let o = document.createElement('button');
      (o.innerText = t.name),
        o.classList.add('btn'),
        o.classList.add('btn-primary'),
        o.setAttribute('data-target', '#exampleModal'),
        o.setAttribute('data-toggle', 'modal'),
        n.appendChild(o),
        e.appendChild(n),
        o.addEventListener('click', function () {
          i(t);
        });
    },
    loadList: function () {
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            n({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: o,
    showDetails: i,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
