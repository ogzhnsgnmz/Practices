/*
Monads

Monads, fonksiyonel programlamanın temel kavramlarından biridir ve özellikle yan etkileri 
kontrol etmek, asenkron işlemleri yönetmek ve dönüşüm zincirlemelerini kolaylaştırmak gibi
kullanım alanlarında önemlidir. Monad kavramı, Haskell ve diğer fonksiyonel programlama 
dillerinde yoğun olarak kullanılmaktadır.

Monad, üç temel özelliği içeren bir soyutlama türüdür:

Identity (Kimlik): Bir monad, bir "kimlik" öğesine sahiptir. Bu kimlik öğesi, monad 
zincirlemelerindeki başlangıç noktasını belirtir. Örneğin, bir değer monadı, başlangıç
değerini temsil eder.

Bind Operation (Bağlama İşlemi): Monadlar, bir monadın içindeki değeri alıp başka bir
monadı döndüren bir bağlama işlemine sahiptir. Bu işlem, monadların zincirlenmesini sağlar.
Bağlama işlemi, bir monadın içindeki değeri alır, bir işlemi uygular ve yeni bir monad döndürür.

Associativity (İlişkililik): Monadların bağlama işlemi, ilişkililik (associativity) 
özelliğine sahiptir. Bu, monadların zincirlemelerinin sıralamasının değiştirilebileceği
anlamına gelir ve bu sıralama değişikliği sonucu farklı bir sonuç elde edilmemelidir.

Monadlar, özellikle yan etkileri kontrol etmek, asenkron işlemleri yönetmek ve dönüşüm
zincirlemelerini düzenlemek için kullanılır. Örneğin, Promises (JavaScript'te) bir monad
örneğidir ve asenkron işlemleri daha iyi kontrol etmek için kullanılır. Ayrıca, Maybe
monadları da değerlerin null veya undefined olup olmadığını kontrol etmek için kullanılır.

Monadlar, fonksiyonel programlamanın soyutlamalarından biri olup, kodun daha güvenli, 
okunabilir ve modüler hale gelmesine yardımcı olabilir.
*/

// JavaScript'te özellikle Promiseler ile monadlar sıklıkla kullanılır.

// Bir Promise monad tanımlama
class PromiseMonad {
  constructor(value) {
    this.value = value;
  }

  // `then` yöntemi ile işlemleri sıraya koyma
  then(fn) {
    return new PromiseMonad(this.value.then(fn));
  }

  // `catch` yöntemi ile hataları işleme
  catch(fn) {
    return new PromiseMonad(this.value.catch(fn));
  }
}

// Basit bir asenkron işlemi simüle eden bir fonksiyon
function asenkronIslem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rastgeleSayi = Math.random();
      if (rastgeleSayi < 0.5) {
        resolve('İşlem başarılı!');
      } else {
        reject('İşlem başarısız!');
      }
    }, 1000);
  });
}

// Promise monad kullanarak işlemi sıraya koyma
const sonuc = new PromiseMonad(asenkronIslem())
  .then((mesaj) => {
    console.log('Başarılı sonuç:', mesaj);
    return 'Yeni bir sonuç';
  })
  .catch((hata) => {
    console.error('Hata:', hata);
  });

// İşlemin tamamlanmasını bekleyip sonucu alma
sonuc.value.then((deger) => {
  console.log('Son sonuç:', deger);
});


/*
Bu örnekte, PromiseMonad adında kendi Promise monad'ımızı tanımladık. Bu monad, then
ve catch yöntemleri ile işlemleri sıraya koyma ve hataları işleme yeteneği sağlar.
asenkronIslem adındaki fonksiyon, bir asenkron işlemi simüle eder ve ardından bu işlemi
bir Promise ile sarmalar.

Son olarak, monad'ı kullanarak işlemi sıraya koyarız ve sonucu alırız. Bu şekilde monad,
işlemleri sıralı bir şekilde yönetmemize ve hataları ele almamıza yardımcı olur.
*/