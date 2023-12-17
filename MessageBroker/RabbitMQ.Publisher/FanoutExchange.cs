using RabbitMQ.Client;
using System.Text;

namespace RabbitMQ.Publisher;

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

        for(int i = 0; i < 100; i++)
        {
            Task.Delay(200);
            byte[] message = Encoding.UTF8.GetBytes($"Merhaba {i}");
            channel.BasicPublish(exchange: exch, routingKey: string.Empty, body: message);
        }

        Console.Read();
    }
}
