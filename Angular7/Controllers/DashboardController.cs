using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular7.ViewModels;
using Angular7.Models;

namespace Angular7.Controllers
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult GetDashBoard()
        {
            DashBoardViewModel vm = new DashBoardViewModel()
            {
                Statistics = GetStatistics(),
                Pie1 = GetPieChart1(),
                Pie2 = GetPieChart2(),
                Bar1 = GetBarChart()
            };

            return Json(vm);
        }

        private StatisticViewModel GetStatistics()
        {
            StatisticViewModel vm = new StatisticViewModel()
            {
                MyHours = new StatisticDataSet() { Label = "My Hours", Data = 132, Color = "#00ACAC", Icon = "fas fa-clock" },
                Stories = new StatisticDataSet() { Label = "Stories", Data = 35, Color = "#2F8EE5", Icon = "fas fa-users" },
                Remaining = new StatisticDataSet() { Label = "Remaining", Data = 23, Color = "#6C76AF", Icon = "fas fa-hourglass-half" },
                Sprints = new StatisticDataSet() { Label = "Sprints", Data = 5, Color = "#EFA64C", Icon = "fas fa-chart-area" },
            };

            return vm;
        }

        private PieChartViewModel GetPieChart1()
        {
            PieDataSet dataset = new PieDataSet()
            {
                data = new int[] { 300, 50, 100 },
                backgroundColor = new string[] { "#FF6384", "#36A2EB", "#FFCE56" },
                hoverBackgroundColor = new string[] { "#FF6384", "#36A2EB", "#FFCE56" }
            };

            PieChartViewModel vm = new PieChartViewModel()
            {
                labels = new string[] { "A", "B", "C" },
                datasets = new PieDataSet[] { dataset }
            };

            return vm;
        }

        private PieChartViewModel GetPieChart2()
        {
            PieDataSet dataset = new PieDataSet()
            {
                data = new int[] { 300, 150, 40 },
                backgroundColor = new string[] { "#FF6384", "#36A2EB", "#FFCE56" },
                hoverBackgroundColor = new string[] { "#FF6384", "#36A2EB", "#FFCE56" }
            };

            PieChartViewModel vm = new PieChartViewModel()
            {
                labels = new string[] { "D", "E", "F" },
                datasets = new PieDataSet[] { dataset }
            };

            return vm;
        }

        private BarChartViewModel GetBarChart()
        {
            BarDataSet dataset = new BarDataSet()
            {
                label = "Buy",
                data = new int[] { 65, 59, 80, 81, 56, 55, 40 },
                backgroundColor = "#42A5F5",
                borderColor = "borderColor"
            };

            BarDataSet dataset2 = new BarDataSet()
            {
                label = "Borrow",
                data = new int[] { 28, 48, 40, 19, 86, 27, 90 },
                backgroundColor = "#9CCC65" ,
                borderColor = "7CB342"
            };

            BarChartViewModel vm = new BarChartViewModel()
            {
                labels = new string[] { "January", "February", "March", "April", "May", "June", "July" },
                datasets = new BarDataSet[] { dataset, dataset2 }
            };

            return vm;
        }

    }
}
