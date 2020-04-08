let sayHello = (name) => console.log('Hi ' + name); 


sayHello('Lena');

let sayHello1 = (name, age) => console.log('Hi ' + name + ' you ' + age + ' age old'); 


sayHello1('Lena', 13);

let sayHello2 = () => console.log('Hi whatever' ); 


sayHello2();



let sayHello3 = (name) => {
  let wrongValue = (name) => {
    return (!name) ? false : name;
  };
  if(wrongValue(name) === false) {
    console.log('You entered invalid value !!!');
  }
  else {
    console.log('Hi ' + wrongValue(name) + ', how are you?');
  }
}
sayHello3('');


const sayHello_5 = (name, time = 'Hi') => {
  let greetings;
  if (time === 'morning') {
    greetings = 'Good Morning';
  } else if (time === 'afternoon') {
    greetings = 'Good Afternoon'
  } else if (time === 'evening') {
    greetings = 'Good Evening'
  }
  console.log (greetings + ' ' + name);
}
sayHello_5('Bob', 'morning');




const checkInput  = (difoltPozdrav, ...str) => {
  if(str.length > 0) {
    console.log('Hi ' + str + ' !!!');
  }
  else {
    difoltPozdrav();
  };
}

  const svimaPozdrav = () => {
    console.log('Pozdrav svima !!!');
  };

  checkInput(svimaPozdrav, 'Djoka', 'Moka', 'Joka', 'Milena', 'Miljkana');
  checkInput(svimaPozdrav, 'Mika', 'Mikica', 'Jika', 'Milan', 'Miljko');
  checkInput(svimaPozdrav);

