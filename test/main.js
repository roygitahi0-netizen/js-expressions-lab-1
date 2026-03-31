// Fahrenheit
const day1TempF = 32;
const day3TempF = 70;
const day5TempF = 80;
const day7TempF = 72;
const day9TempF = 68;
const day11TempF = 75;
const day13TempF = 82;
const day15TempF = 65;
const day17TempF = 77;
const day19TempF = 78;
const day21TempF = 73;
const day23TempF = 79;
const day25TempF = 71;
const day27TempF = 74;
const day29TempF = 76;

// Celsius
const day2TempC = 25;
const day4TempC = 18;
const day6TempC = 15;
const day8TempC = 28;
const day10TempC = 20;
const day12TempC = 23;
const day14TempC = 30;
const day16TempC = 22;
const day18TempC = 26;
const day20TempC = 24;
const day22TempC = 21;
const day24TempC = 27;
const day26TempC = 19;
const day28TempC = 17;
const day30TempC = 29;

// Convert F → C
const day1C = (day1TempF - 32) * 5 / 9;
const day3C = (day3TempF - 32) * 5 / 9;
const day5C = (day5TempF - 32) * 5 / 9;
const day7C = (day7TempF - 32) * 5 / 9;
const day9C = (day9TempF - 32) * 5 / 9;
const day11C = (day11TempF - 32) * 5 / 9;
const day13C = (day13TempF - 32) * 5 / 9;
const day15C = (day15TempF - 32) * 5 / 9;
const day17C = (day17TempF - 32) * 5 / 9;
const day19C = (day19TempF - 32) * 5 / 9;
const day21C = (day21TempF - 32) * 5 / 9;
const day23C = (day23TempF - 32) * 5 / 9;
const day25C = (day25TempF - 32) * 5 / 9;
const day27C = (day27TempF - 32) * 5 / 9;
const day29C = (day29TempF - 32) * 5 / 9;

// Convert C → F
const day2F = (day2TempC * 9 / 5) + 32;
const day4F = (day4TempC * 9 / 5) + 32;
const day6F = (day6TempC * 9 / 5) + 32;
const day8F = (day8TempC * 9 / 5) + 32;
const day10F = (day10TempC * 9 / 5) + 32;
const day12F = (day12TempC * 9 / 5) + 32;
const day14F = (day14TempC * 9 / 5) + 32;
const day16F = (day16TempC * 9 / 5) + 32;
const day18F = (day18TempC * 9 / 5) + 32;
const day20F = (day20TempC * 9 / 5) + 32;
const day22F = (day22TempC * 9 / 5) + 32;
const day24F = (day24TempC * 9 / 5) + 32;
const day26F = (day26TempC * 9 / 5) + 32;
const day28F = (day28TempC * 9 / 5) + 32;
const day30F = (day30TempC * 9 / 5) + 32;

const tot_temperature_in_celsius =
  day1C + day2TempC + day3C + day4TempC + day5C + day6TempC +
  day7C + day8TempC + day9C + day10TempC + day11C + day12TempC +
  day13C + day14TempC + day15C + day16TempC + day17C + day18TempC +
  day19C + day20TempC + day21C + day22TempC + day23C + day24TempC +
  day25C + day26TempC + day27C + day28TempC + day29C + day30TempC;

const tot_temperature_in_fahrenheit =
  day1TempF + day2F + day3TempF + day4F + day5TempF + day6F +
  day7TempF + day8F + day9TempF + day10F + day11TempF + day12F +
  day13TempF + day14F + day15TempF + day16F + day17TempF + day18F +
  day19TempF + day20F + day21TempF + day22F + day23TempF + day24F +
  day25TempF + day26F + day27TempF + day28F + day29TempF + day30F;

const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};