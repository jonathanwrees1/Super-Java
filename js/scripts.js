let pokemonList = [
  { myName: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },

  { myName: 'Charmander', height: 0.6, type: ['fire.'] },

  { myName: 'Beedrill', height: 1.0, type: ['bug', 'poison'] },
];
pokemonList.forEach (function(trait) {
  if (trait.height > 0.7) {
    document.write(
      trait.myName +
        ' (height: ' +
        trait.height +
        'm) - ' +
        'Wow, that\'s big!' +
        '<br /><br />'
    );
  } else
    document.write(
      trait.myName +
        ' (height: ' +
        trait.height +
        'm)' +
        '<br /><br />'
    );
});


