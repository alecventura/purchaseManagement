using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Application.ViewModels.PurchaseModule
{
    public class PurchaseConfirmViewModel
    {
        [Required(ErrorMessage = "Required")]
        public string PaymentMethodId { get; set; }
    }
}
