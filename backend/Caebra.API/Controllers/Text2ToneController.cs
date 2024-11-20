using Microsoft.AspNetCore.Mvc;

namespace Caebra.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class Text2ToneController : ControllerBase
{
    [HttpGet("details")]
    public IActionResult GetDetails()
    {
        return Ok(new { Name = "Text2Tone", Description = "Details about Text2Tone." });
    }
}