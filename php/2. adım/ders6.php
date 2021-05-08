<?php

function test(){ return "test";}
    $a = test();

 function topla($sayi1, $sayi2 ){return ($sayi1 + $sayi2);}
    echo topla(8,4);//12

    $ad = 'sino';

    /*
        global
        $GLOBALS
    */

    function adsoyad($soyad)
    {
        // $GLOBALS['ad']
        global $ad;
        return $ad . ' ' . $soyad;
    }
    $yazi = "123456789012345";
    $soyad = "<br><b>".'bilgili'."<b>";
    //echo substr($yazi, 0, 10) . '..';

    function kisalt($str, $limit = 10)
    {
        $karakterSayisi = strlen($str);
        if ($karakterSayisi > $limit){
            $str = "<b>".substr($str, 0, $limit) . '<b>';
        }
        return $str;
    }
echo "<br>".kisalt($yazi,10);


///////////////////////////////////////////
//$test = function($par){ return 'test ' . $par;};echo $test();
 $arr = [
    function(){return '1. fonksiyon';},
    function(){return '2. fonksiyon';},
    function(){return '3. fonksiyon';}
];
echo "<br>".$arr[rand(0,2)]();



function filtrele($isim)
{
    global $soyad;
    return "<br>".$isim . ' ' . $soyad; 
}
echo filtrele("sinan");


?>