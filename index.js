//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work
//Define Temperature Data
const day1OfTempF = 32;
const day2OfTempc = 25;
const day3OfTempF = 70;
const day4OfTempc = 18;
const day5OfTempF = 80;
const day6OfTempc = 15;
const day7OfTempF = 72;
const day8OfTempc = 28;
const day9OfTempF = 68;
const day10OfTempc = 20;
const day11OfTempF = 75;
const day12OfTempc = 23;
const day13OfTempF = 82;
const day14OfTempc = 30;
const day15OfTempF = 65;
const day16OfTempc = 22;
const day17OfTempF = 77;
const day18OfTempc = 24;
const day19OfTempF = 78;
const day20OfTempc = 21;
const day21OfTempF = 73;
const day22OfTempc = 27;
const day23OfTempF = 79;
const day24OfTempc = 19;
const day25OfTempF = 71;
const day26OfTempc = 26;
const day27OfTempF = 74;
const day28OfTempc = 17;
const day29OfTempF = 76;
const day30OfTempc = 29;

//! Step 2: Calculate Totals
// Convert Celsius to Fahrenheit and sum up all temperatures in Fahrenheit
let tot_temperature_in_fahrenheit =
    day1OfTempF + day3OfTempF + day5OfTempF + day7OfTempF + day9OfTempF + day11OfTempF + day13OfTempF + day15OfTempF + day17OfTempF + day19OfTempF + day21OfTempF + day23OfTempF + day25OfTempF + day27OfTempF + day29OfTempF +
    //converted celcius to fahrenheit
    ((day2OfTempc * 9 / 5) + 32) + ((day4OfTempc * 9 / 5) + 32) + ((day6OfTempc * 9 / 5) + 32) + ((day8OfTempc * 9 / 5) + 32) + ((day10OfTempc * 9 / 5) + 32) + ((day12OfTempc * 9 / 5) + 32) + ((day14OfTempc * 9 / 5) + 32) + ((day16OfTempc * 9 / 5) + 32) + ((day18OfTempc * 9 / 5) + 32) + ((day20OfTempc * 9 / 5) + 32) + ((day22OfTempc * 9 / 5) + 32) + ((day24OfTempc * 9 / 5) + 32) + ((day26OfTempc * 9 / 5) + 32) + ((day28OfTempc * 9 / 5) + 32) + ((day30OfTempc * 9 / 5) + 32);

    let tot_temperature_in_celsius =
    day2OfTempc + day4OfTempc + day6OfTempc + day8OfTempc + day10OfTempc + day12OfTempc + day14OfTempc + day16OfTempc + day18OfTempc + day20OfTempc + day22OfTempc + day24OfTempc + day26OfTempc + day28OfTempc + day30OfTempc +
    //converted fahrenheit to celcius
    ((day1OfTempF - 32) * 5 / 9) + ((day3OfTempF - 32) * 5 / 9) + ((day5OfTempF - 32) * 5 / 9) + ((day7OfTempF - 32) * 5 / 9) + ((day9OfTempF - 32) * 5 / 9) + ((day11OfTempF - 32) * 5 / 9) + ((day13OfTempF - 32) * 5 / 9) + ((day15OfTempF - 32) * 5 / 9) + ((day17OfTempF - 32) * 5 / 9) + ((day19OfTempF - 32) * 5 / 9) + ((day21OfTempF - 32) * 5 / 9) + ((day23OfTempF - 32) * 5 / 9) + ((day25OfTempF - 32) * 5 / 9) + ((day27OfTempF - 32) * 5 / 9) + ((day29OfTempF - 32) * 5 / 9);
    
//! Step 3: Convert Totals Before Calculating Averages
let convertedTotFtoc = (tot_temperature_in_fahrenheit - (32 * 15)) * 5 / 9;
let convertedTotCtof = (tot_temperature_in_celsius * 9 / 5) + (32 * 15);

console.log("Total Fahrenheit converted to Celsius: " , convertedTotFtoc);
console.log("Total Celsius converted to Fahrenheit: " , convertedTotCtof);

//! Step 4: Calculate Averages(after conversion)
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
console.log("Average Fahrenheit: " , avg_temperature_in_fahrenheit);
console.log("Average Celsius: " , avg_temperature_in_celsius);

//! Step 5: Export Variables
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};


