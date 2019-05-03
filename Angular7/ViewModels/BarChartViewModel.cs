using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular7.Models;

namespace Angular7.ViewModels
{
    public class BarChartViewModel : ChartViewModel
    {
        public BarDataSet[] datasets { get; set; }
    }
}
