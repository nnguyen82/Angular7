using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular7.ViewModels
{
    public class DashBoardViewModel
    {
        public StatisticViewModel Statistics { get; set; }
        public PieChartViewModel Pie1 { get; set; }
        public PieChartViewModel Pie2 { get; set; }
        public BarChartViewModel Bar1 { get; set; }
    }
}
