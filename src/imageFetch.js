const fetchNames = async (quantity) => {
    try {
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`, {mode: 'cors'});
        const pokemonData = await responce.json()
        const names = await pokemonData['results'].map(result => result['name']);
        return names
    } catch (error) {
        // Here error handler
    }
}

const fetchImageUrl = async (name) => {
    try {
        const respond = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {mode: 'cors'});
        const pokemonData = await respond.json();
        return pokemonData['sprites']['front_default']
    } catch (error) {
        // Here error handler
    }
}

const fetchExtra = async (extra, initial=0) => {
    const full = initial + extra;

    // Fetch names
    const pokemonNames = await fetchNames(full);

    // Fetch urls
    const imagesUrl = [];
    for (let name of pokemonNames) {
        const url = await fetchImageUrl(name);
        imagesUrl.push(url)
    }

    // Combine in single object
    const extraPokemons = [];
    for (let i = initial; i < full; i++) {
        extraPokemons.push({id: i, name: pokemonNames[i], url: imagesUrl[i]})
    }

    return extraPokemons
}

export { fetchExtra }