// цикли
// for  це ключове слово, що означає цикл з лічильником
//let - лічильник
/*
for(let i=100; i >=0; i--){
    if(i%2===0 && i%10 !==0){ // % - залишок від ділення === - рівний 0
    document.write(i + '<br>'); // !==- не дорівнює
    }
}
*/

/*
let i=0;
while(i<100){
document.write(i + '<br>');
i++;
}
*/
/*
let i=0;
do{
    document.write(i + '<br>');
} while(i<100);
*/

// Два способи, коли користувач вводить число:
/*
let num=parseFloat(prompt('Enter number'));
while(Number.isNaN(num)){
alert('You entered not a number!');
 num=parseFloat(prompt('Entere number'));
}
*/
/*
let num;
do{
    if(num !==undefined) {

alert('You entered not a number');
}
    num=parseFloat(prompt('Enter number'));
} while(isNaN(num));
*/

// Масиви

//let products = [];// пустий масив
let products=[ 'Tesla X','Tesla S', 'BMW i3'];
products[3]='Tesla Y';
products[4]='ZAZ Sence';
products[5]='BMW'
products.push('Chevy Corvette','Ford');
products[10]='Toyota Corolla';
console.log(products.length);

// for(let i = 0; i < products.length; i++){
//     console.log(products[i]);
//     if(products[i] !== undefined){
// console.log(products.length);
//     }
// } // не виводить undefined

products.forEach(el => console.log(el)); //-стрілочна функція яка не виводить undefined



function padIt(str,n){
 while(n > 0){
 if( n % 2 == 0){
 str= str +'*';
 }else {
 str= '*' + str;
 }
  n--;
 }
 return str;
 }

//  split - робить масив
// ..ю розкладає масив по елементах