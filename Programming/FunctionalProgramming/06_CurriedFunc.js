/*
Curried Function

Curried bir fonksiyon, birden fazla argüman alan bir fonksiyonun, bu argümanları sırayla bir dizi 
fonksiyona dönüştüren bir tekniktir. Bu, bir fonksiyonun her bir argümanı tek tek alması ve her 
biri bir sonraki argümanı bekleyen bir fonksiyon döndürmesi anlamına gelir. Currying, fonksiyonları
daha modüler ve esnek hale getirir ve fonksiyonel programlamanın bir temel taşıdır.

Currying işlemi, aşağıdaki şekilde ifade edilebilir:

1. Bir fonksiyon alın.
2. Bu fonksiyon bir argüman alır ve bir sonraki argümanı bekleyen bir fonksiyon döndürür.
3. Bu işlem, her argüman için tekrarlanır ve sonunda orijinal fonksiyonun sonucu elde edilir.
*/

// Bir curried fonksiyon örneği
function add(x) {
  return function(y) {
    return x + y;
  }
}

// İlk argümanı alarak bir fonksiyon döndürür
const add5 = add(5);

// İkinci argümanı alarak sonucu elde eder
const result = add5(3); // Sonuç: 8

console.log(result);

/*
Bu örnekte, add adlı bir fonksiyon, ilk argümanı (x) alır ve bu argümanı alan ve ikinci
argümanı (y) bekleyen bir fonksiyon döndürür. İlk argümanı aldıktan sonra, ikinci argümanı alarak
sonucu elde edebiliriz. Bu, currying işlemi ile bir fonksiyonun sıralı argümanlarını işlemek için
kullanılabileceğini gösterir.
*/

// Fonksiyonel programlamada bir curried fonksiyon örneği

// İki argüman alan bir fonksiyon
function multiply(x, y) {
  return x * y;
}

// Bu fonksiyonu curried bir fonksiyona dönüştüren bir yardımcı fonksiyon
function curriedMultiply(x) {
  return function(y) {
    return x * y;
  }
}

// İlk argümanı alarak curriedMultiply fonksiyonunu kullanma
const double = curriedMultiply(2);

// İkinci argümanı alarak sonucu elde etme
const result_1 = double(3); // Sonuç: 6

console.log(result_1);

/*
Bu örnekte, multiply adında iki argüman alan bir fonksiyon ve curriedMultiply adında bu 
fonksiyonu curried bir fonksiyona dönüştüren bir yardımcı fonksiyon bulunmaktadır. curriedMultiply
fonksiyonu, ilk argümanı (x) alır ve bu argümanı alan ve ikinci argümanı (y) bekleyen bir fonksiyon
döndürür.

Daha sonra, double adında bir fonksiyon oluşturmak için curriedMultiply'a ilk argümanı (örneğin, 2)
sağlarız. Sonra double fonksiyonunu çağırarak ikinci argümanı (örneğin, 3) sağlarız ve sonucu elde ederiz.
*/