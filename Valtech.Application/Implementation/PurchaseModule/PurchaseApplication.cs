using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Application.ViewModels.PurchaseModule;
using Valtech.Domain.Entities.PurchaseModule;
using Valtech.Domain.Interfaces.Services.PurchaseModule;

namespace Valtech.Application.Implementation.PurchaseModule
{
    public class PurchaseApplication : AppServiceBase<Purchase>, IPurchaseApplication
    {
        private readonly IPurchaseService _service;
        public PurchaseApplication(IPurchaseService service)
            : base(service)
        {
            _service = service;
        }

        public void ConfirmPurchase(List<ProductOrderViewModel> vm, string PaymentMethodId)
        {
            double totalPrice = vm.Sum(x => x.Price * x.TotalQuantity);
            Purchase domain = new Purchase() {
                Id = Guid.NewGuid().ToString(),
                PaymentMethodId = PaymentMethodId,
                TotalPrice = totalPrice,
                Products = Mapper.Map<List<ProductOrderViewModel>, List<ProductOrder>>(vm)
            };
            _service.Add(domain);
        }
    }
}
