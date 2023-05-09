async function getStarshipModelByCharacterId(id) {

    const peopleResponse = await fetch('https://swapi.dev/api/people/' + id);
    const peopleData = await peopleResponse.json();

    const starshipUrls = peopleData.starships;

    const result = [];

    for(let i = 0; i < starshipUrls.length; i ++) {
        const starshipResponse = await fetch(starshipUrls[i]);
        const starshipData = await starshipResponse.json();
    
        result.push(starshipData.model);
    }

    return result;
    
}

getStarshipModelByCharacterId(1)
.then(result => console.log(result))
.catch(err => console.log(err));
