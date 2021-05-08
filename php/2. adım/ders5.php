<?php  
for($i=1;$i<=10;$i++)
{if($i==10)echo $i."<br>";
else echo $i."-"."<br>";}
$dizi=[12,23,45,12,34];for($i=1;$i<=count($dizi)-1;$i++){if ($i==9)continue;echo $dizi[$i]."-";}
//////////////////////////////////
/*
foreach (ARRAY as KEY => VALUE){}
*/
echo "<br>" ;
$sayilar = [1,2,3,4,5,6,7,8,9,10];
foreach($sayilar as $sayi){echo $sayi . '<br>';}
$uyeDetay = ['ad' => 'Tayfun','soyad' => 'Erbilen','yas' => 24];
foreach($uyeDetay as $key => $val){echo $key . ':' . $val . '<br>';}
///////////////////////////////////
/* while(KOŞUL TRUE){ }        */
    
    $a=0;
    while($a<=5){echo $a."<br>";$a++;}
    //while($a <= 5){echo $a . "<br>";$a++}; 
    //do { echo $a . '<br>';  $a++; } while($a <= 5);
   
    
?>