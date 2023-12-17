using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;

namespace RabbitMQ.Consumer;

internal class FanoutExchange
{
    public FanoutExchange()
    {
        ConnectionFactory factory = new();
        factory.Uri = new("amqps://nvvcujxz:nTTwVrvMN3dvKw5izo8LZ5SQ1pKL7PB8@shark.rmq.cloudamqp.com/nvvcujxz");

        using IConnection conn = factory.CreateConnection();
        using IModel channel = conn.CreateModel();

        string exch = "fanout-exchange-example";

        channel.ExchangeDeclare(exchange: exch, type: ExchangeType.Fanout);

        Console.Write("Kuyruk adını giriniz : ");
        string queueName = Console.ReadLine();
        channel.QueueDeclare(queue: queueName, exclusive: false);
        channel.QueueBind(queue: queueName, exchange: exch, routingKey: String.Empty);

        EventingBasicConsumer consumer = new(channel);
        channel.BasicConsume(queue: queueName, autoAck: true, consumer);

        consumer.Received += (sender, e) =>
        {
            string message = Encoding.UTF8.GetString(e.Body.Span);
            Console.WriteLine(message);
        };

        Console.Read();
    }
}
