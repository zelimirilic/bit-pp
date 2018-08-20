

function tellMeWhenDone(nekiPovratniPoziv) {
    
    //var a = 1000;
    //var b = 2000;
    
    nekiPovratniPoziv();
}

tellMeWhenDone(function () {
    console.log('Gotovo na konzoli!');
})

tellMeWhenDone(function () {
    console.log('Gotovo skroz!');
})
