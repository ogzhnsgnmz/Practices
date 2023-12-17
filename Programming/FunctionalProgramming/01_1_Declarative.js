/*
Declarative

Declarative programlama, bir bilgisayar programının ne yapılacağını adım adım açıklamak yerine,
ne yapılması gerektiğini belirten ifadelerin kullanıldığı bir programlama paradigmasıdır. Bu
paradigma, fonksiyonel programlama ile yakından ilişkilidir, çünkü fonksiyonel programlama da
deklaratif bir yaklaşımı benimser.

Declarative programlamada, programcılar genellikle işlem sırasını ve ayrıntıları açıkça belirtmek
yerine, istedikleri sonucu tanımlayan ifadeleri kullanırlar. Bu tür ifadeler, genellikle bir
fonksiyonun nasıl çalıştığını değil, bir işlemin ne olduğunu açıklar. Özellikle fonksiyonel
programlamada, işlemler genellikle saf fonksiyonlar olarak ifade edilir. Saf fonksiyonlar, aynı
girdiye her zaman aynı çıktıyı üretir ve yan etkilere yol açmaz.

Örnek olarak, bir liste içindeki sayıların toplamını hesaplamak istediğinizi düşünün. Declarative
bir yaklaşımla, bu işlemi aşağıdaki gibi ifade edebilirsiniz:
*/

function toplam(liste) {
    return liste.reduce((acc, current) => acc + current, 0);
}

/*
Bu kod, reduce fonksiyonunu kullanarak bir başlangıç değeri (0) ile birlikte bir dizi elemanını toplar.
reduce fonksiyonu, bir akümülatör (acc) kullanarak her elemanı toplar ve sonuç olarak toplamı döndürür.
*/

const liste = [1, 2, 3, 4, 5];
const sonuc = toplam(liste);
console.log(sonuc); // Çıktı: 15

/*
Bu kod, verilen liste dizisini alır, elemanları toplar ve sonucu döndürür. Bu, deklaratif bir yaklaşımı
temsil eder, çünkü fonksiyonun ne yapması gerektiği (bir liste elemanlarını toplamak) açıkça ifade edilir,
ancak işlem ayrıntılarına girilmez.
*/

// Bir dizi içindeki çift sayıları filtreleyen ve toplayan declarative yöntemle gerçekleştirilen bir örnek:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num) {
    return num % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
const evenSum = evenNumbers.reduce((acc, num) => acc + num, 0);

console.log("Çift sayıların toplamı:", evenSum);