/*
Function Accepting Functions

"Function Accepting Functions" terimi, bir fonksiyonun diğer fonksiyonları parametre olarak kabul 
ettiği bir programlama konseptini ifade eder. Bu, higher-order functions (yüksek düzeyli fonksiyonlar)
kavramı altında bulunur. Higher-order functions, bir programlama dilinde fonksiyonları veri olarak ele
almanın ve fonksiyonları başka fonksiyonlara veya değişkenlere aktarmanın bir yoludur.

Bir fonksiyon, başka bir fonksiyonu parametre olarak alabilir ve bu işlem, fonksiyonu daha esnek ve modüler
hale getirir. Ayrıca, bu tür işlemler, fonksiyonel programlamada yaygın olarak kullanılır. 

basit bir örnek:
*/
// Bir fonksiyonu parametre olarak alan bir yüksek düzeyli fonksiyon
function processData(data, processorFunction) {
  return processorFunction(data);
}

// İşleme fonksiyonu örneği
function square(x) {
  return x * x;
}

// processData fonksiyonunu kullanma
const input = 5;
const result = processData(input, square); // square fonksiyonunu processData'a parametre olarak ilettik

console.log(result); // Sonuç: 25
/*
Bu örnekte, processData adlı bir yüksek düzeyli fonksiyon, bir veri ve bir işlem fonksiyonunu
kabul eder. Daha sonra, bu işlem fonksiyonunu aldığı veri üzerine uygular. Bu, işlem fonksiyonunu parametre
olarak alarak fonksiyonun genel davranışını özelleştirmemize olanak tanır. Bu tür fonksiyonlar, fonksiyonel
programlamada yaygın olarak kullanılır ve daha genel ve yeniden kullanılabilir kod yazmayı teşvikeder.
*/

// Fonksiyonel programlamada Function Accepting Functions örneği:

// İşlem fonksiyonunu parametre olarak kabul eden bir yüksek düzeyli fonksiyon
function processArray(arr, processFunction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(processFunction(arr[i]));
  }
  return result;
}

// İşlem fonksiyonu örneği: Bir sayının karesini alır
function square(x) {
  return x * x;
}

// İşlem fonksiyonu örneği: Bir sayının iki katını alır
function double(x) {
  return x * 2;
}

const numbers = [1, 2, 3, 4, 5];

// processArray kullanarak bir dizi işlemi
const squaredNumbers = processArray(numbers, square);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

const doubledNumbers = processArray(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

/*
Bu örnekte, processArray adında bir yüksek düzeyli fonksiyon, bir dizi ve bir işlem fonksiyonunu
kabul eder. Dizi elemanlarını dolaşırken, her elemanı işlem fonksiyonuna gönderir ve sonuçları yeni bir
diziye ekler. square ve double fonksiyonlarını, işlem fonksiyonu örnekleridir ve her biri farklı bir 
işlem gerçekleştirir.

Bu örnek, işlem fonksiyonlarını parametre olarak kabul eden yüksek düzeyli bir fonksiyonun nasıl 
kullanılabileceğini gösterir. Bu yaklaşım, kodunuzu daha modüler ve yeniden kullanılabilir hale
getirir ve farklı işlemleri aynı yüksek düzeyli fonksiyon kullanarak gerçekleştirmenizi sağlar.
*/