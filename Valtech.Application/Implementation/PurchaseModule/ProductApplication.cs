using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Domain.Entities.PurchaseModule;
using Valtech.Domain.Interfaces.Services.PurchaseModule;

namespace Valtech.Application.Implementation.PurchaseModule
{
    public class ProductApplication : AppServiceBase<Product>, IProductApplication
    {
        private readonly IProductService _service;
        public ProductApplication(IProductService service)
            : base(service)
        {
            _service = service;
        }
    }
}
