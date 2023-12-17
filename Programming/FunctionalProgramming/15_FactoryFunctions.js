/*
Factory Functions (Fabrika Fonksiyonları)

Factory Functions (Fabrika Fonksiyonları), JavaScript'te nesneleri oluşturmak için kullanılan
bir tasarım desenidir. Bu desen, nesnelerin oluşturulmasını ve başlatılmasını daha esnek hale
getirir ve nesneleri oluşturmak için bir fonksiyon kullanılmasını sağlar. Factory Functions,
özellikle nesneye dayalı programlamada (OOP) ve kod organizasyonunda kullanışlıdır.

Factory Functions'ın temel özellikleri şunlar olabilir:

Nesne Oluşturma: Factory Functions, yeni nesneler oluşturmak için kullanılır. Bu nesneler,
belirli bir yapıya veya özelliklere sahip olabilir.

Esneklik: Factory Functions, nesneleri oluşturmak için bir şablon gibi kullanılabilir ve
farklı özelliklere sahip nesneler oluşturmak için kullanılabilir.

Kapsülleme: Factory Functions, nesnelerin iç detaylarını gizler ve sadece belirli özelliklere
veya metotlara erişim sağlar.

Bağımsızlık: Her nesne, kendi iç durumunu ve davranışını yönetir, bu da nesnelerin
birbirlerinden bağımsız çalışmasını sağlar.

Özelleştirme: Factory Functions, nesneleri özelleştirmek için parametreler alabilir ve bu
parametrelere göre nesneleri farklılaştırabilir.
*/

// Bir Factory Function örneği
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello: function() {
      console.log(`Merhaba, benim adım ${this.name} ve ben ${this.age} yaşındayım.`);
    }
  };
}
  
// Factory Function kullanarak nesne oluşturma
const person1 = createPerson("Ahmet", 30);
const person2 = createPerson("Ayşe", 25);

person1.sayHello(); // Merhaba, benim adım Ahmet ve ben 30 yaşındayım.
person2.sayHello(); // Merhaba, benim adım Ayşe ve ben 25 yaşındayım.

/*
Bu örnek, createPerson adlı bir Factory Function kullanarak nesneler oluşturur. Her nesne,
name ve age özelliklerine sahiptir ve sayHello adlı bir metot kullanarak kendini tanıtır.
*/

/*
Factory Functions, JavaScript'te nesneleri oluşturmanın yaygın bir yoludur ve daha fazla 
özelleştirme ve esneklik sağlar. Bu nedenle, nesne oluşturmayı ve organizasyonu daha iyi 
kontrol etmek istediğinizde kullanışlıdır.
*/