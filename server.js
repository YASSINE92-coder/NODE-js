const http = require('http');
const url = require('url');
const cities = require('./weather');
const fs = require('fs');
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
       const server = http.createServer((req, res) => {
       const parsedUrl = url.parse(req.url, true);
       const path = parsedUrl.pathname;
        //const query = parsedUrl.query;
            // Inside the request handler
        if (path === '/users') {
            // Handle the '/users' endpoint
          } else if (path === '/weather') {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`the result of the weather search :${JSON.stringify(citieData)}`)
          } else {
            // Handle unknown endpoints
          }
          });
          server.listen(3000, () => {
            console.log('Server is listening on port 3000');
          });
      
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
// Inside the request handler

  
