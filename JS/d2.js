// değişken tipleri
let str = "Merhaba"+"1";
/*
| Karakter | Açıklama |
|-----------|-------------|
|`\b`|Backspace|
|`\f`|Form feed|
|`\n`|Yeni Satır|
|`\r`|Carriage return|
|`\t`|Tab|
`\uNNNN`| hex kodu ile bir unicode `NNNN`, örneğin `\u00A9` -- `©` kopyalama hakkı için kullanılan işaret.
 Kesinlikle 4 basamaklı hex değeri olmalıdır. |
|`\u{NNNNNNNN}`|Bazı karakterler nadirde olsa iki unicode sembolü ile ifade edilirler.
 4 bytten oluşan uzun bir yazımı vardır. Karakterlerin süslü parantez içine alınması gerekmektedir.
*/
document.write('<br>'+"\u00A9" ); // ©
document.write('<br>'+"\u{20331}" ); // 佫, Uzun bir çince hiyerograf (uzun unicode)
document.write('<br>'+"\u{1F60D}"); // 😍, gülen yüz sembolü (uzun unicode)
document.write('<br>'+'N\'aber canım - Tavşan !' ); // N'aber canım - Tavşan !
document.write('<br>'+`\\` ); //  \
document.write('<br>'+ str.toUpperCase() ); // MERHABA
document.write('<br>'+ str.toLowerCase() ); // merhaba
document.write('<br>'+str.length)
document.write('<br>'+ str[0] ); // M
//str[0] = 's'; hata

document.write('<br>'+str.indexOf("M") ); // -str.indexOf(aranacak_karakterler, pozisyon)-strde index araba 0, çünkü mbaşlangıçta
str = "N`aber Canım - Tavşan";
document.write('<br>'+str.indexOf('an', 9) ) // 19
/*
döngü indexof'u
let str = 'Bir berber bir berbere gel birader beraber bir berber dükkanı açalım demiş';

let hedef = 'bir'; 

let poz = 0;
while (true) {
  let bulunanPoz = str.indexOf(hedef, poz);
  if (bulunanPoz == -1) break;

  alert( `Bulunan poz: ${bulunanPoz}` );
  poz = bulunanPoz + 1; // bir sonraki pozisyondan aramaya devam et.
///////////////
let str = 'Bir berber bir berbere gel birader beraber bir berber dükkanı açalım demiş';
let hedef = "bir";


let poz = -1;
while ((poz = str.indexOf(hedef, poz + 1)) != -1) {
  alert( poz );
}
} */
str = "Bin berber bir berbere gel birader beraber bir berber dükkanı açalım demiş";
document.write('<br>'+str.lastIndexOf("berber")) //-47 if ile çalışmayabilir çünkü pozisyon 0ise if false olarak algılar ve sondan başa doğru ararma yapar
//pozisyon önemli değilse -str.includes(substr, pos)
document.write('<br>'+"birader".includes("ir") ); // true
document.write('<br>'+"birader".includes("ir", 3) ); // false, 3. pozisyondan sonra `ir` bulunmamaktadır.
//str.startsWith('kelime') ve str.endsWith('kelime')
document.write('<br>'+"birader".startsWith("bir") ); // true, "birader" "bir" ile başlar.
document.write('<br>'+"birader".endsWith("er") );   // true, "birader" "er" ile biter.


//str.slice(basla , bitir) bitir dahil değil-str.substring(basla, bitir) bunun için hangisi büyük önemli değildir
str = "stringify";
document.write('<br>'+str.slice(0,5) ); // 'strin',  0 ile 5 arasındaki alt karakter dizisi (5 dahil değil)
document.write('<br>'+str.slice(-4, -1) ); // gif
document.write('<br>'+str.substring(2, 6) ); // "ring"
document.write('<br>'+str.substring(6, 2) ); // "ring"

/*
Karakterlerin karşılaştırılması1. Küçük harf karakterler her zaman büyük harflerden büyüktürler.
    ```js run
    alert( 'a' > 'Z' ); // true
Bölgesel karakterler bu sıralamaya girmezler. Yani karşılaştırılamazlar.
alert( 'Ö' > 'Z' );//true
*/

