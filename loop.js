// initialization, conditions, activity, inc/dec
// while, for, do while

const all_data = ["Hello batch 16.", 3, 8, "text"];

function whileLoop(data) {
  let i = 0;
  while (i < data.length) {
    console.log(data[i]);
    i++;
  }
}

whileLoop(all_data);
