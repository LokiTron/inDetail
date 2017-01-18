function bar(){
    console.log("bar 1");
}

bar();

//baz(); // Unexpected Token : this will throw an exception as invalid function call

var baz = function(bar){
    
console.log("bar 2");
};

let Drinks = [];

Drinks.push('Beer');
Drinks.push('Vodka');
Drinks.push('Wine');



for( i=0; i<Drinks.length;i++){

    console.log(`The drinks available are ${Drinks}`);
}


//var x = Boolean('true');


