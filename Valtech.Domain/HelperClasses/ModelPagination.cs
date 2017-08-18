using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.HelperClasses
{
    public class ModelPagination<T>
    {
        public int Offset { get; set; }
        public int Limit { get; set; }
        public int Total { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}
