/* 
Imperative

İmparatif programlama, bir bilgisayar programının nasıl yapılacağını adım adım açıklayan bir programlama
yaklaşımıdır. Bu yaklaşım, programcının belirli adımları sırayla tanımladığı, değişkenleri işlediği ve
kontrol yapıları (örneğin, döngüler ve şartlı ifadeler) kullanarak bilgisayarın belirli bir görevi nasıl
gerçekleştireceğini belirttiği bir paradigmadır. İmparatif programlama, bilgisayarın durumunu değiştirme
yeteneği ve işlemler arasında değişkenler üzerinde etkileşim sağlama özelliği ile karakterizedir.
*/

//İmparatif programlama yaklaşımını açıklayan bir kod örneği:

function toplam(liste) {
    let sonuc = 0;
    for (let i = 0; i < liste.length; i++) {
      sonuc += liste[i];
    }
    return sonuc;
}

/*
Bu kod, toplam fonksiyonunu kullanarak bir dizi elemanını toplamak için bir döngü kullanır. Döngü,
i değişkenini kullanarak listenin her elemanını tek tek işler ve sonucu bir sonuc değişkeninde toplar.
Bu, işlemi nasıl yapılacağını adım adım belirttiği için imparatif bir yaklaşımı temsil eder.
*/

//Bu kodu kullanarak bir liste içindeki sayıları toplamak için aşağıdaki gibi kullanabilirsiniz:

const liste = [1, 2, 3, 4, 5];
const sonuc = toplam(liste);
console.log(sonuc); // Çıktı: 15

/*
İmparatif programlama, birçok programlama dilinin temel yaklaşımıdır ve genellikle programcıların belirli
bir işlemi nasıl gerçekleştireceklerini kontrol etmelerine olanak tanır. Ancak, daha karmaşık sistemlerde
kodun anlaşılması ve bakımı zorlaşabilir ve hata yapma olasılığı artabilir. Bu nedenle, deklaratif
programlama ve fonksiyonel programlama gibi alternatif yaklaşımlar, bazen daha okunaklı, sürdürülebilir
ve hata ayıklanabilir kod üretmek için tercih edilebilir.
*/

// Bir dizi içindeki çift sayıları filtreleyen ve toplayan Imperative yöntemle gerçekleştirilen bir örnek:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenSum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    }
}

console.log("Çift sayıların toplamı:", evenSum);