/*
Point-Free Style

Point-free style, bir fonksiyonel programlama yaklaşımıdır ve bir fonksiyonun argümanlarına
doğrudan başvurmadan, başka fonksiyonları kullanarak veya kombinasyonlarını oluşturarak bir
fonksiyonu tanımlama tekniğini ifade eder. Bu stil, daha özlü ve okunabilir kod yazmaya olanak
tanır ve fonksiyonel programlamanın prensiplerine dayanır.

Point-free stilin avantajları şunlar olabilir:

Daha Az Gürültü: Argümanların adlarını veya değişkenlerini kullanmadan, fonksiyonun amacına daha
fazla odaklanabilirsiniz. Bu, daha az "gürültülü" kod yazmanızı sağlar.

Okunabilirlik: Point-free stil, bir işlemin mantığini daha açık ve anlaşılır bir şekilde ifade
etmeye yardımcı olabilir.

Kombinasyon ve Bileşenler: Point-free stil, fonksiyonların kolayca birleştirilmesine ve
bileşenlere ayrılmasına olanak tanır. Bu, daha modüler ve tekrar kullanılabilir kod 
oluşturmaya yardımcı olur.

Paralelleştirme: Bazı durumlarda, point-free stil, işlemleri paralelleştirmeyi veya işlemi
daha verimli hale getirmeyi kolaylaştırabilir.

Point-free stil, özellikle fonksiyonel programlama dillerinde ve kütüphanelerinde yaygın
olarak kullanılır. Örneğin, JavaScript'te Lodash veya Ramda gibi kütüphaneler, point-free
stilin kullanımını teşvik eder.
*/

// Point-free stil örneği:

const add = (x) => (y) => x + y; // add fonksiyonu curried bir şekilde tanımlanmıştır

const increment = add(1); // increment, 1 eklemek için kullanılan bir fonksiyondur

const numbers = [1, 2, 3, 4, 5];

// reduce fonksiyonu ile point-free stil kullanarak toplamı hesaplama
const total = numbers.reduce(add, 0); // 0'dan başlayarak tüm sayıları toplar

console.log(total); // Sonuç: 15

/*
Bu örnekte, add fonksiyonu point-free stil kullanılarak tanımlanmıştır. increment 
fonksiyonu, add fonksiyonunu kullanarak 1 eklemek için kullanılan bir fonksiyon olarak
tanımlanır. Ayrıca, reduce fonksiyonu ile point-free stil kullanarak bir dizinin tüm
elemanlarını toplama işlemi gerçekleştirilir.
*/