//`str.codePointAt(pos)`: Verilen pozisyondaki karakterin kodunu döndürür
//`String.fromCodePoint(code)`: Sayısal değere göre karakter dönderir.
//latin alfabesi 65-220 arasındadır.
document.write('<br>'+"z".codePointAt(0) ); // 122
document.write('<br>'+"Z".codePointAt(0) ); // 90
document.write('<br>'+ String.fromCodePoint(90) ); // Z
// 90 hexa decimal sistemde 5a ya denk gelmektedir. alert( '\u005a' ); // Z
str = '';
for (let i = 65; i <= 220; i++) {str += String.fromCodePoint(i);}
/*
document.write('<br>'+ str );
ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
yani latin alfabesinde en büyük büyük ü(Ü),en küçük büyük a(A)
*/

//str1.localeCompare(str2) str1 ve str2yi özel karakterler dahilinde karşılaştırır böylece sorun çözülür
document.write('<br>'+ 'Ö' > 'Z' );//true
document.write('<br>'+'Ö'.localeCompare('Z'));//-1 döndürdü yani parantezin içi daha büyük
//`str.trim()` -- başlangıç ve bitişteki boşlukları siler.
//`str.repeat(n)` -- `str`'yi istendiği kadar tekrar eder..
let yil='*',bos=' ';;
str=bos.repeat(5)+yil.repeat(5)+bos.repeat(5);
document.write('<br>'+str);
document.write('<br>'+str.trim());



document.write('<br><br>BURDAN SONRASI SAYI İÇİN<br><br>')
let num = Number("123");//num değişkeni int oldu
let esitmi=(num==123)?'123 Number değişkenine eşit':'Number degıskeni 123e esit degil';
document.write('<br>'+esitmi);
let milyar = 1e9;  // 1 milyar 1 ve 9 sıfırdan oluşmaktadır.
document.write('<br>'+milyar);//1000000000 -->1e3 = 1 * 1000
let ms = 1e-6;document.write('<br>'+ms)//0.000001 ->1e-3 = 1 / 1000 (=0.001)
document.write('<br>'+0xff ); // 255 HexaDecimal
document.write('<br>'+0xFF ); //255 HexaDecimal
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
Math.max(a, b, c...)` / `Math.min(a, b, c...)`
: Verilen değerlerden en büyüğünü veya en küçüğünü döndüren fonksiyon
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
document.write('<br>'+1e500 ); // Sonsuz
document.write('<br>'+ 0.1.toFixed(20) ); // 0.10000000000000000555
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
document.write('<br>'+isFinite("15") ); // true
document.write('<br>'+isFinite("str") ); // false,  NaN döndürür.
document.write('<br>'+isFinite(Infinity)); // false, Infinity döndürür.

/*değerler, `"100px"` veya `"12pt"`  gibi birim ekleri alabilir. 
Birçok ülkenin para birimi sona veya başa gelir. 
Bundan dolayı `15₺` gibi değerler kullanıldığında önemli olan sayı bölümü olabilir. 
`parseInt` tam sayı dönderirken `parseFloat` küsüratlı sayı dönderir.
*/

document.write('<br>'+ parseInt('100px') ); // 100
document.write('<br>'+parseFloat('12.5em') ); // 12.5

document.write('<br>'+ parseInt('12.3') ); // 12, sadece tamsayı bölümü alındı
document.write('<br>'+ parseFloat('12.3.4') ); // 12.3, birinci noktadan sonra yeniden nokta gördüğünde işlemi tamamladı
document.write('<br>'+parseFloat('a123'));// NaN, ilk harf işlemi durdurur.
//parseInt(str,radix) radix sayı tabanıdır
document.write('<br>'+parseInt('ff', 16));// 255

document.write('<br><br>BUNDAN SONRASI ARRAY<br><br>');
let meyveler = ["Elma", "Portakal", "Erik"];
for(let item=0;item<=meyveler.length-1;item++){document.write(meyveler[item]+'\t');}document.write('<br>');
for(let item of meyveler){document.write(item+'\t');}document.write('<br>');
meyveler[3] = 'Limon';meyveler[2] = 'Armut';
document.write(meyveler);
let arr = [ 'Elma', { isim: 'Ahmet' }, true, function() { alert('merhaba'); } ];
document.write('<br>'+arr[3]);
/*
- `push` : sona eleman ekler.-arr.push() 
- `pop` : sondan eleman alır.-arr.pop()
- `shift`: Dizinin ilk elemanını döndürür.-arr.shift()
- unshift`: Dizinin başlangıcına eleman ekleme.-arr.unshift(item)
- splice :Diziye yeni bir eleman ekleyebilir ve silebilir-:arr.splice(index, deleteCount, elem1, ..., elemN])
- slice(start, end) kopyalar end dahil değil
- concat:dizide bulunan elemanları kopyalar. Diğer objeler bütün olarak eklenirler.-arr.concat(str,int,[arr])
*/
meyveler.pop();meyveler.push('LiMoN');
document.write('<br>'+meyveler);
document.write('<br>'+meyveler.shift());
meyveler.push("Portakal", "Armut");
meyveler.unshift("Ananas", "Limon");
document.write('<br>'+meyveler);
arr = [1, 2, 3, 4, 5];
arr.length = 2; // 2 elemana düşür
document.write('<br>'+ arr ); // [1, 2]
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
document.write('<br>'+matrix[1][1] );
arr=[1,2,3]
document.write('<br>'+ (String(arr) === '1,2,3') ); // true

