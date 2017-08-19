using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Entities.PurchaseModule
{
    public class ProductCategory : AbstractEntity
    {
        public ProductCategory()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Name { get; set; }
    }
}
