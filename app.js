// Import fs module to fs const
const fs = require('fs');

// Prepare arrays with data necessary for each identity
const genders = ['M', 'F'];
const maleNames = ['Antoni', 'Jan', 'Jakub', 'Aleksander', 'Franciszek', 'Szymon', 'Filip', 'Mikołaj', 'Stanisław', 'Wojciech'];
const femaleNames = ['Julia', 'Zuzanna', 'Zofia', 'Hanna', 'Maja', 'Lena', 'Alicja', 'Oliwia', 'Maria', 'Laura'];
const lastNames = ['Nowak', 'Wójcik', 'Kowalczyk', 'Woźniak', 'Mazur', 'Krawczyk', 'Kaczmarek', 'Zając', 'Król', 'Wieczorek'];
const ageMin = 18;
const ageMax = 78;

// Create function getting random element from the array
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Create empty array
const people = [];

// Create the loop with 20 iterations
for (let i = 0; i < 20; i++) {

  // Create new object
  const identity = {};

  // Draw the gender and add to the object as the gender atribute
  identity.gender = randChoice(genders);

  // According to the drawn gender draw the name from the correct names array and add to the object
  if (identity.gender == 'M') {
    identity.firstName = randChoice(maleNames);
  } else {
    identity.firstName = randChoice(femaleNames);
  }

  // Draw the surname from lastNames array and add to the object
  identity.lastName = randChoice(lastNames);

  // Draw the age and add to the object
  identity.age = Math.floor(Math.random() * (ageMax - ageMin + 1)) + ageMin;

  // Generate phone number (always 9 random digits)
  identity.phone = Math.floor(100000000 + Math.random() * 900000000);

  // Generate e-mail (according to the pattern "firstName.lastName@gmail.com")
  identity.email = identity.firstName.toLowerCase() + '.' + identity.lastName.toLowerCase() + '@gmail.com';

  // Add identity to people array
  people.push(identity);
}

// Convert people array to JSON
const peopleJSON = JSON.stringify(people);

// Save JSON to file
fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw Error('Something went wrong');
  console.log('File has been successfully generated! Check people.json');
});