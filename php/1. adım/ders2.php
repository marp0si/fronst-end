<?php
    /*Mantıksal Operatörler     && - AND - Ve|| - OR - Ya da! - değilse*/
    $a = 5;
    $b = 5;
    //echo ($a == $b) && ($a + $b == 9);
    //echo ($a != $b) || ($a + $b == 14) || ($a - $b == 0);
    echo !($a != $b);

    //////////////////////////////////////////////////////////////////////
    /* Atama Operatörleri    
            %= modunu alarak değer atama
            . birleştirme operatörü
            .= birleştirerek değer atama
    */
    $a = 5;
    // $a += 5; // $a = $a + 5;
    // $a -= 5; // $a = $a - 5;
    // $a /= 5; // $a = $a / 5;
    //$a *= 5; // $a = $a * 5;
    $a %= 5; // $a = $a % 5;

    $ad = "sino";
    $soyad = "onis";

    //echo "Tayfun" . "Erbilen" . 24 . $ad . "tayfun" . $soyad;
    
    $ad .= " " . $soyad; // $ad = $ad . $soyad;
    echo $ad;

//////////////////////////////////////////////////////////////////////
    /*
        Artırma ve Azaltma Operatörleri
        $a++
        ++$a
        $a--
        --$a
    */

    $a = 5; //echo $a++;//echo $a;//echo ++$a;//echo $a--;//echo $a;
    echo --$a;
    $a = 15;
    $b = 4;

    //echo $a + $b;
    //echo $a - $b;
    //echo $a * $b;
    //echo $a / $b;
    //echo $a % $b;

    $a = 5;
    $b = 2;
    $c = 5;
    $d = 2;
    $e = 5;

    echo ($a + ($b * $c)) * ($d / $e);

?>