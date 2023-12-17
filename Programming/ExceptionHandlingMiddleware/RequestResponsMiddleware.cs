using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace Middlewares
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestResponsMiddleware : ControllerBase
    {
        RequestDelegate next;
        ILogger<RequestResponsMiddleware> logger;

        public RequestResponsMiddleware(RequestDelegate Next, ILogger<RequestResponsMiddleware> Logger)
        {
            next = Next;
            logger = Logger;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            //request
            var orginalBodyStream = httpContext.Response.Body;

            logger.LogInformation($"Query keys: {httpContext.Request.QueryString}");

            MemoryStream requestBody = new MemoryStream();
            await httpContext.Request.Body.CopyToAsync(requestBody);
            requestBody.Seek(0, SeekOrigin.Begin);
            String requestText = await new StreamReader(requestBody).ReadToEndAsync();
            requestBody.Seek(0, SeekOrigin.Begin);


            var tempStream = new MemoryStream();
            httpContext.Response.Body = tempStream;

            await next.Invoke(httpContext);
            //response

            tempStream.Seek(0, SeekOrigin.Begin);
            String responseText = await new StreamReader(tempStream, Encoding.UTF8).ReadToEndAsync();
            tempStream.Seek(0, SeekOrigin.Begin);

            await httpContext.Response.Body.CopyToAsync(orginalBodyStream);

            logger.LogInformation($"Request: {requestText}");
            logger.LogInformation($"Response: {responseText}");
        }
    }
}
