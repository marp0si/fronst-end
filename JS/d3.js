let kullanici = {     // obje
    isim: "Mahsun",  // isim anahtarı, Mahsun değerini tutar.
    yas: 30        // yaş anahtarı 30 değerini tutar.
  };
document.write(kullanici.isim);//Mahsun
kullanici.adminMi = true;
kullanici["Nemrudun Kızı"] = true;
document.write('<br>'+kullanici.adminMi)//true
document.write('<br>'+kullanici["Nemrudun Kızı"])//true
delete kullanici;

let meyve = prompt("Hangi meyveyi istersin?", "elma");
let poset = {[meyve + 'Yedim']: 5}
document.write('<br>'+poset['elmaYedim'])//5
alert( "yas" in kullanici );//true
for(let anahtar in kullanici)
{
    document.write('<br>'+ anahtar );  // isim, yas, Nemrudun Kızı
    document.write( '<br>'+kullanici[anahtar] ); // Mazlum, 30, true
}

let yonetici = kullanici;
let aile={}
function evlilik(erkek, kadin)
{
    aile.kadin = kadin;
    aile.erkek = erkek;
}
evlilik("Ihsan", "Macide");
document.write( '<br>'+aile.kadin+"-"+aile.erkek+"<br>");

let kullanici1 = {
  isim: "İhsan",yas: 30,
  selamVer() {alert(this.isim); }};
  kullanici1.selamVer(); // Ihsan


class Users
{
  constructor(name) {this.name = name;}
  sayHi() {alert(this.name);}
}
  
  // Usage:
let user1 = new Users("John");
let user2=new Users('sinan');
user1.name='kumandan';
user1.sayHi()
document.write(user1.name);
document.writeln(user2.name);
document.write('<br>users'+typeof(Users))//function
document.write('<br>'+Users === Users.prototype.constructor); // true
document.write('<br>'+Users.prototype.sayHi); // alert(this.name);
//* v
function User(name) {this.name = name;}
User.prototype.sayHi = function() {alert(this.name);};
let user = new User("John");user.sayHi();//John- nesnenin özelliği olan foksiyonu çalıştırdım
document.write('<br>'+user.name);//John- burda nesne özeliği olan adı yazdırdım
delete  aile,yonetici,evlilik,Users,user1,user2,User;

class MyClass{sayHi(){alert(MyClass);}}//bu satırın aynısı yazar
let Userss = new MyClass(); // MyClass is visible only inside the class}}
document.write('<br>'+Userss.sayHi());//undefined ,
//
function makeClass(phrase) 
{
  // declare a class and return it
  return class {sayHi() {alert(phrase);};};
}
let User11 = makeClass("Hello");
new User11().sayHi(); // Hello
// değişken tipleri
let str = "Merhaba";
document.write('<br>'+ str.toUpperCase() ); // MERHABA
document.write('<br>'+ str.toLowerCase() ); // merhaba
let num = Number("123");//num değişkeni int oldu
let esitmi=(num==123)?'123 Number değişkenine eşit':'Number degıskeni 123e esit degil';
document.write('<br>'+esitmi);
let milyar = 1e9;  // 1 milyar 1 ve 9 sıfırdan oluşmaktadır.
document.write('<br>'+milyar);//1000000000 -->1e3 = 1 * 1000
let ms = 1e-6;document.write('<br>'+ms)//0.000001 ->1e-3 = 1 / 1000 (=0.001)
alert( 0xff ); // 255 HexaDecimal
alert( 0xFF ); //255 HexaDecimal
let sayi = 255;
document.write('<br>'+(255).toString(16));  // ff
document.write('<br>'+(255).toString(2));  // 11111111
/*`Math.floor`
: Aşağı yuvarlar: `3.1`  `3` , `-1.1`  `-2` olur.
`Math.ceil`
: Yukarı yuvarlar: `3.1` `4`,  `-1.1` `-1` olur.
`Math.round`
: En yakın tam sayıya yuvarlar: `3.1`  `3`, `3.6`  `4` ve `-1.1`  `-1` olur.
`Math.trunc` (Internet Explorer desteklemez)
: Ondalık bölümü siler: `3.1`  `3`, `-1.1`  `-1` olur. 
Math.random() 0 ve 1 arası rasgele sayı üretir.(1 hariç)
*/

sayi=2.459862;
document.write('<br>'+Math.floor(sayi));//2
document.write('<br>'+Math.ceil(sayi));//3
document.write('<br>'+Math.round(sayi));//2
document.write('<br>'+Math.floor(sayi));//2
document.write('<br>'+Math.floor(sayi * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
/*
 sayı çok büyükse 64 bit alanın dışına çıkabilir bu da sonsuz döndürür.
*/
alert( 1e500 ); // Sonsuz
alert( 0.1.toFixed(20) ); // 0.10000000000000000555
let top_=0.1+0.2
document.write('<br>'+(top_==0.3));//false ama toFixed(2) ile yaparsak true
document.write('<br>'+(top_.toFixed(2)==0.30));//true
/*
alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
böyle de olabilir geçici olarak tam sayı olduktan sonra bölebiliriz.
*/
/*  Testler: isFinite ve isNaN 
infinity her sayıdan büyük veya kücüktür
isNaN hata -NaN kendine bile eşit değildir
isNaN(deger)` argümanı sayıya çevirir ve sayı olup olmadığını kontrol eder.
`isFinite(deger)` argümanı sayıya çevirir ve  normal sayı ise `true` değil ise `NaN/Infinity/-Infinity` döndürür:
*/
alert(isFinite("15") ); // true
alert(isFinite("str") ); // false,  NaN döndürür.
alert(isFinite(Infinity)); // false, Infinity döndürür.

/*değerler, `"100px"` veya `"12pt"`  gibi birim ekleri alabilir. 
Birçok ülkenin para birimi sona veya başa gelir. 
Bundan dolayı `15₺` gibi değerler kullanıldığında önemli olan sayı bölümü olabilir. 
`parseInt` tam sayı dönderirken `parseFloat` küsüratlı sayı dönderir.
*/

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, sadece tamsayı bölümü alındı
alert( parseFloat('12.3.4') ); // 12.3, birinci noktadan sonra yeniden nokta gördüğünde işlemi tamamladı
alert(parseFloat('a123'));// NaN, ilk harf işlemi durdurur.
//parseInt(str,radix) radix sayı tabanıdır
document.write('<br>'+parseInt('ff', 16))// 255 ;
