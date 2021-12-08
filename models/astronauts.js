import { deployAstronauts } from '../libs/data.js'


export async function getAstronauts() {
  let astronauts = deployAstronauts();
  return astronauts;
}

export async function createAstronaut(astronaut) {
  let astronauts = deployAstronauts();
  astronauts = [...astronauts, astronaut];
  return astronauts[astronauts.length - 1];
}

export async function getAstronautById(requestId) {
  let astronauts = deployAstronauts();
  const astronaut = astronauts.find(({ id }) => id === requestId);

  if (astronaut) {
    return astronaut;
  }

  throw new Error(`No astronaut with ${requestId} found.`);
}

export async function replaceAstronautById(requestId, astronautReplacement) {
  let astronauts = deployAstronauts();
  const index = astronauts.findIndex(({ id }) => id === requestId);
  astronauts = [
    ...astronauts.slice(0, index),
    astronautReplacement,
    ...astronauts.slice(index + 1),
  ];
  return astronauts[index];
}

export async function deleteAstronautById(requestId) {
  let astronauts = deployAstronauts();
  const index = astronauts.findIndex(({ id }) => id === requestId);
  astronauts = [
    ...astronauts.slice(0, index),
    ...astronauts.slice(index + 1),
  ];

  return astronauts;
}

export async function updateAstronautById(requestId, updates) {
  let astronauts = deployAstronauts();
  const index = astronauts.findIndex(({ id }) => id === requestId);

  if (index) {
    let updatedAstronaut = astronauts[index];

    Object.keys(updatedAstronaut).map((key) => {
      if (Object.keys(updates).includes(key)) {
        updatedAstronaut[key] = updates[key];
      }
    });

    astronauts = [
      ...astronauts.slice(0, index),
      updatedAstronaut,
      ...astronauts.slice(index + 1),
    ];

    return astronauts[index];
  }
}

export async function getAstronautsByName(search) {
  let astronauts = deployAstronauts();
  let searchResults = astronauts.filter( //filter list of astronauts by first name
    ({ firstName }) => // extracting the key from the object using fancy destructuring syntax === element.firstName
    firstName.toLowerCase().includes(search.toLowerCase())
  );

  searchResults = searchResults.filter( //now filter the list again by last names
    ({ lastName }) =>
    lastName.toLowerCase().includes(search.toLowerCase())
  ) 

  return searchResults;
}
