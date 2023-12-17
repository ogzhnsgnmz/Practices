using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;

namespace RabbitMQ.Consumer;

internal class DirectExchange
{
    public DirectExchange()
    {
        ConnectionFactory factory = new();
        factory.Uri = new("amqps://nvvcujxz:nTTwVrvMN3dvKw5izo8LZ5SQ1pKL7PB8@shark.rmq.cloudamqp.com/nvvcujxz");

        using IConnection conn = factory.CreateConnection();
        using IModel channel = conn.CreateModel();

        // Publisher'da ki exchange ile birebir aynı isim ve type'a sahip br exchange tanımlanmalıdır!
        channel.ExchangeDeclare(exchange: "direct-exchange-example", type: ExchangeType.Direct);

        // Publisher tarafından routing key'de bulunan değerdei kuyruğa gönderlen meajları,
        // kendi oluşturduğumuz kuyruğa yönlendirerek tüketmemiz gerekmektedir. Bunun için öncelikle bir kuyruk oluşturulmalıdır! 
        string queueName = channel.QueueDeclare().QueueName;

        // 
        channel.QueueBind(
            queue: queueName,
            exchange: "direct-exchange-example",
            routingKey: "direct-queue-example");

        EventingBasicConsumer consumer = new(channel);
        channel.BasicConsume(queue: queueName, autoAck:true, consumer: consumer);
        consumer.Received += (sender, e) =>
        {
            string message = Encoding.UTF8.GetString(e.Body.Span);
            Console.WriteLine(message);
        };

        Console.Read();
    }
}