arr = ["eve", "gitmek", "istiyorum"];
delete arr[1]; // "gitmek" silinecek
document.write('<br>'+ arr[1] ); // undefined
// şimdi arr = ["eve",  , "istiyorum"];
document.write('<br>'+arr.length ); // 3
arr=['A','B','C','D','E','F'];
arr.splice(0, 4, "Aile",'Balık','Can','Delik');document.write('<br>'+arr);
let silinen_arr=arr.splice(0, 2 );
document.write('<br>'+silinen_arr+'-->silenin elemanlar')
arr = [1, 2, 5]
// indeks -1 ( sondan birinci ) 
// 0 eleman sil,
// 3 vs 4 ekle
arr.splice(-1, 0, 3, 4);//yani son elemandan önce 2 eleman ekle
document.write('<br>'+ arr ); // 1,2,3,4,5
let arr1=arr.slice(0, 3);// 1,2,3
document.write('<br>'+arr1);
arr = [1, 2];
let arrayLike = {0: "something",length: 1};
arr=arr.concat(arrayLike);
document.write('<br>'+arr);//1,2,[object Object] 
/*
indexOf:`eleman`'ı arar ve bulursa bunun indeksini döner, bulamazsa `-1` döner.-arr.indexOf(eleman, balangic)
find:Bazı şartları sağlayan objeleri bulur.-arr.find(function(elaman, index, dizi)
findIndex: find gibi çalışır ama index döndürür.-arr.findIndex(function(elaman, index, dizi)
filter:find metodunun dizi döndürenidir.
map:eleman yerine yeni değerler dizi şeklide döndürür. 
sort:sıralar(k->b) ama varsayılan olarak karakterik
reverse:ters çevirir
split:diziyi ayırma ,daha çok stryi diziye çevirme-split(ayırmaDeğişkeni,dizi kaç elemanlı olsun);
join:splitin tesini yapar arrdan str yapar-arr.join(birleştirmedeğişkeni)
*/

