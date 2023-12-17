/*
Pure Functions (Saf Fonksiyonlar)

Pure fonksiyonlar, fonksiyonel programlamanın temel taşlarından biridir ve referans bütünlüğü 
(referential transparency) ilkesine dayalıdır. 
Pure fonksiyonlar, aşağıdaki ana özelliklere sahip fonksiyonlardır:
*/

/*
Referans Bütünlüğü (Referential Transparency): Bir fonksiyonlar referans bütünlüğünü sağlar, yani 
aynı girdiye sahip olduğunda her zaman aynı çıktıyı üretir. Bu, işlemin sonucunun hesaplanabilir 
ve öngörülebilir olduğu anlamına gelir.
*/

// Referans bütünlüğüne sahip bir fonksiyon
function add(a, b) {
  return a + b;
}

const result1 = add(3, 4); // Sonuç: 7
const result2 = add(3, 4); // Sonuç: 7

console.log(result1); // 7
console.log(result2); // 7  

/*
Yan Etkisizlik (Side Effect-Free): Pure fonksiyonlar, yan etkilere (side effects) izin vermez.
Yan etkiler, işlemin programın dış dünyasını etkilemesi anlamına gelir. Pure fonksiyonlar,
yalnızca girdilere dayanarak sonuç üretirler ve dış dünyayı değiştirmezler.
*/

// Yan etkisiz bir fonksiyon örneği
function add(a, b) {
  return a + b;
}

const result = add(3, 4); // Sonuç: 7

console.log(result); // 7

/*
Değişmezlik (Immutability): Pure fonksiyonlar, değişmez veri yapıları kullanmaya teşvik eder.
Bu, fonksiyonların girdi verilerini değiştirmemesi anlamına gelir. Verilerin değişmez olması, yan
etkileri sınırlar.
*/

// Değişmezlik örneği
const initialList = [1, 2, 3];

// Orijinal liste değişmeden yeni bir liste oluşturulur
function addToList(list, value) {
  return [...list, value];
}

const newList_1 = addToList(initialList, 4);

console.log(newList_1); // [1, 2, 3, 4]
console.log(initialList); // [1, 2, 3] (orijinal liste değişmemiştir)

/*
Yüksek Düzeyli Fonksiyonlar (Higher-Order Functions): Pure fonksiyonlar, yüksek seviyeli 
fonksiyonları (higher-order functions) kullanabilir. Yani, fonksiyonlar parametre olarak alınabilir
veya başka bir fonksiyondan dönebilir.
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
Girdiye Bağımlılık (Input Dependence): Pure fonksiyonlar, yalnızca girdilere bağlıdır ve dış
dünya durumlarından etkilenmezler. Bu, fonksiyonların izole edilmiş ve tekrar kullanılabilir
olmasını sağlar.
*/

// Girdiye bağımlı bir fonksiyon örneği
function calculateAreaOfRectangle(length, width) {
  return length * width;
}

const length = 5;
const width = 3;

const area = calculateAreaOfRectangle(length, width);

console.log(area); // 15