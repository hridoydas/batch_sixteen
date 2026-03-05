const all_data = ["Hello batch 16.", 3, 8, "text"];

// function loopTest(data) {
//   for (let index in data) {
//     console.log(data[index]);
//   }
// }

function loopTest(data) {
  data.forEach((test, abcd) => {
    console.log(test, abcd);
  });
}

loopTest(all_data);
