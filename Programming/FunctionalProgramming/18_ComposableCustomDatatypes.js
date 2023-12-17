/*
Composable Custom Datatypes (Birleştirilebilir Özel Veri Tipleri)

"Composable Custom Datatypes" terimi, özel veri tiplerinin ve bu tiplerin birleştirilebilir
(composable) olması gerektiği fikrini ifade eder. Fonksiyonel programlama, özel veri tiplerini
oluştururken ve kullanırken daha büyük sistemlerin bileşenlerini modüler ve birleştirilebilir
bir şekilde tasarlamayı teşvik eder. Bu, kodun okunaklılığını artırır, hata ayıklamayı
kolaylaştırır ve yeniden kullanılabilirliği artırır.

Composable Custom Datatypes'ın ana özellikleri şunlar olabilir:

Özel Veri Tipleri: Fonksiyonel programlamada, fonksiyonların ve verilerin birleştirilmesi, özel
veri tipleri oluşturmayı içerir. Bu özel tipler, projenizin gereksinimlerine uygun olarak
tasarlanabilir.

Fonksiyonel Operasyonlar: Bu özel tipler, sahip oldukları fonksiyonel operasyonlar (fonksiyonlar)
ile birleştirilebilirler. Örneğin, bir özel veri tipi, map, filter ve reduce gibi fonksiyonel
operasyonlarla kullanılabilir.

Bağımsızlık ve İzolasyon: Composable Custom Datatypes, diğer kod bloklarından izole edilmiş
ve bağımsızdır. Bu, kodun daha güvenilir ve test edilebilir olmasını sağlar.

Karmaşıklık Azaltma: Bu yaklaşım, kodun daha az karmaşık ve daha anlaşılır olmasını teşvik
eder. Her özel veri tipi, kendi iç mantığını taşır ve bu, kodun daha kolay anlaşılmasını sağlar.

Yeniden Kullanılabilirlik: Composable Custom Datatypes, farklı projelerde ve bağlamlarda yeniden
kullanılabilir. Bu, yazılım geliştirme sürecini hızlandırır ve tekrar kullanılabilir kodun
oluşturulmasını kolaylaştırır.

Örnek bir Composable Custom Datatype, bir liste veri yapısı olabilir. Bu liste veri yapısı,
özel olarak tasarlanmış fonksiyonel operasyonlar ile birleştirilebilir ve başka veri tipleri veya
fonksiyonlarla birleştirilerek daha karmaşık fonksiyonelliğin oluşturulmasına olanak tanır.

Özetle, Composable Custom Datatypes, fonksiyonel programlama paradigması içinde veri yapılarının
ve fonksiyonların birleştirilebilir ve modüler bir şekilde tasarlandığı bir yaklaşımı ifade eder.
Bu, kodun daha okunaklı, sürdürülebilir ve genel olarak daha iyi bir şekilde örgütlenmesine
yardımcı olur.
*/

// Composable Custom Datatypes ile ilgili bir örnek kod

// Özel bir veri türü oluşturma (Composable Custom Datatype)
function MyData(value) {
    this.value = value;
}
  
// Özel veri türü için bir dönüşüm fonksiyonu oluşturma
MyData.prototype.map = function (fn) {
    return new MyData(fn(this.value));
};
  
// Özel veri türü için bir zincirleme fonksiyon oluşturma
MyData.prototype.chain = function (fn) {
    return fn(this.value);
};
  
// Örnek kullanım
const data = new MyData(5);
  
const sonuc = data
    .map(x => x * 2)
    .map(x => x + 10)
    .chain(x => {
    if (x % 2 === 0) {
        return `Çift sayı: ${x}`;
    } else {
        return `Tek sayı: ${x}`;
    }
});
  
console.log(sonuc); // "Çift sayı: 20"

/*
Yukarıdaki örnekte, MyData adında özel bir veri türü oluşturulmuştur. Bu veri türü, map ve
chain gibi yöntemlerle veriyi dönüştürme yeteneği sağlar.

map: Veriyi bir dönüşüm fonksiyonu ile dönüştürmek için kullanılır.
chain: Veriyi başka bir işleme zinciri ile dönüştürmek veya manipüle etmek için kullanılır.
Örneğin, data adlı özel veri türüne başlangıç değeri 5 ile başlarız. Ardından, map ile bu
değeri iki katına çıkarırız, sonra 10 ekleriz. Son olarak, chain ile sonucu kontrol ederek
çift veya tek bir sayı olduğuna bağlı olarak farklı bir çıktı oluştururuz.

Bu, Composable Custom Datatypes kullanarak veri dönüşümü ve işleme işlemlerini birleştirmenin
gücünü gösteren bir örnektir.
*/