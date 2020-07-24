var MyGlobal = "Global variable";

function myFunction() {
    var MyLocal = "Local variable";
    console.log(MyGlobal);
    console.log(MyLocal);
}
myFunction();

function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined


function outerFunction () {
    const outer = `I'm the outer function!`
  
    function innerFunction() {
      const inner = `I'm the inner function!`
      console.log(outer) // I'm the outer function!
    }
  
    console.log(inner) // Error, inner is not defined
  }


  function sayHello () {
    const hello = 'Hello!'
    console.log(hello)
  }
  
  sayHello() // 'Hello!'
  console.log(hello) // Error, hello is not defined


  function outerFunction () {
    const outer = `I see the outer variable!`
  
    function innerFunction() {
      console.log(outer)
    }
  
    return innerFunction
  }
  
  outerFunction()() // I see the outer variable!

  
  function makeCake() {
    setTimeout(_ => console.log(`Made a cake`), 1000)
  }


  function makeCake(flavor) {
    setTimeout(_ => console.log(`Made a ${flavor} cake!`), 1000)
  }


  makeCake('banana')
// Made a banana cake!

function prepareCake (flavor) {
  return function () {
    setTimeout(_ => console.log(`Made a ${flavor} cake!`), 1000)
  }
}

const makeCakeLater = prepareCake('banana')

// And later in your code...
makeCakeLater()
// Made a banana cake!

function secret (secretCode) {
  return {
    saySecretCode () {
      console.log(secretCode)
    }
  }
}

const theSecret = secret('Hello')
theSecret.saySecretCode()
// 'Hello'

