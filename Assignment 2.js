//Task 1
function createCounter(){
	let count= 0;
	return{
		increment: function(){
			count += 1;
			return count;
		},
		decrement: function() {
			count -= 1;
			return count;
		}
		
	};
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());


//Task 2
const numbers = [1, 2, 3, 4, 5];
const multiply = numbers.map(numbers => `${numbers * 3}`);
console.log(multiply);

//Task 3
const numbers2 = [10, 15, 20, 25, 30];
const newnumbers = numbers2.filter(numbers2=> numbers2 > 20);
console.log(newnumbers);

//Task 4
function runTwice(action, times){
	for (let i=0; i<times; i++){
		action();
	}
}

runTwice(() => console.log("Hello Bolu!"), 2);