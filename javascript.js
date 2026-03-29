function alertsection(){
alert("welcome to try alert")
var a= true ;
var done = confirm("pengulangan?") ;
if (done == true){
    pengulangan()
} else {
    nonpengulangan()
}

//tidak berulang 
function nonpengulangan()
{
let asuwe = "jangkrik";
var jangkrik= prompt('jadikan makanan?');
var vlue = confirm('yakinnih?');
if (vlue === true){
    alert('masokpak'+jangkrik);
} else {
    alert(asuwe);
}
}
// pengulangan
function pengulangan(){
    
    while(a){
        let gone = "bosku";
        let value = prompt('yn') ;
        var isi = confirm('beneran ?');
    if (isi===true){
        alert('kelas '+ value);
        a = confirm("eneh?");
        } else {
        alert('utange ojo lali '+ gone)
        a =confirm("eneh?") ;
        }
    }
    
}
}

//angkot jawaban WPU 6.1
function angkot(){
    let jumlah = Number(prompt('Berikan angka yang sesuai!') );
    var benar = true ; 
    

    while (benar){
        let awal = 1;
        while(awal <= jumlah ){
            console.log('angkot '+awal+' berhasil');
            awal++;
        }
       benar = confirm('lagi?');
    }
}