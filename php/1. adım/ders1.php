<?php
/*
        Değişkenler;
            $ işareti ile tanımlanırlar.
            Harf ve ya _ karakteri ile başlarlar.
            Sayı ile başlayamazlar.
            Büyük-küçük harfe duyarlıdırlar. (case-sensitive)
     
    */
    $name="marp";
    $sayi=15;
    echo $name;
        /*
        Veri Türleri (Data Types)
            String "tayfun erbilen" 'tayfun erbilen'
            Integer 500, 200
            Float (Double) 5.5, 7.2
            Boolean (true, false)
            Array (dizi)
            Object (Nesne)
            NULL
        gettype()
    */

    $string = "Kappa";
    $int = 500;
    $float = 5.5;
    $bool = false;
    $array = array();
    $object = new stdClass;
    $null = NULL;
    echo gettype($null);

    /*
        Sabit Değişkenler;
            define() fonksiyonu ile tanımlanır
    */
    $name = "Kappa";
    //echo $tayfun;

    define("tay", "tayin");
    //define("Tayfun", "tayfun erbilen2");  
     echo $name; echo tay;
        
     /*
        Sihirli Karakterler  \t \n \\ \$ \' \"
    */
    $test = "tayfun\t\t\t\nerbilen  \\test\ ";
   
    //echo "\$ad değişkeni $name değerine eşittir";
    //echo "Tayfun dedi ki: \"ben korkmam\"..";
    //echo 'Tayfun dedi ki: \'ben korkmam\'..';
    echo $test;
    ?>