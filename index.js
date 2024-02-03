// #### Open `index.js` and do the following:

// You have a file named `data.js` that contains the data that is accessible to you using name `got`.

// 1. Function to count total number of people

const func =require("../gamebyloops/data");


function countAllPeople() {
    let totalCountnopeople = 0;
    for (let i = 0; i < func.houses.length; i++) {
      totalCountnopeople += func.houses[i].people.length;
    }
    return totalCountnopeople;
  }
  
  console.log(countAllPeople());
  
  
//   // 2. Function to count total number of people in different houses
  function peopleByHouses() {
    const totalnumberofpeople = {};
    for (let i = 0; i < func.houses.length; i++) {
      const house = func.houses[i];
     totalnumberofpeople[house.name] = house.people.length;
    }
    return totalnumberofpeople;
  }
  
  console.log(peopleByHouses());
  
  
//   // 3. Function to get array of names of all people

  function everyone() {
    const namesallPeople = [];
    for (let i = 0; i < func.houses.length; i++) {
      const house = func.houses[i];
      for (let j = 0; j < house.people.length; j++) {
        namesallPeople.push(house.people[j].name);
      }
    }
    return namesallPeople;
  }

//   // 4. Function to get array of names of people whose name includes 's' or 'S'


function nameWithS() {
    const allPeople = everyone();
    const namesWithS = [];
    for (let i = 0; i < allPeople.length; i++) {
      const name = allPeople[i];
      if (name.toLowerCase().includes('s')) {
        namesWithS.push(name);
      }
    }
    return namesWithS;
  }
  
  console.log(nameWithS());
  
  
//   // 5. Function to get array of names of people whose name includes 'a' or 'A'
  function nameWithA() {
    const allPeople = everyone();
    const namesWithA = [];
    for (let i = 0; i < allPeople.length; i++) {
      const name = allPeople[i];
      if (name.toLowerCase().includes('a')) {
        namesWithA.push(name);
      }
    }
    return namesWithA;
  }
  
  console.log(nameWithA());

  // 6. Function to get array of names of people whose surname starts with 'S'
function surnameWithS() {
    const allPeople = everyone();
    const surnamesWithS = [];
    for (let i = 0; i < allPeople.length; i++) {
      const surname = allPeople[i].split(' ')[1];
      if (surname && surname.startsWith('S')) {
        surnamesWithS.push(allPeople[i]);
      }
    }
    return surnamesWithS;
  }
  console.log(surnameWithS());
  // 7. Function to get array of names of people whose surname starts with 'A'
  function surnameWithA() {
    const allPeople = everyone();
    const surnamesWithA = [];
    for (let i = 0; i < allPeople.length; i++) {
      const surname = allPeople[i].split(' ')[1];
      if (surname && surname.startsWith('A')) {
        surnamesWithA.push(allPeople[i]);
      }
    }
    return surnamesWithA;
  }
  console.log(surnameWithA());

// 8. Function to get object with names of all people grouped by house

  function peopleNameOfAllHouses() {
    const peopleByHouse = {};
    for (let i = 0; i < func.houses.length; i++) {
      const house = func.houses[i];
      const peopleInHouse = [];
      for (let j = 0; j < house.people.length; j++) {
        peopleInHouse.push(house.people[j].name);
      }
      peopleByHouse[house.name] = peopleInHouse;
    }
    return peopleByHouse;
  }
  
  console.log(peopleNameOfAllHouses());
  
  