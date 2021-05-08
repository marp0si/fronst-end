<?php
    /*
        Dizi Tanımlama
            1- array()
            2- []
    */

    $kimlik = array('ad' => "dsadas",'soyad' => "Easdrbilen",'meslek' => "saddsasad",'yas' => 24);
    $kimlik2 = [
        'ad' => 'sino',
        'soyad' => 'bil',
        'meslek' => 'dsadas',
        'yas' => 24
    ];

    $kimlik = array(1,2,3);
    $kimlik2 = [1,2,3];
    print_r  ($kimlik);
   echo $kimlik[1];


    //echo $kimlik['meslek'];
    //print_r($kimlik2);

///////////////////////////////////////////////////////////////

        //echo $kategoriler['siteler']['egitim'][1];
    //print_r($kategoriler);
    $kategoriler = [
        'siteler' => [
            'e-ticaret' => [
                'sahibinden',
                'n11',
                'hepsiburada',
                'gittigidiyor'
            ],
            'egitim' => [
                'udemy',
                'prototurk',
                '93academy'
            ]
        ]
            ];   

    //////////////////////
    define('UYE', [
        'ad' => 'sino',
        'soyad' => 'ads',
        'meslek' => 'dsadsa',
        'yas' => 24,
        'sporlar' => [
            'jet kune do',
            'bisiklet sürmek'
        ]
    ]);
    echo UYE['sporlar'][1];
    ?>