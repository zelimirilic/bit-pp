//  call method from object

var someObject = {
    name: 'Zeljko',
    kind: 'man',
    speaking: function () {
        console.log('Hi Zell, I am ' + someObject.name + ' !');
    }
}

someObject.speaking();