let kullanicilar = [{id: 2, isim: "Ahmet"},{id: 3, isim: "Muzaffer"},{id: 1, isim: "Emine"},{id: 1, isim: "qwe"}];
let kullanici = kullanicilar.findIndex(eleman => eleman.id == 1);
document.write('<br>'+kullanici);
kullanici = kullanicilar.filter(eleman => eleman.id == 1);
for(let i of kullanici)document.write('<br>'+i.isim);//Emine,qwe
/*
sıralama için 
function compare(a, b) {if (a > b) return 1;if (a == b) return 0;if (a < b) return -1;}
function compareNumeric(a, b) {return (a>b)?1:(a==b)?0:-1;}

neyler neyi karşılatğını görmek için[1, -2, 15, 2, 0, 8].sort(function(a, b) {alert( a + " <> " + b );});
*/
function compareNumeric(a, b) {return (a>b)?1:(a==b)?0:-1;}
kullanici=[1,4,5,12,24,64,23,90,12,3,4,5,45];
kullanici=kullanici.sort(compareNumeric);
document.write('<br>'+kullanici);
kullanici=kullanici.reverse();
document.write('<br>'+kullanici);
arr="Bilbo, Gandalf, Nazgul",str='test';
arr = arr.split(',',2);str=str.split('');
document.write('<br>'+`${arr}-${str}`)
arr=arr.join(';'),str=str.join('+');//str oldu
document.write('<br>'+`${arr}-${str}`)
/*
arr.reduce:Genelde dizilere göre tek bir karakter dizisini hesaplamaya yarar.
reduceRight:reduceün aynısın sğdan sola yapar.
forEach:her eleman için fonsiyon çalıştırır.arr.forEach(function(item, index, array) {})
 */
arr = [1, 2, 3, 4, 5]
let result = arr.reduce((sum, current) => sum + current, 0);//başlangıç değeri ataması önerilir
alert(result); // 15
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => 
{document.write('<br>'+`${item}, ${array}'in ${index}. indeksinde`);});
/*
Array.isArray(value):değer dizi ise true döner.
thisarg=> `find`, `filter`, `map` gibi meotlar hariç hepsinde vardır.
 */
kullanici = {yas: 18,dahaGenc(digerKullanici) {return digerKullanici.yas < this.yas;}}
kullanicilar = [{yas: 12},{yas: 16},{yas: 32}];
// kullanıcıdan daha genç kullanıcıları bulunuz
let dahaGencKullanicilar = kullanicilar.filter(kullanici.dahaGenc, kullanici);


document.write('<br><br><br>BUNDAN SONRARI İTORETORE<BR><BR>');
let aralik = {
  baslangic: 1,
  bitis: 5,
  [Symbol.iterator]() {this.current = this.baslangic;return this;},

  next() {if (this.current <= this.bitis) {return { done: false, value: this.current++ };}
     else {return { done: true };}
  }
};
// çalışması!
for (let num of aralik) {document.write(num+'-');} // 1, then 2, 3, 4, 5}


str = "Hello";
let iterator = str[Symbol.iterator]();//<----------
while(true)
{
  let result = iterator.next();
  if (result.done) break;
  document.write(result.value);
}




