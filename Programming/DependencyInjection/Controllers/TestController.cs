using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DependencyInjection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        INumGenerator numGenerator;

        public TestController(INumGenerator numGenerator)
        {
            this.numGenerator = numGenerator;
        }

        [HttpGet]
        public string Get()
        {
            NumGenerator n = new NumGenerator();

            return numGenerator.RandomValue.ToString();
        }
    }
}
