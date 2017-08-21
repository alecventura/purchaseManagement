using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Application.ViewModels.PurchaseModule
{
    [Serializable]
    public class ProductOrderViewModel
    {
        [Required(ErrorMessage = "Required")]
        public string ProductId { get; set; }
        [Required(ErrorMessage = "Required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Required")]
        public double Price { get; set; }
        [Required(ErrorMessage = "Required")]
        public int TotalQuantity { get; set; }
        [Required(ErrorMessage = "Required")]
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
