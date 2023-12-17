using RabbitMQ.Client;
using System.Text;

namespace RabbitMQ.Publisher;

internal class DirectExchange
{
    public DirectExchange()
    {
        ConnectionFactory factory = new();
        factory.Uri = new("amqps://nvvcujxz:nTTwVrvMN3dvKw5izo8LZ5SQ1pKL7PB8@shark.rmq.cloudamqp.com/nvvcujxz");

        using IConnection conn = factory.CreateConnection();
        using IModel channel = conn.CreateModel();

        channel.ExchangeDeclare(exchange:"direct-exchange-example", type: ExchangeType.Direct);

        while(true)
        {
            Console.Write("Mesaj : ");
            string message = Console.ReadLine();
            byte[] byteMessage = Encoding.UTF8.GetBytes(message);

            channel.BasicPublish(
                exchange: "direct-exchange-example",
                routingKey: "direct-queue-example",
                body: byteMessage);
        }

        Console.Read();
    }
}
