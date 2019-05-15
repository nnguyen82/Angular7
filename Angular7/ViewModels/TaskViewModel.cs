using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular7.ViewModels
{
    public class TaskViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Owner { get; set; }
        public string Status { get; set; }
        public string Priority { get; set; }
        public DateTime? DueDate { get; set; }
        public DateTime? AssignedDate { get; set; }
    }
}
