/*
Fonksiyonel programlamada kullanılan "abstraction" ve "composition" kavramları, 
programlamada işlemleri soyutlama ve bu soyutlanmış işlemleri birleştirme yeteneklerini
ifade eder. Abstraction, karmaşık işlemleri basit ve tekrar kullanılabilir parçalara
bölmeyi ifade ederken, composition ise bu parçaları birleştirerek daha karmaşık işlemler
oluşturmayı ifade eder.
*/

/*
Öncelikle, iki işlemi soyutlayan iki farklı fonksiyon tanımlayalım. İlk fonksiyon,
bir sayının karesini alırken, ikinci fonksiyon ise bir sayının üç katını alır.
*/

function kareAl(sayi) {
  return sayi * sayi;
}

function ucKatiAl(sayi) {
  return sayi * 3;
}

/*
Bu iki fonksiyon, işlemleri soyutlamamıza olanak sağlar. Şimdi bu soyutlanmış işlemleri
birleştirme işlemine composition denir. Bu işlem, bir fonksiyonun çıktısını diğer bir
fonksiyonun girdisi olarak kullanarak gerçekleştirilir. 
*/

//Bunu yapmak için bir üçüncü fonksiyon tanımlayalım:

function kareAlVeUcKatiAl(sayi) {
  const kareSonucu = kareAl(sayi);
  return ucKatiAl(kareSonucu);
}

/*
Yukarıdaki fonksiyon, önce girdi sayısının karesini alır (kareAl fonksiyonunu kullanır)
ve ardından bu karesin üç katını alır (ucKatiAl fonksiyonunu kullanır). Bu, soyutlanmış
işlemleri birleştirerek daha karmaşık bir işlemi gerçekleştirir.
*/

// Örneğin:

const sayi = 5;
const sonuc = kareAlVeUcKatiAl(sayi);
console.log(sonuc); // 225

/*
Bu örnek, abstraction ve composition kavramlarının temel bir anlayışını sunar. Fonksiyonel
programlama, işlemleri bölmek, soyutlamak ve bu soyutlanmış işlemleri birleştirerek karmaşık
işlemler oluşturmak için güçlü bir araçtır.
*/