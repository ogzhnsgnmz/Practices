/*
Sınıflarda kompozisyon Neden Daha Zordur?

Sınıflarla kompozisyon, geleneksel nesneye dayalı programlama (OOP) yaklaşımında daha zor
olabilir çünkü:

Kalıtım Temelli Tasarım: Geleneksel OOP'daki sınıflar, genellikle kalıtıma ağırlık verir.
Kalıtım, alt sınıfların üst sınıflardan özellikleri ve davranışları miras aldığı bir
"bir-çeşit" ilişkisi kurar. Kalıtım güçlü bir araç olabilir, ancak aynı zamanda esnekliği
azaltabilir ve sınıfı değiştirmenin veya genişletmenin alt sınıfları etkilemeden
zorlaşmasına neden olabilir.

Esneklik Sorunu: Sınıf hiyerarşileri zamanla katılaşabilir ve değişmesi zorlaşabilir.
Bu esnekliği azaltabilir ve yeni gereksinimlere uyum sağlamak veya mevcut sınıfları
değiştirmek sınıfların başka yerlerde istenmeyen yan etkilere neden olabilir.

Sınıf Bazlı Tasarımın Sınırlı Yeniden Kullanılabilirliği: Sınıf tabanlı tasarım, kodun
yeniden kullanılabilirliğini sınırlayabilir. Bir sınıf oluşturduğunuzda, nesnelerin yapısını
tanımlıyorsunuz ve bu sınıfın davranışını farklı bir bağlama getirmeksizin kullanmanız
zor olabilir.

Karmaşıklık: Sınıfların sayısı ve etkileşimleri arttıkça, sınıf tabanlı sistemlerin 
karmaşıklığını yönetmek zorlaşabilir. Farklı sınıfların nasıl bir araya geldiğini ve bir
sınıfı değiştirmenin diğerlerini nasıl etkileyebileceğini anlamak zor olabilir.

Sıkı Bağlantı: Sınıflar genellikle nesneler arasında sıkı bir bağlantı oluşturur, bu da bir
sınıfı değiştirmenin diğerlerini etkilemesini zorlaştırır. Bu sıkı bağlantı, kod tabanını
daha kırılgan ve daha az uyarlanabilir hale getirebilir.

Kalıtım Hiyerarşileri: Sınıf tabanlı sistemlerde karmaşık kalıtım hiyerarşileri ortaya
çıkabilir ve belirli bir fonksiyonun nerede uygulandığını belirlemek zorlaşabilir, bu da bakım
zorluklarına neden olabilir.

Buna karşın, fonksiyonel kompozisyon ve nesneler aracılığıyla kompozisyon (örneğin, fabrika
fonksiyonları ve mixin'ler) daha fazla esneklik ve davranışlar ve verilerin kompozisyonu 
üzerinde daha fazla kontrol sağlayabilir. Fonksiyonel programlama, fonksiyonlar ve saf veri 
yapıları aracılığıyla kompozisyonu teşvik eder ve bu, yazılım kodunu daha esnek ve bakımı
daha kolay hale getirebilir.
*/