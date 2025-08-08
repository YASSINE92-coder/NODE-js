const cities = require('./weather');
const fs = require('fs');

// Creating a new file
// Reading a file
function RetrieveData(){
 fs.readFile('input.txt', 'utf8', async (err, cityName) => {
  if (err){  
    console.error('Error reading file:', err);
    return;
  } else {
    cityName = cityName.trim(); // Remove newline or extra spaces
    console.log('the city name is :', cityName);
    const matchedCity = cities.find(city => city.name === cityName);
  if(matchedCity){
     console.log(`here is ${cityName} data :`, matchedCity)
     try{
       const response =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${matchedCity.lat}&longitude=${matchedCity.lng}&current_weather=true`);
       const citieData =  await response.json();
       //console.log('Data:', data); 
       fs.appendFile('cityname.txt', ` \n ${JSON.stringify(citieData)}`, (err) => {
         if (err) { 
           console.error('Error updating file:', err);
         } else {
           console.log('File updated successfully.' ,citieData);
         }
       })
     }catch (apiError){
       console.error("Error fetching weather data:",apiError)
     }
   } else {
     console.log(`the City named ${cityName} is not found`)
   }
 }
})
};
RetrieveData()
/* function selectRandomCity(cities) {
  let randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
} */
//console.log(cities[0].name)
// Updating a file

/*
// Deleting a file
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully.');
  }
});
 */