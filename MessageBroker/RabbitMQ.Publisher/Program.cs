using RabbitMQ.Client;
using System.Text;

//Bağlantı oluşturma
ConnectionFactory factory = new();
factory.Uri = new("amqps://nvvcujxz:nTTwVrvMN3dvKw5izo8LZ5SQ1pKL7PB8@shark.rmq.cloudamqp.com/nvvcujxz");

//Bağlantıyı aktifleştirme ve kanal açma
using IConnection conn = factory.CreateConnection();
using IModel channel = conn.CreateModel();

//Queue oluşturma
channel.QueueDeclare(queue: "example-queue", exclusive: false, durable: true/*message durability*/);

//Queue'ya mesaj gönderme

//RabbitMQ kuyruğa atacağı mesajları byte türünden kabul etmektedir.
// Haliyle mesajları bizim byte dönüştürmemiz gerekecektir.

//Message Durability: RabbitMQ'da kapanma durumu söz konusu olursa mesajların kaybolmaması yani kalıcı
// olabilmesi için kullanılan özellik. (garanti etmez)
IBasicProperties properties = channel.CreateBasicProperties();
properties.Persistent = true;

for (int i = 0; i < 10; i++)
{
    byte[] message = Encoding.UTF8.GetBytes($"Merhaba {i}");
    channel.BasicPublish(exchange: "", routingKey: "example-queue", body: message, basicProperties: properties /*message durability*/);
}

Console.Read();