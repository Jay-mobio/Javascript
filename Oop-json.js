const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  let myString = JSON.stringify(person);
  document.getElementById("demo").innerHTML = JSON.stringify(person);myString