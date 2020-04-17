console.log("BE BETTER THAN YESTERDAY");

let car = {
  make: "Ford",
  model: "Mustang",
  year: 2015,
  color: "red",
};

let shelter_animals = [
  "Kippers",
  "Jack",
  "Gypsy",
  "Angus",
  "Seymour Bouts",
  "Sharky",
];

let mom = {
  age: 63,
  relation: "mom",
  fave_color: "green",
  fave_food: "hot dogs",
};

let dad = {
  age: 63,
  relation: "dad",
  fave_color: "orange",
  fave_food: "pasta",
};

let mary = {
  age: 29,
  relation: "wifey",
  fave_color: "purple",
  fave_food: "mashed potatoes",
};

let quincy = {
  age: "9 months",
  relation: "son",
  fave_color: "aqua",
  fave_food: "cottage cheese",
};

let steve = {
  age: 36,
  relation: "brother",
  fave_color: "yellow",
  fave_food: "el pato",
};

// let family_members = [mom, dad, mary, quincy];
// console.log("family members array", family_members);
// family_members.push(steve);

// let family = {};

// family.family_members = family_members;

const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon",
};

console.log(
  "empire state building dimensions",
  "stories",
  empireStateBuilding.stories,
  "height",
  empireStateBuilding.height,
  "square feet",
  empireStateBuilding.squareFeet,
  "east west length",
  empireStateBuilding.eastWestLength,
  "north south length",
  empireStateBuilding.northSouthLength
);

let address = "address";
let owner = "owner";
let constDate = "constructionDate";
let cost = "cost";
let architect = "architect";

console.log(
  "empire state building additional info",
  empireStateBuilding[address],
  empireStateBuilding[owner],
  empireStateBuilding[constDate],
  empireStateBuilding[cost],
  empireStateBuilding[architect]
);

const nashville_software_school = {
  founded: 2012,
  director: "John Wark",
  instructors: {
    full_time: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
    part_time: ["Zoe", "Nathan"],
  },
  address: "500 Interstate Blvd. S",
};

const part_time = nashville_software_school.instructors.part_time;
const full_time = nashville_software_school.instructors.full_time;

for (let i = 0; i < part_time.length; i++) {
  console.log(part_time[i]);
}

for (let i = 0; i < full_time.length; i++) {
  console.log(full_time[i]);
}

console.log(
  nashville_software_school.instructors.full_time[4],
  nashville_software_school.instructors.part_time[0]
);
