using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.ViewModels.PurchaseModule;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Application.Interface.PurchaseModule
{
    public interface IPurchaseApplication : IAppServiceBase<Purchase>
    {
        void ConfirmPurchase(List<ProductOrderViewModel> products, string PaymentMethodId);
    }
}
