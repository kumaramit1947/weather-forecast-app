Project Title: Weather Forecast
Purpose: Displays a weather card for the searched city.
Search By: city name
Weather card content: Temperature in Celsius, Weather mood Forecast date and time, Location,
                       Sunset time, Humidity, Atmospheric pressure, Wind speed
Default city: Varanasi
Weather API: https://api.openweathermap.org/

***********************************************************
Technology used: HTML, CSS, Javascript, React.js, JSON, API
Data: fetched from API

***********************************************************
React components: 1. Home.js:
                     -> Contains title, search box and Container.js
                     Parent: App.js
                     Children: Container.js
                     Props used: None 
                  2. Container.js:
                     -> Contains the weather card's inner structure
                     Parent: Home.js
                     Children: None
                     Props used: Weather info object fetched from API , passed by Home.js
React Hooks: useState, useEffect
Method used to fetch data from API: fetch()
Icon used: Font-awesome v5
*******************************************************************
Future updates: 1. Set current location as default city
                2. Use some good and relevant Weather icons
                3. Change the page styling according to the weather mood:
                   Ex: Page should look little blur and smoked , if weather mood is Smog;
                       Sunrays should be seen if wether mood is Sunny;
                       Snowfall , if the weather mood is Snow

********************************************************************
                     




