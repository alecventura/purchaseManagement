using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Entities.PurchaseModule
{
    public class Purchase : AbstractEntity
    {
        // This will contains the products names and values at purchase time, because the product value can change and this info would be lost
        public string PurchaseSummary { get; set; }
        public virtual List<Product> Products { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public Guid PaymentMethodId { get; set; }
        public double TotalPrice { get; set; }
    }
}
