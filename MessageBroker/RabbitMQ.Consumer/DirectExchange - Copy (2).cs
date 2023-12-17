using RabbitMQ.Client;
namespace RabbitMQ.Consumer;

internal class DirectExchange
{
    public DirectExchange()
    {
        ConnectionFactory factory = new();
        factory.Uri = new("amqps://nvvcujxz:nTTwVrvMN3dvKw5izo8LZ5SQ1pKL7PB8@shark.rmq.cloudamqp.com/nvvcujxz");

        using IConnection conn = factory.CreateConnection();
        using IModel channel = conn.CreateModel();



        Console.Read();
    }
}
