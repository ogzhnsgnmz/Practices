using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;

//Bağlantı oluşturma
ConnectionFactory factory = new();
factory.Uri = new("amqps://nvvcujxz:nTTwVrvMN3dvKw5izo8LZ5SQ1pKL7PB8@shark.rmq.cloudamqp.com/nvvcujxz");

//Bağlantıyı aktifleştirme ve kanal açma
using IConnection conn = factory.CreateConnection();
using IModel channel = conn.CreateModel();

//Queue oluşturma
channel.QueueDeclare(queue: "example-queue", exclusive: false, durable: true);

//Queue'dan mesaj okuma
EventingBasicConsumer consumer = new(channel);
channel.BasicConsume(queue: "example-queue", autoAck: false, consumer);
channel.BasicQos(0, 1, false);/*BasicQos*/
consumer.Received += (sender, e) =>
{
    //Kuyruğa gelen mesajın işlendiği yerdir!
    //e.Body = Kuyruktaki mesajın verisini bütünsel olarak getirecektir.
    //e.Body.Span VEYA e.Body.ToArray() : Kuyrukdaki mesajın byte verisini getirecektir.
    Console.WriteLine(Encoding.UTF8.GetString(e.Body.Span));
    channel.BasicAck(deliveryTag: e.DeliveryTag, multiple: false);
};

Console.Read();

//Message Acnkowledgement:
//RabbitMQ, tüketiciye gönderdiliği mesajı başaılı bir şekilde işlensin veya işenlemsin hemen kuyruktan silinmesi üzerine işaretler.
//Tüketicilerin kuyrktan aldıkları mesajları işlemeleri sürecinde herhangi bir kesinti veya problem durumu meydana gelirse ilgili
//mesaj tam olarka işlenmeyeceği için esasında görev tamamlanmamş olacaktır.
//Bu tarz durumlara istinaden mesaj başarıyla işlendiyse eğer kuyurktan silinmesi için tüketiciden RabbitMQ'nun uyarılması gerekmektedir.

//BasicNack: Bazen consumer'lar da istemsiz durumların dışında kendi kontrollerimiz neticesinde mesajları işlememek isteyebilir
// veya ilgili mesajın işlenmesini başarıyla sonuçlandıramayacağımızı anlayabiliriz.
//Böyle durumlarda 'channel.BasicNack' metodunu kullanarak RabbitMQ'ya bilgi verebilir ve mesajı tekrardan işletebiliriz.
//requeue: işlenemeyeceği ifade edilen mesajı tekrardan kuyruğa eklenip eklenmemesine karar vermektedir.

//BasicConsume:
//autoAck: Mesaj onaylama sürecini aktüfleştirebilmek için false olarak belirtilir.
// consume onayı BasicAck metodu ile gerçekleştirilir.

//BasicAck:
//multiple: birden fazla mesaja dair onay bildirisi gönderir. eğer true değeri verilirse DeiveryTag değerine sahip olan bu mesajla
//birlikte bundan önceki mesajlarında işlendiğini onaylar. Aksi takride false verilrise sadece bu mesaj için onay biildirgesinde bulunacaktır.

//Fair dispatch: Consumer'lara mesajların eşit yani adil şekilde dağıtımını sağlamak için kullanılan özelliktir.
//BasicQos: mesajların işleme hızını ve teslimat sıralasını belirleyebiliriz.
// böylece Far Dispatch özelliği konfigüre edilebilmektedir.
//prefetchSize: Bir consumer tarafından alınabilecek en büyük mesaj boyutunu byte cinsinden belirler. 0=sınırsız.
//prefetchCount: Bir consumer tarafından aynı anda işleme alınabilecek mesaj sayısını belirler.
//global: bu konifürasyonun tüm consumer'lar için mi yoksa sadece çağrı yapılan consumer için mi geçerli olacağını belirler.