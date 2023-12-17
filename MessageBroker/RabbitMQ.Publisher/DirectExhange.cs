using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RabbitMQ.Publisher
{
    public class DirectExhange
    {
        public DirectExhange()
        {
            ConnectionFactory factory = new();
            factory.Uri = new("amqps://nvvcujxz:nTTwVrvMN3dvKw5izo8LZ5SQ1pKL7PB8@shark.rmq.cloudamqp.com/nvvcujxz");

            using IConnection conn = factory.CreateConnection();
            using IModel channel = conn.CreateModel();

            channel.ExchangeDeclare(exchange: "direct-exchange-example", type: ExchangeType.Direct);

            while()
            {
                Console.Write("Mesaj : ");
                string message = Console.ReadLine();


            }

            Console.Read();
        }
    }
}
