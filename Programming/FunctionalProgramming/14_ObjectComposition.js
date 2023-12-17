/*
Object Composition

Object Composition, yazılım geliştirme ve programlama paradigmaları içinde önemli bir kavramdır.
Bu kavram, bir yazılım sistemi veya programın farklı bileşenlerini (nesneleri veya modülleri)
bir araya getirerek daha büyük ve karmaşık sistemler oluşturmayı ifade eder. Object Composition,
yazılımın modülerliğini artırmak ve tekrar kullanılabilir kod oluşturmak için yaygın olarak
kullanılan bir yöntemdir. Özellikle pure (saf) fonksiyonlar ve veri bağlantılı nesnelerle 
çalışırken, fonksiyonel programlama tarafından teşvik edilen bir yaklaşımdır.

Object Composition'ın ana özellikleri şunlar olabilir:

Modülerlik: Object Composition, yazılımı daha küçük ve bağımsız bileşenlere böler. Her bir bileşen,
belirli bir fonksiyonu veya sorumluluğu yerine getirir. Bu, kodun daha okunabilir ve bakımı daha
kolay hale gelmesini sağlar.

Tekrar Kullanılabilirlik: Bileşenlerin tekrar kullanılabilir olması, yazılım geliştirme sürecini
hızlandırır. Aynı bileşenler farklı projelerde veya farklı bileşenlerle birleştirilerek kullanılabilir.

Esneklik: Object Composition, yeni bileşenlerin kolayca eklenmesine ve mevcut bileşenlerin
değiştirilmesine olanak tanır. Bu, yazılımın gereksinimlere uyum sağlama yeteneğini artırır.

Bağımsızlık: Her bir bileşen, kendi iç mantığına sahiptir ve diğer bileşenlerden bağımsız çalışabilir.
Bu, bileşenlerin izole edilmesini ve test edilmesini kolaylaştırır.

Müşterek Arabirimler: Object Composition, bileşenler arasında müşterek arabirimler (interfaces)
kullanarak iletişimi sağlar. Bu, bileşenlerin birbirleriyle iletişim kurmasını ve birbiri yerine
kullanılmasını kolaylaştırır.
*/

// Aşağıda, basit bir Object Composition örneği bulunmaktadır:

// Temel fonksiyonel bileşenler (pure functions) oluşturma
function multiplyByTwo(number) {
  return number * 2;
}

function addTen(number) {
  return number + 10;
}

function subtractFive(number) {
  return number - 5;
}

// Object Composition kullanarak fonksiyonel bileşenleri birleştirme
function combineFunctions(input, ...funcs) {
  return funcs.reduce((result, func) => func(result), input);
}

// Örnek kullanım
const startingNumber = 5;
const result = combineFunctions(startingNumber, multiplyByTwo, addTen, subtractFive);

console.log(result); // 15

/*
Yukarıdaki örnekte, multiplyByTwo, addTen ve subtractFive gibi pure (saf) fonksiyonel bileşenler
tanımlanmıştır. Bu bileşenler yalnızca girdiye bağlı olarak sonuç üreten fonksiyonlardır.

Daha sonra, combineFunctions adlı bir fonksiyon, bu fonksiyonel bileşenleri bir araya getirmek için
kullanılır. Bu fonksiyon, bir başlangıç değeri ve fonksiyonları alır, bu fonksiyonları sırayla 
uygular ve sonucu döndürür.

Örneğin, startingNumber değeri 5'tir ve combineFunctions ile bu değere sırasıyla multiplyByTwo,
addTen ve subtractFive fonksiyonlarını uygularız. Sonuç olarak, bu fonksiyoneların kombinasyonu
sonucunda 15 elde edilir.

Bu örnek, Object Composition'un fonksiyonel programlama içinde nasıl kullanılabileceğini
göstermektedir. Bir dizi basit fonksiyonel bileşen, daha karmaşık fonksiyonelliği oluşturmak için 
birleştirilir.
*/