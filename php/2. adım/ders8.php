<?php
$categories = 
[
  ['id' => 1,'parent'=> 0, 'ad'=> '1.0'],
  ['id' => 2,'parent'=> 0,'ad'=> '2.0'],
  ['id' => 3,'parent'=> 0,'ad'=> '3.0'],
  ['id' => 4,'parent'=> 1, 'ad'=> '1.1'],
  ['id' => 5,'parent'=> 1,'ad'=> '1.2'],
  ['id' => 6,'parent'=> 4,'ad'=> '1.1.1'],
  ['id' => 7,'parent'=> 4,'ad'=> '1.1.2'],
  ['id' => 8,'parent'=> 6,'ad'=> '1.1.1.1'],
  ["id"=> 9,"parent"=>7,"ad"=>"1.1.2.1"]
];

function kategoriListele($categories, $parent)
{
  $html = '';
  $html .= "<ul>";
  foreach ($categories as $kategori)
  {
    if ($kategori['parent'] == $parent)
    {
        $html .= '<li>' . $kategori['ad'];
        $html .= kategoriListele($categories, $kategori['id']);
        $html .= '</li>';
    }
  }
  $html .= "</ul>";
  return $html;
}
echo kategoriListele($categories,0);
///////////////////////////////////////////////////////
$arr = ['ad' => 'tayfun','soyad' => 'erbilen',
'sporlar' => [  'yuzme' => 'evet','kosma' => 'hayır',
        'savunma_sporlari' => [ 'jeetkunedo' => 'evet','judo' => 'hayır']]
];

function dizide_bul($dizi, $anahtar)
{
  foreach ($dizi as $key => $val)
  {
      if ($key == $anahtar){
          return $val;
      }
      if (is_array($val)){
          $sonuc = dizide_bul($val, $anahtar);
          if ($sonuc){
              return $sonuc;
          }
      }
  }
  return false;
}

print_r(dizide_bul($arr, 'savunma_sporlari'));
//////////////////////////////////////////////////////

function test2(){
  return 'test';
}

if (function_exists('test')){
  echo '<br>test fonksiyonu vardır';
} else {
  echo "<br>".'test fonksiyonu yoktur';
}

function kisalt($str, $limit = 10)
{
  $karakterSayisi = strlen($str);
  if ($karakterSayisi > $limit){
      if (function_exists('mb_substr')){
          $str = mb_substr($str, 0, $limit, 'utf8') . '..';
      } else {
          $str = substr($str, 0, $limit) . '..';
      }
  }
  return $str;
}

    //////////////////////////////////////////////////////////

?>