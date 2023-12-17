/*
Functor ve Category, matematiksel ve teorik bir soyutlama düzeyinde kullanılan iki önemli
kavramdır ve fonksiyonel programlama ve kategori teorisi gibi alanlarda önemlidir. İşte her
ikisi hakkında kısa açıklamalar:

Functor (Fonktor)

Functor, bir matematiksel veya programsal yapı içindeki nesneleri ve işlemleri ele almak için
kullanılan bir soyutlama türüdür. Functorlar, bir türden diğer bir türe dönüşüm yapabilen, bu
dönüşümleri kompozisyon yapabilen ve dönüşüm işlemleri sırasında gerekli mantıkları 
uygulayabilen nesnelerdir. Functorlar, özellikle fonksiyonel programlama dillerinde ve
kategori teorisinde yaygın olarak kullanılır.
*/

// Örnek bir functor:

class Maybe {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    if (this.value === null || this.value === undefined) {
      return new Maybe(null);
    }
    return new Maybe(fn(this.value));
  }
}

// Örnek kullanım
const deger = new Maybe(5);
const sonuc = deger.map(x => x * 2);
console.log(sonuc); // Maybe { value: 10 }

/*
Bu örnekte, Maybe adında bir functor tanımlanmıştır. map yöntemi ile bu functor, içindeki
değeri üzerinde işlem yapar ve yeni bir Maybe nesnesi döner.
*/

/*
Category (Kategori):

Category, matematiksel bir kavramdır ve programlama dilinde daha soyut bir kavramdır. 
Programlamada, bir kategori, nesneler ve bu nesneler arasındaki oklar (morfizmalar) ile
tanımlanır. Kategori teorisini ayrıntılı bir şekilde açıklamak oldukça kapsamlı bir konudur.
JavaScript'te kategori teorisi doğrudan uygulanmaz, ancak programlama paradigması hakkında
soyut bir anlayış sağlar.

Bir kategori, şu özelliklere sahiptir:

Her nesne, kendine bir kimlik oku ile bağlanabilir.
Oklar (morfizmalar) bir nesneden başka bir nesneye gider.
Oklar, birleşme (kompozisyon) işlemine tabi tutulabilir.
JavaScript'te bir kategori uygulanamaz, ancak bu soyut kavram programlamadaki diğer
kavramları daha iyi anlamamıza yardımcı olabilir.

Functor, kategori teorisine dayalı birçok fonksiyonel programlama kütüphanesinde önemli bir
kavramdır ve genellikle fonksiyonel programlama stillerinde kullanılır.
*/