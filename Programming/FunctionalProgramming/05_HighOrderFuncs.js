/*
Higher-order Functions (Yüksek Düzeyli Fonksiyonlar)

Higher-order functions (yüksek düzeyli fonksiyonlar), bir programlama dilinde fonksiyonları parametre
olarak alabilen veya fonksiyonlardan dönebilen fonksiyonlardır. Bu, fonksiyonları başka fonksiyonlara
işlemek veya fonksiyonları birer veri olarak kullanmak için kullanılır. Higher-order functions,
fonksiyonel programlamanın temel taşlarından biridir ve kodun daha soyut ve modüler hale
gelmesine olanak tanır.
*/

// Yüksek düzeyli fonksiyon örneği: Fonksiyonu parametre olarak alan bir fonksiyonl
function applyOperation(x, y, operation) {
  return operation(x, y);
}

// Toplama işlemini temsil eden bir fonksiyon
function add(a, b) {
  return a + b;
}

// Çarpma işlemini temsil eden bir fonksiyon
function multiply(a, b) {
  return a * b;
}

// applyOperation fonksiyonunu kullanarak işlemleri uygulama
const result1_1 = applyOperation(3, 4, add);       // Sonuç: 7 (3 + 4)
const result2_1 = applyOperation(3, 4, multiply);  // Sonuç: 12 (3 * 4)

console.log(result1_1);
console.log(result2_1);

/*
Containers, functors, lists ve streams, bir programlama dilinde higher-order functions 
kullanarak verileri işlemek ve dönüştürmek için yaygın olarak kullanılan yapıları temsil
eder. İşte bu kavramların kısa açıklamaları ve örnekleri:
*/

/*
Containers: Containerlar, verileri bir yapı içinde gruplamak için kullanılan veri yapılarıdır.
Diziler, nesneler ve diğer karmaşık veri yapıları genellikle birer containerdır. Higher-order
functions, bu containerlardaki verilere uygulanabilir, filtrelenir veya dönüştürülür.
*/

// Dizi (Array) bir tür veri konteyneridir
const numbers = [1, 2, 3, 4, 5];

// Dizideki verilere erişme
console.log(numbers[0]); // 1
console.log(numbers[2]); // 3

// Dizinin uzunluğu
console.log(numbers.length); // 5

// Dizi elemanlarını dolaşma (örneğin, for döngüsü kullanarak)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach ile dizi elemanlarını dolaşma
numbers.forEach(function(number) {
  console.log(number);
});

/*
Functors: Functorlar, higher-order functions ile kullanılan ve bir map işlemini destekleyen
nesneleri temsil eder. Bir map işlemi, bir container içindeki her elemanı işlemek ve yeni bir
container oluşturmak için kullanılır. Bu, verileri dönüştürmek ve dönüştürdüğünüz verileri
yeni bir container içinde saklamak için kullanışlıdır.
*/

// Bir functor örneği
class MyFunctor {
  constructor(value) {
    this.value = value;
  }
  
  // Bir map işlemi gerçekleştiren metot
  map(fn) {
    return new MyFunctor(fn(this.value));
  }
}
  
// Functor'ı kullanarak bir değeri iki katına çıkarma
const originalValue = 5;

const myFunctor = new MyFunctor(originalValue);

const doubledFunctor = myFunctor.map(value => value * 2);

console.log(doubledFunctor.value); // 10

/*
Lists: Listeler, sıralı veri öğelerini içeren containerlardır. Higher-order functions
kullanarak listeler üzerinde işlem yapabilirsiniz. Örneğin, bir liste üzerinde filtreleme,
haritalama veya katlama (fold) işlemleri gerçekleştirebilirsiniz.
*/

// Bir liste (array) örneği
const fruits = ["elma", "armut", "muz", "çilek"];

// Listede bir öğeye erişme
console.log(fruits[1]); // "armut"

// Liste elemanlarını dolaşma (örneğin, forEach ile)
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Liste elemanlarını filtreleme (örneğin, filter kullanarak)
const filteredFruits = fruits.filter(function(fruit) {
  return fruit.length > 4;
});

console.log(filteredFruits); // ["elma", "çilek"]

// Liste elemanlarını haritalama (örneğin, map kullanarak)
const upperCaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});

console.log(upperCaseFruits); // ["ELMA", "ARMUT", "MUZ", "ÇILEK"]

/*
Streams: Streams, sürekli veri akışlarını temsil eder. Stream'ler, giriş akışlarından veya
diğer kaynaklardan verileri sürekli olarak alır ve bu verileri işlemek için higher-order
functions kullanabilir. Bu, verileri sürekli olarak işlemek ve dönüştürmek için kullanışlıdır.
*/

// Node.js dosya okuma stream örneği

const fs = require('fs');

// Dosya okuma stream'i oluştur
const readStream = fs.createReadStream('dosya.txt', 'utf-8');

// Veri okundukça ne yapılacağını belirle
readStream.on('data', (data) => {
  console.log(`Okunan veri: ${data}`);
});

// Okuma işlemi tamamlandığında ne yapılacağını belirle
readStream.on('end', () => {
  console.log('Okuma tamamlandı.');
});

// Okuma sırasında hata oluştuğunda ne yapılacağını belirle
readStream.on('error', (err) => {
  console.error(`Hata oluştu: ${err.message}`);
});

/*
Higher-order functions ve bu yapılar, veri işleme ve dönüştürme süreçlerini daha soyut ve
esnek bir şekilde yönetmenizi sağlar. Bu, kodun daha okunaklı ve modüler hale gelmesine
yardımcı olur ve programın daha iyi bir şekilde sürdürülebilir olmasına olanak tanır.
*/