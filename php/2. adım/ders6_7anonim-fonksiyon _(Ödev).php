<?php
 $toplam;
$topla=function($a,$b){ $toplam=$a+$b."<br>"; echo $toplam ;};
//function topla($sayi1, $sayi2 ){return ($sayi1 + $sayi2);}
echo $topla(8,6);//14
echo $topla(2,6);//8

/* döngü gibi */
function say($sayi){echo $sayi; if ($sayi < 10){ say($sayi + 1);}}
say(1);
$arr = [["besiktas","galatasaray","fenerbahce"],["altay","karsiyaka"],"dsa","231"];
echo "<br>";
for ($i=0; $i < count($arr); $i++) 
{
    for ($j=0; $j < count($arr[$i]); $j++) {echo $arr[$i][$j]."\t";}
    echo "<br>";
  }

  foreach($arr as $key=>$value)
  {
    if(gettype($arr[$key])=="array")foreach($arr[$key] as $key2=>$value2){echo $arr[$key][$key2]."\t-\t";}
    else{ echo $arr[$key];}
  }
?>