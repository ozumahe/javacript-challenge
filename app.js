/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
*/
function humanReadable(seconds) {
  const hours = seconds / 3600;
  const minutes = (seconds / 60) % 60;
  const newSeconds = seconds % 60;

  return (
    formatDate(hours) + ":" + formatDate(minutes) + ":" + formatDate(newSeconds)
  );
}

function formatDate(n) {
  var number = Number.parseInt(n);
  return number > 9 ? number : "0" + number;
}

// console.log(humanReadable(383799));

/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// console.log(nearestSq(117)); // 121
// console.log(nearestSq(900)); // 900
// console.log(nearestSq(15)); // 16
