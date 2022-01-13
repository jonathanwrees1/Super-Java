let pokemonList = [
  { myName: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },

  { myName: 'Charmander', height: 0.6, type: ['fire.'] },

  { myName: 'Beedrill', height: 1.0, type: ['bug', 'poison'] },
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 0.7) {
    document.write(
      pokemonList[i].myName +
        ' (height: ' +
        pokemonList[i].height +
        'm) - ' +
        'Wow, that\'s big!' +
        '<br /><br />'
    );
  } else
    document.write(
      pokemonList[i].myName +
        ' (height: ' +
        pokemonList[i].height +
        'm)' +
        '<br /><br />'
    );
}
