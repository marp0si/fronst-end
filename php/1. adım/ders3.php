<?php
    $a = 5;
    /*
    Switch ($a){
        case 5:
            echo '1';
        break;
        case 6:
            echo '2';
        break;
        default:
            echo '3';
        break;
    }
    switch($a):
        case 5:
            echo '1';
        break;
        case 6:
            echo '2';
        break;
        default:
            echo '3';
        break;
    endswitch;
    */

    /*
    if ($a == 5){
        echo '1';
    } elseif ($a == 6){
        echo '2';
    } else {
        echo '3';
    }

    if ($a == 5):
        echo '1';
    elseif ($a == 6):
        echo '2';
    else:
        echo '3';
    endif;
    */

?>

<?php if ($a == 5): 
    echo "a 5e eşittir";
 endif; ?>

<?php

 
/*
        Karşılaştırma Operatörleri
            == eşittir
            != eşit değildir
            > büyüktür
            < küçüktür
            >= büyükse ya da eşitse
            <= küçükse ya da eşitse
            === denkse
            !== denk değilse
    */

    $a = 5;
    $b = "5";

    //echo $a == $b;
    //echo $a != $b;
    //echo $a < $b;
    //echo $a > $b;
    //echo $a <= $b;
    //echo $a >= $b;
    //echo $a === $b;
    echo $a !== $b;

?>


