var person = {
    name:'Zeljko',
    aktivity: ['skiing', 'swimming', 'walking', 'reading'],
    printActivity: function() {
        this.aktivity.forEach(function(action){
            var str = this.name + ' like to ' + action;
            console.log(str);
        }.bind(this));
    }
    }
person.printActivity();
console.log('______________');

// OR 

var person = {
    name:'Snow White',
    aktivity: ['skiing', 'swimming', 'walking', 'reading'],
    printActivity() {
        this.aktivity.forEach(action => { 
            let str = this.name + ' like to ' + action;
            console.log(str);
        });
    }
    }
person.printActivity();