using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Entities.PurchaseModule
{
    public class ProductOrder : AbstractEntity
    {
        public ProductOrder()
        {
            Id = Guid.NewGuid().ToString();
        }
        // Name and price are to keep track of the data at purchase time. Since those fields value can be changed by someone at Product admin page.
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public Product Product { get; set; }
        public string ProductId { get; set; }
        public Purchase Purchase { get; set; }
        public string PurchaseId { get; set; }
    }
}
