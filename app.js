// Import fs module to fs const
const fs = require('fs');

// Prepare arrays with data necessary for each identity
const genders = ['M', 'F'];
const maleNames = ['Antoni', 'Jan', 'Jakub', 'Aleksander', 'Franciszek', 'Szymon', 'Filip', 'Mikołaj', 'Stanisław', 'Wojciech'];
const femaleNames = ['Julia', 'Zuzanna', 'Zofia', 'Hanna', 'Maja', 'Lena', 'Alicja', 'Oliwia', 'Maria', 'Laura'];
const lastNames = ['Nowak', 'Wójcik', 'Kowalczyk', 'Woźniak', 'Mazur', 'Krawczyk', 'Kaczmarek', 'Zając', 'Król', 'Wieczorek'];

// Create function getting random element from the array
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Create empty array
const people = [];

// Create the loop with 20 iterations
for (let i = 0; i < 20; i++) {

  // Create new object
  const identity = {};
}