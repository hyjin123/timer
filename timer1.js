const args = process.argv.slice(2);

const timer = (args) => {
  // if no numbers are provided, it should not beep at all
  if (args.length === 0) {
    return;
  }
  // loop through the args array, which is the user input
  for (let item of args) {
    //convert item from string to number
    item = Number(item);
    // if input is a negative number, ignore and skip it
    // if input is not a number, ignore and skip it
    if (item > 0 && Number.isInteger(item)) {
      // make a beep sound based on the time given, multiply time by 1000 to get seconds
      setTimeout(() => {
        console.log("beep");
      }, item * 1000)
    }
  }
};

timer(args);

// to make a beep sound in console
// process.stdout.write('\x07');