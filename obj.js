
var Ribka = { name: "John",
    gender: "male",
    birthday: "2020-01-01" };
  Ribka.age = 4;
  delete Ribka.birthday;
  console.log(Ribka);
var Ribka = {
    name: "John",
    age: 4,
    setAge: function(newAge) {
      this.age = newAge;
    },
    getYearsBeforeRetirement: function() {
      var yearsLeft = 10 - this.age;
      if (yearsLeft > 0) {
        return yearsLeft;
      } else {
        return "Already retired";
      }
    }
  };
  console.log("Текущий возраст: " + Ribka.age);
  Ribka.setAge(10);
  console.log("Пенсия: " + Ribka.age);
  console.log("Лет до пенсии: " + Ribka.getYearsBeforeRetirement());
  
  