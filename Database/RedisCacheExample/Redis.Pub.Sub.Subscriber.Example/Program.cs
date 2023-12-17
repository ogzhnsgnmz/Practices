using StackExchange.Redis;
using System;

namespace Redis.Pub.Sub.Subscriber.Example
{
    class Program
    {
        static void Main(string[] args)
        {
            ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("localhost:1453");

            ISubscriber subscriber = redis.GetSubscriber();

            subscriber.Subscribe("mychannel.*", (channel, message) =>
            {
                Console.WriteLine(message);
            });

            Console.Read();
        }
    }
}
