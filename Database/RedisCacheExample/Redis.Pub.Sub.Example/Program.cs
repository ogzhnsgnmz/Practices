using StackExchange.Redis;
using System;

namespace Redis.Pub.Sub.Example
{
    class Program
    {
        static void Main(string[] args)
        {
            ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("localhost:1453");

            ISubscriber subscriber = redis.GetSubscriber();

            while (true)
            {
                Console.Write("Mesaj: ");
                string message = Console.ReadLine();
                subscriber.Publish("mychannel", message);
            }

            Console.Read();
        }
    }
}
