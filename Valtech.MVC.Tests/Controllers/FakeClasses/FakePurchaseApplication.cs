using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Application.ViewModels.PurchaseModule;

namespace Valtech.MVC.Tests.Controllers.FakeClasses
{
    public class FakePurchaseApplication : IPurchaseApplication
    {
        public void ConfirmPurchase(List<ProductOrderViewModel> products, string PaymentMethodId)
        {
            throw new NotImplementedException();
        }
    }
}