document.write('<br><br><br>BUNDAN SONRARI MAP-SET<BR><BR>');
/*- `new Map()` -- map yaratır.
- `map.set(key, value)` -- Anahtara değer atar.
- `map.get(key)` -- Anahtarın değerini döndürür. Eğer öyle bir `anahtar` yoksa `undefined` döndürür.
- `map.has(key)` -- Eğer öyle bir anahtar varsa `true` yoksa `false` döndürür.
- `map.delete(key)` -- Verilen anahtara ait değeri siler.
- `map.clear()` -- Mapin içini temizler.
- `map.size` -- anlık eleman sayısını döndürür.
*/
let map=new Map();
map.set('1', 'str1');   // String tipinde anahtar
map.set(1, 'num1');     // Sayı tipinde anahtar
map.set(true, 'bool1'); // boolean tipinde anahtar
document.write(map.get(1));//num1
let john = { name: "John" };
// John'un ziyaret sayısını tutalım
let ziyaretSayisiMap = new Map();
ziyaretSayisiMap.set(john, 123);
ziyaretSayisiMap.set(john.name,45)
alert( ziyaretSayisiMap.get(john.name) ); // 123
/*
- `map.keys()` -- anahtarlar için bir yinelenebilir döndürür
- `map.values()` -- değerler için bir yinelenebilir döndürür
- `map.entries()` -- `[key, value]` girişleri için bir yinelenebilir döndürür, `for..of` içinde varsayılan olarak kullanılır.
*/
document.write('<br>');
let yemekMap = new Map([['salatalik', 500],['domates', 350],['sogan',50]]);
for(let yemek of yemekMap.keys()){document.write(yemek)};document.write('<br>');
for(let yemek of yemekMap.values()){document.write(yemek)};document.write('<br>');
yemekMap.forEach( (value, key, map) => {document.write(`${key}: ${value},`);}) // salatalik: 500 vb.
/*
`Set` her değerin sadece birer kez olabileceği yapılardır(collection).

- `new Set(iterable)` -- set oluşturur, isteğe bağlı olarak değerler içeren diziden de oluşturulabilir.
- `set.add(value)` -- bir değer ekler, set'in kendisini döndürür
- `set.delete(value)` -- değeri siler. Eğer öyle bir `değer` varsa `true` yoksa `false` döndürür.
- `set.has(value)` -- Eğer öyle bir `değer` varsa `true` yoksa `false` döndürür.
- `set.clear()` -- set'in içindeki her şeyi siler.
- `set.size` -- eleman sayısını döndürür.
*/
let set = new Set();
set.add('123');
set.add('231');
set.add('321');
set.add('213');
set.add('312');
set.add('321');//eklenmedi çünkü var LOL
document.write('<br>'+set.size+'<br>');
for(let user of set) {document.write(user+'-')};document.write('<br>');
/*
- `set.keys()` -- değerler için bir yinelenebilir nesne döndürür,
- `set.values()` -- `set.keys` ile aynı, `Map` ile uyumlu olması için yapılmış,
- `set.entries()` -- `[value, value]` girişleri için yinelenebilir obje döndürür, `Map` ile uyumlu olması için vardır.
 */
set.forEach( (value, key, Map) => {document.write(`${key}: ${value},`);})//! wtf


let weakMap = new WeakMap();//! anahtar obje olmak zorunda onun dışında map ile aynı
let obj = {};
weakMap.set(obj,'bu değerin anahtarı objedir.');
//!weakMap.set('a','bu değerin anahtarı obje değildir.');//hata verir
document.write('<br>'+weakMap.get(obj));
/*`WeakMap` `keys()`, `values()`, `entries()` metodlarını desteklemez,
 yineleme yapamayız. Bu yüzden tüm anahtar veya değerleri çekmemizin bir yolu yoktur.
- `weakMap.get(key)`
- `weakMap.set(key, value)`
- `weakMap.delete(key, value)`
- `weakMap.has(key)`
 */
let eda = { name: "Eda" },esma ={name:"esma"};
ziyaretSayisiMap = new WeakMap();
ziyaretSayisiMap.set(eda, 123);
ziyaretSayisiMap.set(esma,1234);
// eğer eda bizi terk ederse, ona artık ihtiyacımız yoktur.
eda = null;
document.write(ziyaretSayisiMap.get(eda));//undefined 
document.write(ziyaretSayisiMap.get(esma));//1234
/*
`WeakSet` benzer şekilde davranır:

- `Set`e benzer, ancak `WeakSet`e yalnızca nesneler ekleyebiliriz (ilkel değil).
- Bir nesne ona başka bir yerden ulaşılabildiği sürece set içinde var olur
- `Set` gibi, `add`, `has` ve `delete`yi destekler, ama `size`, `keys()` ve yinelemeleri desteklemez. */

let fiyatlar = Object.fromEntries([['muz', 1],['portakal', 2],['et', 4]]);
/*
Object.fromEntries:key ve value,çifti dizisi verildiğinde, bir obje oluşturur:
`Map`ten bir obje almak için`fromEntries` de kullanabiliriz.
*/
let ikiKatiFiyatlar = {};
for(let [product, price] of Object.entries(fiyatlar)){ikiKatiFiyatlar[product] = price * 2;}
document.write(`<br> etin fiyatı ${ikiKatiFiyatlar.et}`);
document.write(`<br>${Object.entries(fiyatlar).map(([key, value]) => [key, value * 2])}`);//muz,2,portakal,4,et,8
map = new Map();
map.set('muz', 1);
map.set('portakal', 2);
map.set('et', 4);
obj = Object.fromEntries(map);
document.write(`${obj.muz}`);

