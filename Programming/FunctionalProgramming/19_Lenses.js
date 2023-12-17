/*
Lenses (Lensler)

Lensler, fonksiyonel programlamada ve özellikle Haskell gibi dillerde yaygın olarak kullanılan
bir kavramdır. Lensler, veri yapılarındaki içsel değerlere erişmek, bu değerleri değiştirmek
ve güncellemek için kullanılan bir soyutlama türüdür. Veri yapısı içindeki belirli bir noktaya
odaklanmayı ve bu odak noktasını değiştirmeyi kolaylaştırır.

Lensler, özellikle veri değişmezliği (immutability) ve fonksiyonel programlama prensipleriyle
uyumlu olması nedeniyle önemlidir. Lensler, verilerin değiştirilemezliğini korurken, içsel
değerlere erişmeyi ve bu değerleri güncellemeyi sağlar. Bu, büyük ve karmaşık veri yapılarını
etkili bir şekilde yönetmeyi kolaylaştırır.

Lenslerin temel özellikleri şunlar olabilir:

Get (Alma): Bir lens, belirli bir içsel değeri okuma yeteneği sağlar. Lens kullanarak bir veri
yapısının içine girebilir ve istediğiniz değeri alabilirsiniz.

Set (Ayarlama): Bir lens, içsel değerleri değiştirme yeteneği sağlar. Lens kullanarak bir veri
yapısının içindeki değeri güncelleyebilirsiniz.

Focus (Odak Noktası): Lensler, veri yapısı içinde odaklanılacak bir noktayı temsil eder. Bu odak
noktasına odaklandığınızda, o değeri alabilir veya değiştirebilirsiniz.

İçiçe Lensler: Karmaşık veri yapıları içinde, iç içe lensler kullanarak birden çok odak noktasına
erişebilir ve bu noktaları güncelleyebilirsiniz.

Lensler, veri yapıları üzerinde güvenli ve tutarlı bir şekilde çalışmayı sağlar ve programcılara
veri manipülasyonu işlemlerini daha kolay ve anlaşılabilir hale getirir. Haskell gibi dillerde,
lens kütüphaneleri, veri yapıları üzerinde lens kullanımını destekler ve bu tür operasyonları
daha da basitleştirir.
*/

// Veri yapısı
const person = {
  name: "Ahmet",
  age: 30,
  address: {
    city: "Istanbul",
    postalCode: "34000"
  }
};

// Lens oluşturma
const lens = (getter, setter) => ({
  get: getter,
  set: (data, value) => setter(data, value)
});

// Getter ve setter fonksiyonları
const getName = (data) => data.name;
const setName = (data, value) => ({ ...data, name: value });

const getCity = (data) => data.address.city;
const setCity = (data, value) => ({ ...data, address: { ...data.address, city: value } });

// Lensleri kullanarak verilere erişme ve değiştirme
const nameLens = lens(getName, setName);
const cityLens = lens(getCity, setCity);

const updatedPerson = nameLens.set(person, "Mehmet");
console.log(updatedPerson.name); // "Mehmet"

const updatedCity = cityLens.set(person, "Ankara");
console.log(updatedCity.address.city); // "Ankara"


/*
Bu örnekte, person adında bir veri yapısı tanımladık ve ardından lens adlı bir fonksiyon oluşturduk.
Bu fonksiyon, bir getter ve setter fonksiyonunu alır ve bu fonksiyonlarla birlikte bir lens oluşturur.

Daha sonra, getName, setName, getCity, ve setCity adında getter ve setter fonksiyonlarını tanımladık.
nameLens ve cityLens adında iki farklı lens oluşturduk ve bu lensleri kullanarak verilere
erişip değiştirdik.

Örneğin, nameLens ile person verisinin "name" özelliğini değiştirdik ve "Mehmet" olarak
güncelledik. Aynı şekilde, cityLens ile "address" özelliğinin "city" alt özelliğini değiştirdik
ve "Ankara" olarak güncelledik.

Bu örnek, Lens yapılarını kullanarak verilere güvenli bir şekilde erişmeyi ve değiştirmeyi
göstermektedir.
*/