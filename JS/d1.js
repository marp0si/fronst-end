/*
a=99;
b=1;
aa=a+"+"+b+"="+(a+b);
bos='  '
document.write(aa);
document.write('\n Sinan <br>');
var dizi=[]
for(i=b;i<10;i++){dizi[i-1]=i}
document.write(dizi,' dizisi','<br>')
document.write(dizi.reverse(),' reverse','<br><br><br><br><br>')
document.write(typeof(aa))*/
aa=NaN;
alert( `Hello, *!*${aa}*/!*!` );
let isimKontrolu = true
let buyuk = 4 > 1;
document.write(`4 1den buyuk mu  ${buyuk}`)
document.write("<br><br><br><br><br>a=a+1'in sonucu :"+aa);
let x = 123;
x = undefined;
document.write('<br>x ='+x);
/*## Özet

Javascript dilinde 8 tane basit tip bulunmaktadır.


- `number` her türlü sayı için ( integer veya floating point)
- `bigint` isteğe bağlı uzunluktaki tam sayılar içindir.
- `string` bir veya birden fazla karakter için
- `boolean` , `true`/`false` yani doğru-yanlış değerleri için.
- `null` bilinmeyen değerler için.
- `undefined` değer atanmamış değişkenler için.
- `object` daha karmaşık veri yapıları için.
- `symbol` eşsiz tanımlamalar için.
*/
let value= true;
document.write("<br>"+typeof(value));

let a = 1, b = 1,c=++a,d=b++;
document.write("<br>"+a);//2
document.write("<br>"+b);//2
document.write("<br>"+c);//2
document.write("<br>"+d);//1

let str="<br>";
document.write("<br>"+(5 > 4));//true
document.write("<br>"+("apple" > "pineapple"));//false
document.write("<br>"+("2" > "12"));//true
document.write("<br>"+(undefined == null));//true
document.write("<br>"+(undefined === null));//false
document.write("<br>"+(null == "\n0\n"));//false
document.write("<br>"+(null === +"\n0\n"));//false
document.write("<br><br><br>");
document.write( (true == 1)+"<br>" ); // true ( doğru )
document.write( (false == 0) +"<br>"); // true ( doğru )

/**************************** Kullanıcıdan bilgi isteme 
result = prompt(başlık[, varsayılan]);  
result = confirm(soru);
alert()
*/
let result = prompt('yas?');// inputlu
document.write("<br>"+(result))
let test = confirm("Test");// cancel(false) ve ok(true)
document.write("<br>"+(test))

/* *************************** if/else 
if (true)
{
  alert( 'Merhaba' );
}*/
/*
if(true&&false){alert('if/elseye girdi.');}
else{alert('if/elseye girmedi.');}
*/
/*
let deger = prompt('Bir sayı yazınız', 0);
if (deger > 0) {alert(1);}
else if (deger < 0) {alert(-1);}
else {alert(0);}
*/
a=1,b=2;
if (a + b < 4) {sonuc = 'Dusuk';} 
else           {sonuc = 'Yuksek';}
/*let sonuc = (a + b < 4) ? 'Düşük' : 'Yüksek';*/
document.write('<br>'+sonuc)

//let sonuc = koşul1 ? deger1 : deger2? değer2
giris='Yönetici'
let mesaj = (giris == 'Çalışan') ? 'Merhaba' :
  (giris == 'Yönetici') ? 'Sana da merhaba patron' :
  (giris == '') ? 'Giriş yasak' :'';
document.write('<br>'+mesaj)
//document.write('çğİ')
/**********************************# Döngüler: while ve for
while (koşul) {kod}
for (başla; koşul; adım){ döngü gövdesi }
break kır
continue sonraki
*/

/*switch(x) {
  case 'deger1':  [break]// if (x === 'deger1')...
  case 'deger2':  [break]// if (x === 'deger2')...
  default:...[break]
}*/

/* **************** fonksiyonlar
function mesajGoster() {alert( 'Merhaba millet!' ):}

*/
function toplam(a, b) {return a + b;}
document.write('<br>'+toplam(4,5));
function asalGoster(n)
{
    sonrakiAsal: for (let i = 2; i < n; i++)
    {
      for (let j = 2; j < i; j++) {if (i % j == 0) continue sonrakiAsal;}
      document.write('<br>'+i); // asal sayı
    }
}
asalGoster(50);

function yasKontrolu(yas) 
{return (yas > 18) || confirm('Ebeveynlerin izin verdi mi?');}
yasKontrolu(16);

function aaa(a,b)
{let don=(a<b)?a:b;document.write('<br>'+don);}
aaa(2,3);
/*
function selamVer() {alert("Merhaba");}
alert(selamVer); // fonksiyonun kodunu gösterir.
let selamVer = function() {break}
*/
/*
let yıldızsav=function(){return 2;}
document.write(yıldızsav());
*/
function qwe ()
{document.write('<br>');
	let n=21; Yilsay=1,_bosSay=n-1;
	for (let i=0;i<=n/2;n++)
        {   
            for(let ilk=0;ilk<=_bosSay;ilk++){document.write(' ');}
            for(let yildiz=0;yildiz<=Yilsay;yildiz++){document.write('*');}
            for(let son=0;son<=_bosSay;son++){document.write(' ');}
            document.write('<br>');
            Yilsay=Yilsay+2;
			_bosSay=_bosSay-2;
		if (_bosSay<=2){document.write(i);break;}

        }

}
qwe();
