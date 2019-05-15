using Angular7.ViewModels;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Angular7.Hubs
{
    public class TaskHub : Hub
    {
        public async Task SendNewMessage(StatisticViewModel vm)
        {
            await Clients.All.SendAsync("ReceiveMessage", vm);
        }
    }
}
