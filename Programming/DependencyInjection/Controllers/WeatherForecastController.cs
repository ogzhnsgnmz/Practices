using Microsoft.AspNetCore.Mvc;

namespace DependencyInjection.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        public INumGenerator NumGenerator { get; }
        public INumGenerator2 NumGenerator2 { get; }

        public WeatherForecastController(INumGenerator2 numGenerator2, INumGenerator numGenerator)
        {
            NumGenerator2 = numGenerator2;
            NumGenerator = numGenerator;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public string Get()
        {
            //NumGenerator n = new NumGenerator();

            //int random1 = NumGenerator2.RandomValue;
            int random1 = NumGenerator.RandomValue;
            int random2 = NumGenerator2.GetNumGeneratorRandomNumber();

            return $"{random1} - {random2}";
        }
    }
}