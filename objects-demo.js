//creating object constructor

var e = new Object();
e.name = "Ganesh"
e.age = 27

console.log("Object created by object class ")
console.log(e);

//creating with object initializer
var emp = { firstName: "ganesh",
            lastName: "anthati",
            fullName: function(){
                return this.firstName + ' ' + this.lastName
            }
    }

console.log(emp);

// creating with constructor function
function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
    this.fullName = function(){
        return firstName + ' '+lastName;
    }
}

var e1 = new Employee("Ganesh", "anthati");
var e2 = new Employee("Jay", "raj")
Employee.prototype.status = "active"

console.log("Object 1")
console.log(e1)


console.log("Object 2")
console.log(e2)

//we add dynamic properties to object as showing
e1.age = 25;
console.log(e1); //you should be able to see age property also on the e1 object


showProps(e1);
function showProps(obj) {
    var result = '';
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        console.log(i)
      }
    }
    console.log("including prototype functions")
    for (var i in obj) {
          console.log(i)
      }
}

//comparing objects
var e3 = new Employee("ganesh", "anthati");
var e4 = new Employee("ganesh", "anthati");
e5=e4;

console.log("Object comparision  e3, e4");
console.log(e3==e4);


console.log("Object comparision  e4, e5");
console.log(e5==e4);

e5.firstName="ramesh";
//e4 and e5 are connected by referefcen so when we update e5, e4 is also getting updated.
console.log(e4);

String.prototype.replaceGanesh = function()
{
    return this.replace("ganesh", "ramesh");
}

var str = "ganesh is a good guy";
console.log(str.replaceGanesh());