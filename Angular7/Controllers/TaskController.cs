using System;
using Microsoft.AspNetCore.Mvc;
using Angular7.ViewModels;
using Angular7.Models;
using Microsoft.AspNetCore.SignalR;
using Angular7.Hubs;
using Angular7.Common;

namespace Angular7.Controllers
{
    [Route("api/[controller]")]
    public class TaskController : Controller
    {
        private readonly IHubContext<TaskHub> _hub;

        public TaskController(IHubContext<TaskHub> hub)
        {
            _hub = hub;
        }

        [HttpPost]
        public IActionResult Post([FromBody] TaskViewModel vm)
        {
            _hub.Clients.All.SendAsync("ReceiveTask", vm);

            return Ok();
        }
    }
}