document.write('<br><br><br>BUNDAN SONRARI DATETİME<BR><BR>');
/*
new Date(yıl, ay, gün, saat, dakika, saniye, milisaniye)
Not:

    - `yıl` 4 basamaktan oluşmalıdır. `2013` olur, `98` olmaz.
    - `ay` sıfırdan başlar. Yani `0` Ocak, `11` Aralıktır.
    - `gün` parametresi girilmez ise `1` olarak kabul edilir.
    - `saat/dakika/saniye/milisaniye` değerleri girilmez ise `0` olarak kabul edilir.
getFullYear():
getMonth()
getDate():ayın gününü verir ismi yenıltabilir
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getTime():Verilen tarihin zaman damgasını ( timestamp ) döndürür -- 1 Ocak 1970 UTC+0'dan itibaren geçen milisaniye  
getTimezoneOffset():Yerel zaman ile UTC arasındaki farkı dakika olarak döndürür
*/
let now = new Date();document.write( now );// o anki tarih/saati gösterir.
let date=new Date(2015, 10, 20, 0, 0, 0, 0);document.write(`<br>${date}`);//20 novenber 2015
date = new Date(2011, 0, 1, 2, 3, 4, 567);document.write(`<br>${date}`);//1 jan 2011 saat 02:03:04
document.write(`<br>${date.getFullYear()} yılı,${date.getMonth()} ayı,${date.getDate()},${date.getDate()}`);
document.write(`<br>${date.getMinutes()},${date.getSeconds()},${date.getMilliseconds()},${date.getTime()} time`);
document.write(`<br>londradan burası arasında ${now.getTimezoneOffset()/60} var`);
/*
setTime() haricinde hepsinin `UTC` tipi de vardır, örneğin: `setUTCHours()
*/
date.setUTCHours();
document.write(now.getHours());//lonrada saat
document.write(now.getUTCHours());//ülke saati
alert(now.getTimezoneOffset());//-180dk= -3saat
now.setHours(0);// 00:02:32
document.write("<br>"+now); // bu gün ve saat 0
now.setHours(0, 0, 0, 0);//00:00:00 
document.write("<br>"+now); // bu gün ve saniye 00:00:00.


date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
document.write(`<br>28/1/2016ya 2 gün eklersek ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} olur<br>`);
date = new Date(2016, 1, 28);
date.setMinutes(date.getMinutes() + 2);
document.write(`<br>00:00:00 ya 2dk  eklersek 0${date.getHours()}:0${date.getMinutes()}:0${date.getSeconds()} olur<br>`);
/*
Date.now():Date().getTime() aysıdır ama daha hızlıdır.
1 Ocak 1970'den şimdiye kadar olan zamanın ms cinsinden değeri

Date.parse(str):karakterden tarih ayrıştırmaya yarar.-YYYY-MM-DDTHH:mm:ss.sssZ,
- `YYYY-MM-DD` -- tarih : yıl-ay-gün
- `"T"` karakteri ayraç.
- `HH:mm:ss.sss` -- zaman: saat:dakika:saniye.sarise şeklindedir.
- İsteğe bağlı olarak eklenen `'Z'` `+-hh:mm` şeklinde UTC'ye göre zaman ayarlamaya yarar. Varsayılan `Z` değeri UTC+0 anlamına gelir.

 */
let asd = Date.parse('2012-01-26T13:51:50.417-07:00');
now=new Date();
let deneme=Date.parse('2019-05-06T16:43:25'),dun=new Date(now);
dun.setDate(dun.getDate()-1);
document.write(`${asd}ile ${deneme} arasında ${(asd-deneme)}ms kadar fark var (parseleri çıkarttım)<br> `); // 1327611110417  (timestamp)
document.write(`${now}ile ${date} arasında ${(now-date)}ms kadar fark var (date tipleri çıkarttım)<br>`)
document.write(`<br>dun ile bugün arasında 1 gün yani ${now-dun}ms var.`)//86400000ms 
document.write(`<br>${1*1000*60*60*24}`);//sn60*60dk*24saat*1000


