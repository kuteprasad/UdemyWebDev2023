// we just created a constructor function and it's object.

function HouseKeeper(name, age, height, lang) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.languages = lang;
  this.clean = function () {
    alert("may i clean");
  };
}

var houseKeeper1 = new HouseKeeper("jane", 23, 5, ["English", "French"]);

// console.log(houseKeeper1.name);
// console.log(houseKeeper1.age);
// console.log(houseKeeper1.height);
// console.log(houseKeeper1.languages);
houseKeeper1.clean;
