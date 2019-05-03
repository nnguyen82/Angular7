using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular7.Models;

namespace Angular7.ViewModels
{
    public class StatisticViewModel
    {
        public StatisticDataSet MyHours { get; set; }
        public StatisticDataSet Stories { get; set; }
        public StatisticDataSet Remaining { get; set; }
        public StatisticDataSet Sprints { get; set; }
    }
}
