/*
Functional Mixins

Functional Mixins, nesne yönelimli programlama (OOP) ile fonksiyonel programlamanın birleştiği
bir desen veya tekniğidir. Mixinler, bir nesneye veya bir sınıfa ek fonksiyonellik eklemenin
bir yolunu sağlar. Functional Mixins, bu fonksiyonelliği fonksiyonel programlama prensiplerine
dayalı olarak eklemek için kullanılır.

Functional Mixins'lerin temel özellikleri şunlar olabilir:

Reusability (Yeniden Kullanılabilirlik): Mixinler, kodun yeniden kullanılabilir olmasını
sağlar. Belirli bir fonksiyonelliği bir kez tanımladığınızda, bu fonksiyonelliği farklı
nesnelere veya sınıflara eklemek için kullanabilirsiniz.

Encapsulation (Kapsülleme): Mixinler, fonksiyonelliği kapsülleme prensiplerine uygun olarak
ekler. Fonksiyonelliği başka nesnelere uyguladığınızda, nesnelerin iç durumuna veya
davranışına dokunmadan ek fonksiyonelliği sağlar.

Declarative (Deklaratif): Functional Mixin'ler, genellikle deklaratif bir şekilde
kullanılır. Yani fonksiyonelliği eklemek için nesne veya sınıf tanımlamalarında belirliyoruz.

Immutable (Değiştirilemez): Mixin'ler, genellikle fonksiyonel programlama ilke ve
özelliklerini takip ederek değiştirilemez (immutable) fonksiyonelliği teşvik eder.
*/

// Aşağıda basit bir Functional Mixin örneği verilmiştir:

// Mixin: Event Emitter fonksiyonelliği
const EventEmitterMixin = {
  on(event, callback) {
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
  },
  emit(event, data) {
    if (this.events && this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
};

// Bir nesne oluştur
const myObject = {};

// Mixin'i nesneye ekle
Object.assign(myObject, EventEmitterMixin);

// Mixin fonksiyonelliği kullan
myObject.on('click', () => {
  console.log('Tıklama oldu!');
});

myObject.emit('click', 'Tıklama verisi');

/*
Bu örnek, Event Emitter fonksiyonelliği EventEmitterMixin adlı bir Mixin kullanarak bir
nesneye ekler. Mixin, nesnenin on ve emit metodlarını tanımlar ve bu metodlar kullanılarak
nesne olayları dinleyebilir ve tetikleyebilir. Bu, Functional Mixin deseninin basit bir
örneğidir ve fonksiyonel programlama prensiplerine dayanır.
*/