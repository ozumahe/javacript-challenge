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
