/*
Abstract Data Types (Soyut Veri Tipleri - ADT)

Abstract Data Types (Soyut Veri Tipleri - ADT), programlama ve yazılım mühendisliği alanlarında
kullanılan bir kavramdır. ADT'ler, veri yapısının mantıksal özelliklerini ve operasyonlarını
tanımlayan bir soyutlama seviyesini ifade eder. Bu, veri yapısının nasıl kullanılacağını ve
hangi işlemlerin yapılabilir olduğunu belirler, ancak iç detayları gizler.

ADT'ler, veri yapılarını bir arayüz (interface) ve bu arayüzü uygulayan bir veri yapısı olarak
düşünmenizi sağlar. Kullanıcılar, sadece veri yapısının arayüzü ile etkileşimde bulunur ve iç
detaylarına (verinin nasıl depolandığı veya işlendiği gibi) dikkat etmek zorunda kalmaz. Bu,
yazılım geliştirme sürecinde tasarım, bakım ve yeniden kullanılabilirlik açısından önemli
avantajlar sunar.

Örnek ADT'ler şunları içerebilir:

Stack (Yığın): Stack ADT'si, bir veri yapısının en üstüne ekleme (push) ve en üstünden
çıkarma (pop) işlemlerini tanımlar. Örnek uygulamalar arasında geri alma işlemleri ve parantez
dengeleme yer alır.

Queue (Sıra): Queue ADT'si, veri yapısına öğelerin önünden ekleme (enqueue) ve arkasından
çıkarma (dequeue) işlemlerini tanımlar. İşlem sırasına göre işlemlerin yapılması gereken
durumlarda kullanılır.

List (Liste): List ADT'si, verilerin sıralı bir şekilde depolandığı ve üzerinde ekleme, silme,
arama gibi işlemlerin yapılabilmesini tanımlar.

Map (Harita): Map ADT'si, bir anahtar-değer çiftlerini depolayan ve anahtarlarla
ilişkilendirilmiş verileri almak ve değiştirmek için operasyonlar tanımlayan bir soyutlamadır.

Set (Küme): Set ADT'si, benzersiz veri öğelerini depolayan bir veri yapısını tanımlar ve veri
öğelerinin eklenmesi, silinmesi ve sorgulanması gibi işlemleri içerir.

ADT'ler, yazılımın daha organize olmasını ve daha okunabilir, bakımı daha kolay ve yeniden
kullanılabilir kod oluşturmanıza yardımcı olur. Bu, yazılım mühendisliği disiplini içinde 
temel bir kavramdır.
*/

// Stack (Yığın) Örneği:
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Yığın boş.";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Yığın boş.";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
}
  
// Kullanımı
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2

// Queue (Sıra) örneği:
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Sıra boş.";
      }
      return this.items.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Sıra boş.";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
}
  
// Kullanımı
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.size()); // 2

// Map örneği:

class Map {
    constructor() {
      this.data = {};
    }
  
    set(key, value) {
      this.data[key] = value;
    }
  
    get(key) {
      return this.data[key];
    }
  
    has(key) {
      return key in this.data;
    }
  
    delete(key) {
      if (this.has(key)) {
        delete this.data[key];
      }
    }
  
    keys() {
      return Object.keys(this.data);
    }
  
    values() {
      return Object.values(this.data);
    }
  
    size() {
      return Object.keys(this.data).length;
    }
  
    clear() {
      this.data = {};
    }
}
  
// Kullanımı
const harita = new Map();

harita.set("anahtar1", "değer1");
harita.set("anahtar2", "değer2");

console.log(harita.get("anahtar1")); // "değer1"
console.log(harita.has("anahtar2")); // true

harita.delete("anahtar1");
console.log(harita.keys()); // ["anahtar2"]
console.log(harita.size()); // 1

harita.clear();
console.log(harita.size()); // 0