// initialization, conditions, activity, inc/dec
// while, for, do while
const all_data = ["Hello batch 16.", 3, 8, "text"];

function forLoop(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i], i);
  }
}

forLoop(all_data);
