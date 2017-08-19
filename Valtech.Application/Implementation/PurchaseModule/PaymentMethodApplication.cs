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
    public class PaymentMethodApplication : AppServiceBase<PaymentMethod>, IPaymentMethodApplication
    {
        private readonly IPaymentMethodService _service;
        public PaymentMethodApplication(IPaymentMethodService service)
            : base(service)
        {
            _service = service;
        }

        public void Add(PaymentMethodViewModel vm)
        {
            _service.Add(Mapper.Map<PaymentMethodViewModel, PaymentMethod>(vm));
        }

        public List<PaymentMethodViewModel> GetAll()
        {
            return Mapper.Map<List<PaymentMethod>, List<PaymentMethodViewModel>>(_service.GetAll().ToList());
        }

        public void RemoveById(string id)
        {
            _service.RemoveById(id);
        }

        public void Update(PaymentMethodViewModel vm)
        {
            _service.Update(Mapper.Map<PaymentMethodViewModel, PaymentMethod>(vm));
        }
    }
}
