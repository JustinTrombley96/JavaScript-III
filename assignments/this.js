/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This causes the value to be the window/console Object.
* 2. When a function is called by a preceding dot, the object before that dot is "this".
* 3. This is when a constructor is used, a specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JS's call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding


// console.log(this);


// Principle 2
// code example for Implicit Binding


// const monster = {
//     name: "Jerry",
//     age: 34,
//     food: "Humans",
//     dinner: function(){
//         return `${this.name} wants to eat ${this.food}`;
//     }
// }
// console.log(monster.dinner());


// Principle 3
// code example for New Binding

function SuperHero(hero) {
    this.heroGreeting = "I'm here to save the day, ";
    this.hero = hero;
    this.power = function() {
        return(this.heroGreeting + this.hero);
    };

}

const steveRogers = new SuperHero('Tony!');
const tonyStark = new SuperHero('Steve!')

steveRogers.power();
tonyStark.power();

console.log(steveRogers.power());
console.log(tonyStark.power());


// Principle 4
// code example for Explicit Binding


function person(attributes) {
    this.name = attributes,
    this.tagLine = function () {
        return `Hey, my name is ${this.name}`;
    }
}

const Lillian = new person('Lilly');
const Bazill = new person("Bazil");

console.log(Lillian.tagLine());
console.log(Bazill.tagLine());

console.log(Lillian.tagLine.apply(Bazill));
console.log(Bazill.tagLine.apply(Lillian));