document.write('<br><br><br>BUNDAN SONRARI Json<BR><BR>');
kullanici = {
  adi: "Ahmet",
  yasi: 30,
  boy:1.8+'m',
  toString() {return `{adi: "${this.adi}", yasi: ${this.yasi} boy:${kullanici.boy}} `;}
};
document.write(kullanici)
/*
`JSON.stringify` objeyi JSON'a çevirir.-json = JSON.stringify(deger[, degistirici, bosluk])
deger: Kodlanacak metin.
degistirici: Maplema ( haritalama ) fonksiyonu ( `function(key,value)`) veya kodlanacak özelliklerin dizisi.
boşluk: Formatlanmak için kullanılacak boşluk.sadece güzel çıktı vermek amacıyla kullanılır.


JSON.parse JSON'dan objeye çevirmeye yarar-JSON.parse(str[, alıcı]);
 */
let ogrenci = {
  adi: 'Ahmet',
  yasi: 30,
  adminMi: false,
  dersler: ['html', 'css', 'js'],
  esi: null};

let json = JSON.stringify(ogrenci);
//document.write(json['adi']);
alert( JSON.stringify(1) ) // 1
// karakterler de JSON içinde karakterdir fakat çift tırnak içinde gösterilir.
document.write(JSON.stringify('test') ) // "test"
document.write( JSON.stringify(true) ); // true
document.write( JSON.stringify([1, 2, 3]) ); // [1,2,3]
let oda = {sayi: 23};
let tanisma = {
  baslik: "Konferans",
  katilimcilar: [{adi: "Ahmet"}, {adi: "Mehmet"}],
  yer: oda // tanışma odayı referans gösteriyor.
};
oda.dolduruldu = tanisma;
alert( JSON.stringify(tanisma, function degistirici(anahtar, deger) {
  document.write(`<br>${anahtar}: ${deger}-`); // degistiriciye gelen
  return (anahtar == 'dolduruldu') ? undefined : deger;}));
  /* degistiriciye gelen anahtar:deger çifti:
:             [object Object]
baslik:        Conference
katilimci:    [object Object],[object Object]
0:            [object Object]
adi:         Ahmet
1:            [object Object]
adi:         Mehmet
yer:        [object Object]
sayi:       23
{"baslik":"Konferans","katilimcilar":[{"adi":"Ahmet"},{"adi":"Mehmet"}],"yer":{"sayi":23}}

*/
//`JSON.stringify` çağırıldığında bu otomatik olarak tostring() de çağrılır.
oda = {sayi: 23};
toplanti = {
  baslik: "Konferans",
  tarih: new Date(Date.UTC(2017, 0, 1)),
  yer:oda
};

document.write('<br>'+ JSON.stringify(toplanti) );
/* 
  {"baslik":"Konferans",
"tarih":"2017-01-01T00:00:00.000Z",  // (1)
"oda": {"sayi":23}               // (2)
*/
JSON.parse(json)
document.write('<br>'+JSON.parse(json).adminMi);//false 

kullanici = '{ "adi": "Ahmet", "yasi": 35, "admin": false, "arkadaslar": [0,1,2,3] }';
kullanici = JSON.parse(kullanici);
document.write('<br>'+kullanici.arkadaslar[2]);//2
//Bunun yanında JSON yorumlara izin vermez. Yorum eklenirse JSON çalışmaz hale gelir.
//date tipini jsondan alman için
let tarih1="2017-01-01T00:00:00.000Z"
str = '{"baslik":"Konferans","tarih":"'+tarih1+'"}';//key ve value çift tırnak içi gelmesi
tanisma = JSON.parse(str, function(anahtar, deger) {
  if (anahtar == 'tarih') return new Date(deger);
  return deger;
});
document.write('<br>'+tanisma.tarih.getDate()+'-'+tanisma.tarih.getMonth()+'-'+tanisma.tarih.getFullYear());
