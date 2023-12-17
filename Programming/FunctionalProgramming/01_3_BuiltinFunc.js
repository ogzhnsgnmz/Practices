/*
Fonksiyonel Programlamada Sık Kullanılan Built-in Fonksiyonlar

Fonksiyonel programlamanın temel prensiplerini uygulamayı kolaylaştırır ve işlemleri daha basit,
güvenilir ve anlaşılır hale getirmeye yardımcı olurlar. Bu fonksiyonlar, genellikle listeleri 
işlemek, dönüşüm işlemleri yapmak, filtreleme ve toplama gibi işlemleri kolaylaştırmak için kullanılır.
*/

// map Fonksiyonu: map fonksiyonu, bir dizi içindeki her öğeyi belirli bir işleme tabi tutarak yeni 
//bir dizi oluşturur. 

//Örneğin, her öğeyi iki katına çıkaran bir map işlemi:

const sayilar = [1, 2, 3, 4, 5];
const sonuclar = sayilar.map((sayi) => sayi * 2);
console.log(sonuclar); // [2, 4, 6, 8, 10]

// filter Fonksiyonu: filter fonksiyonu, bir dizi içindeki öğeleri belirli bir koşula göre filtreler
// ve koşulu karşılayanları içeren yeni bir dizi oluşturur. 

//Örneğin, yalnızca çift sayıları içeren bir dizi oluşturma işlemi:

const sayilar_1 = [1, 2, 3, 4, 5];
const ciftSayilar = sayilar_1.filter((sayi) => sayi % 2 === 0);
console.log(ciftSayilar); // [2, 4]

// reduce Fonksiyonu: reduce fonksiyonu, bir dizi içindeki öğeleri bir birleştirme işlemine tabi 
// tutarak sonuç olarak bir değer üretir. 
 
//Örneğin, bir dizideki tüm öğeleri toplama işlemi:

const sayilar_2 = [1, 2, 3, 4, 5];
const toplam = sayilar_2.reduce((accumulator, sayi) => accumulator + sayi, 0);
console.log(toplam); // 15