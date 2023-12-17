using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExceptionHandlingMiddlewares.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            int a = 0;
            int b = 10 / a;

            return "";
        }

        [HttpGet("GetStudent")]
        public Student GetStudent()
        {
            return new Student()
            {
                Id = 1,
                FullName = "Oğuzhan X"
            };
        }

        [HttpPost("PostStudent")]
        public String CreateStudent([FromBody] Student student)
        {


            return "";
        }
    }

    public class Student
    {
        public int Id { get; set; }
        public String FullName { get; set; }
    }
}
