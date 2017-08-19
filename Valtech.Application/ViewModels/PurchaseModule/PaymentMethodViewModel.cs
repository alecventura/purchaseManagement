using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Application.ViewModels.PurchaseModule
{
    public class PaymentMethodViewModel
    {
        public string Id { get; set; }
        [Required(ErrorMessage = "Required")]
        [MaxLength(256, ErrorMessage = "MaxLength{1}")]
        public string Type { get; set; }
    }
}
