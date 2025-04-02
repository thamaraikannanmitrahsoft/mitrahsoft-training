const input = "George Raymond Richard Martin";
abbrevatedInput = input.split(" ").map((word) => word[0]).join("");
console.log(abbrevatedInput)