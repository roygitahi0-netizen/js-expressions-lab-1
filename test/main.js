//Calculating Averagev Temperature in city Of Rome Over 30 Days with each data provided in farneheit and celsius.
//Defining the Temperature Data
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

// Creating variables to represent data listed for each day in both celsius and fahrenheit
day1TempF = 32;
day2TempC = 25;
day3TempF = 70;
day4TempC = 18;
day5TempF = 80;
day6TempC = 15;
day7TempF = 72;
day8TempC = 28;
day9TempF = 68;
day10TempC = 20;
day11TempF = 75;
day12TempC = 23;
day13TempF = 82;    
day14TempC = 30;
day15TempF = 65;
day16TempC = 22;
day17TempF = 77;
day18TempC = 24;
day19TempF = 78;
day20TempC = 21;
day21TempF = 73;
day22TempC = 27;
day23TempF = 79;
day24TempC = 19;
day25TempF = 71;
day26TempC = 26;
day27TempF = 74;
day28TempC = 17;
day29TempF = 76;
day30TempC = 29;

// Data Conversions
const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32));
const fahrenheitTempsToCelsius = fahrenheitTemps.map(temp => ((temp - 32) * 5 / 9));
//Sum of all the temperatures by creating two variables
let tot_temperature_in_fahrenheit = 0;
let tot_temperature_in_celsius = 0;

return tot_temperature_in_fahrenheit = celsiusTempsToFahrenheit.reduce((sum, temp) => sum + temp, 0) + fahrenheitTemps.reduce((sum, temp) => sum + temp, 0);
return tot_temperature_in_celsius = fahrenheitTempsToCelsius.reduce((sum, temp) => sum + temp, 0) + celsiusTemps.reduce((sum, temp) => sum + temp, 0);

// Calculate the average temperature in both fahrenheit and celsius by creating two variables
let avg_temperature_in_fahrenheit = 0;
let avg_temperature_in_celsius = 0;

return avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / (celsiusTemps.length + fahrenheitTemps.length);
return avg_temperature_in_celsius = tot_temperature_in_celsius / (celsiusTemps.length + fahrenheitTemps.length);   

//console.log the results for your own inspection if you'd like
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);
