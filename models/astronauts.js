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

  //because the URL path is /astronauts?name=<name> it's ambiguous what the actual format is, going to assume it is always "Firstname Lastname"
  //e.g. the request will be http://localhost:5000/astronauts/?name=Gary+Baldwick
  
  console.log(search); // { name: 'Gary Baldwick' }

  let name = search.name.split(" "); //returns an array of ["Firstname", "Lastname"]
  let surname = name[1]; //assigning second element to new surname variable
  name = name[0]; //reassigning first element to name
  
  console.log(`Name is: ${name} ${surname}`);

  let searchResults = astronauts.filter( //filter list of astronauts by first name

    function({ firstName }) { // extracting the key from the object using fancy destructuring syntax, same as element.firstName
      return firstName.toLowerCase().includes(name.toLowerCase());
    }

  );  //we now have a list where the first names match
  
  console.log(`Array after filtering first names: ${searchResults}`);

  searchResults = searchResults.filter( //now filter the list again by last names
    ({ lastName }) =>
    lastName.toLowerCase().includes(surname.toLowerCase())
  ); //we now have a list where both first and last names match

  console.log(`Array after filtering second names: ${searchResults}`);

  //error handling
  if (Object.keys(searchResults).length === 0) { //if object is empty
    return `No astronaut named ${name} ${surname} found.`;
  }
  
  return searchResults;
}
