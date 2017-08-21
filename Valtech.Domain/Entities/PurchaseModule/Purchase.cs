using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Entities.PurchaseModule
{
    public class Purchase : AbstractEntity
    {
        public Purchase()
        {
            Id = Guid.NewGuid().ToString();
        }
        
        public virtual List<ProductOrder> Products { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public string PaymentMethodId { get; set; }
        public double TotalPrice { get; set; }
    }
}
