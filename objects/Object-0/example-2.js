function factory(name) {	 
    return {
           name: name
       };
    }
    
    var o = factory('one');
    console.log(o.name); 
    console.log(typeof o);
    console.log(o instanceof factory);
    console.log(o instanceof Object);

    var u = new factory('uno');
    console.log(u.name); 
    console.log(typeof u);
    console.log(u instanceof factory);
    console.log(u instanceof Object);