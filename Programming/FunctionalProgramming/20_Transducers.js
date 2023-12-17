/*
Transducers

Transducers, fonksiyonel programlamanın bir kavramıdır ve dizi işlemleri (array operations)
gibi veri koleksiyonları üzerinde dönüşüm ve filtreleme işlemlerini daha etkili ve yeniden
kullanılabilir hale getirmek için kullanılır. Transducers, özellikle dizi işlemleri gibi
yüksek miktarda veri işleme gerektiren durumlar için faydalıdır.

Transducers'in temel özellikleri şunlar olabilir:

Dönüşüm ve Filtreleme: Transducers, veri koleksiyonları üzerinde dönüşüm (mapping) ve filtreleme
(filtering) işlemlerini temsil eder. Özellikle liste işlemleri gibi fonksiyonlarda kullanılırlar.

Yeniden Kullanılabilirlik: Bir transducer, birden çok dizi işlemine uygulanabilir ve her bir 
işlem için yeniden tanımlamaya gerek kalmadan kullanılabilir.

Performans ve Bellek Verimliliği: Transducers, işlemleri ara sonuçları geçici veri yapılarına
depolamadan gerçekleştirebilir, bu da performans ve bellek verimliliğini artırır.

Kompozisyon: Birden çok transducer bir araya getirilebilir ve işlem sırası belirlenerek
karmaşık işlemler oluşturulabilir. Bu, fonksiyonel programlama prensipleriyle uyumlu bir şekilde
işlem sırasını ve sıralamasını kontrol etmenizi sağlar.

Veri Bağımsızlığı: Transducers, veri türlerinden bağımsızdır. Aynı transducer'ı farklı veri
türlerine (örneğin, dizilere veya haritalara) uygulayabilirsiniz.

Transducer'lar, Clojure gibi bazı dillerde doğrudan desteklenir. Örneğin, Clojure'da map,
filter ve reduce gibi transducer fonksiyonları mevcuttur. Aynı zamanda JavaScript'te de 
transducer kütüphaneleri bulunur, ve bu kütüphaneler kullanılarak transducer'ları 
dizilere (arrays) uygulamak mümkündür.

Transducer'lar, veri koleksiyonlarını işlerken işlem sırası, bellek kullanımı ve performans
gibi konularda daha fazla kontrol ve esneklik sağlar. Bu nedenle, büyük veri kütlelerini
işlerken veya veri manipülasyonu gerektiren diğer senaryolarda kullanışlıdır.
*/

// Bir dizi veri
const numbers = [1, 2, 3, 4, 5];

// Bir transducer oluşturma
const transducer = (mapping, filtering) => (reducer) => {
  return (accumulator, value) => {
    if (filtering(value)) {
      return reducer(accumulator, mapping(value));
    }
    return accumulator;
  };
};

// Mapping ve filtering fonksiyonları
const double = (x) => x * 2;
const isEven = (x) => x % 2 === 0;

// Transducer'ı kullanarak dizi üzerinde işlem yapma
const transduce = (transducer, reducer, initial, data) => {
  return data.reduce(transducer(reducer), initial);
};

// Son sonuç
const result = transduce(
  transducer(double, isEven),
  (accumulator, value) => accumulator + value,
  0,
  numbers
);

console.log(result); // 12 (2*2 + 4*2)

/*
Bu örnekte, numbers adında bir dizi veri oluşturduk ve ardından bir transducer tanımladık.
Transducer, bir mapping işlemini ve bir filtering işlemini içerir. Mapping işlemi, verileri
dönüştürmek için kullanılırken, filtering işlemi verileri filtrelemek için kullanılır.

Daha sonra, transduce adında bir fonksiyon oluşturduk. Bu fonksiyon, transducer'ı, bir başlangıç değeri,
veriyi ve bir reducer işlemini alır ve verileri transducer ile işler. Sonuç olarak, transducer'ı
kullanarak numbers dizisindeki çift sayıları seçip her birini iki katına çıkardık ve sonucu
hesapladık.

Sonuç olarak, transducers, verileri etkili bir şekilde dönüştürmek ve işlemek için kullanılan bir
yapıdır ve veri işleme akışını daha modüler ve optimize hale getirmenize yardımcı olabilir.
*/