//  looping through some object

var someObject = {
    name: 'Zeljko',
    kind: 'man',
    speaking: function () {
        console.log('Hi Zell, I am ' + someObject.name + ' !');
    },
    car:'vectra'
}


for(var prop in someObject){
    console.log(prop + ': ' + someObject[prop]);
}

// someObject.speaking();