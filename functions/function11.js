function multiString(rec, brojPuta) {

var nasaRec="";

for (var i=0; i<brojPuta; i++) {

    nasaRec+=rec;
}
return nasaRec;
}

console.log(multiString('Zeljko',3));
