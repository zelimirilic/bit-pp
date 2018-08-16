

function pozdrav(nestoKaze) {

    return function(name) {

        return function(staRadi) {
            console.log(nestoKaze + ' ' + name + ' ' + staRadi);
        }
    }
}

pozdrav('Ćao')('Pile')('Pevaš ?')
