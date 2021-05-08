<?php

    /*  func_num_args()  func_get_args()  func_get_arg()*/

    function test()
    {
        echo func_num_args() . '<br>';//parametre sayısı
        print (func_get_args()) . '<br>';//dizi gibi parametlereri verir
        echo func_get_arg(2);//istenilen parametreyi verir
    }

    test('1.parametre', '2.parametre', '3.parametre', '4.parametre');

?>