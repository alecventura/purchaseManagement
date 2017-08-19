using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.ViewModels.PurchaseModule;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Application.Interface.PurchaseModule
{
    public interface IPaymentMethodApplication : IAppServiceBase<PaymentMethod>
    {
        void Add(PaymentMethodViewModel vm);
        void Update(PaymentMethodViewModel vm);
        List<PaymentMethodViewModel> GetAll();
        void RemoveById(string id);
    }
}
