/*
Partial application

Partial application, bir fonksiyonun tüm argümanlarını aynı anda sağlamak yerine, bu argümanları 
daha az sayıda bir argümanla çağırabilmenizi sağlayan bir tekniktir. Yani, bir fonksiyonun yalnızca
bir kısmı için argümanlar sağlamak ve daha sonra diğer argümanları sağlamak için kullanılır. Bu,
fonksiyonları daha modüler hale getirir ve fonksiyonel programlamanın bir temel taşıdır.

Partial application ile currying sıklıkla karıştırılır. Currying, bir fonksiyonu sırayla tek bir
argüman alan bir dizi fonksiyona dönüştürmek anlamına gelir. Partial application ise, bir fonksiyonun
tüm argümanlarını tek seferde sağlamak yerine, yavaşça argümanları sağlama yeteneğini ifade eder.

Örnek bir JavaScript kullanarak partial application:
*/

// İki argüman alan bir fonksiyon
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

// Partial application kullanarak yeni fonksiyon oluşturma
function greetHello(name) {
  return greet('Hello', name);
}

const greetHi = greetHello('Alice');
const greetHola = greetHello('Bob');

greetHi();    // "Hello, Alice!"
greetHola();  // "Hello, Bob!"

/*
Bu örnekte, greet adlı bir fonksiyon, greeting ve name adlı iki argüman alır. greetHello adlı bir 
partial application fonksiyonu, greet fonksiyonunun sadece greeting argümanını belirler. Sonuç olarak,
greetHello fonksiyonu yalnızca name argümanı ile çağrılabilen bir fonksiyon haline gelir.

Partial application, fonksiyonların daha esnek ve yeniden kullanılabilir hale getirir ve işlem sırasında
yalnızca belirli argümanlar gerektiğinde kullanışlıdır.
*/

// Fonksiyonel programlamada Partial Application örneği:

// İki argüman alan bir fonksiyon
function add(x, y) {
  return x + y;
}

// Partial application kullanarak yeni bir fonksiyon oluşturma
function partiallyApply(fn, arg1) {
  return function(arg2) {
    return fn(arg1, arg2);
  };
}

// Yeni bir fonksiyon oluştur
const add3 = partiallyApply(add, 3);

// Oluşturulan fonksiyonu kullanma
const result = add3(7); // Sonuç: 10

console.log(result);

/*
Bu örnekte, add adlı bir fonksiyon vardır ve partiallyApply adlı bir yardımcı fonksiyon, bir 
fonksiyon ve bir argüman alır. partiallyApply fonksiyonu, bu argümanı alan ve eksik olan bir sonraki
argümanı bekleyen bir fonksiyon döndürür.

Daha sonra, add3 adlı bir yeni fonksiyon oluşturmak için partiallyApply fonksiyonunu kullanırız.
Bu yeni fonksiyon, aslında add fonksiyonunun bir versiyonudur ve ilk argümanı (3) eksik olan bir
fonksiyon olarak düşünülebilir. Ardından add3 fonksiyonunu çağırarak eksik olan ikinci argümanı (7)
sağlarız ve sonucu alırız.

Partial application, fonksiyonları daha modüler ve esnek hale getirir ve gerektiği gibi argümanları 
sağlama yeteneği sunar.
*/