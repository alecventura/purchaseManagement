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
    public class ProductApplication : AppServiceBase<Product>, IProductApplication
    {
        private readonly IProductService _service;
        public ProductApplication(IProductService service)
            : base(service)
        {
            _service = service;
        }

        public void Add(ProductViewModel vm)
        {
            _service.Add(Mapper.Map<ProductViewModel, Product>(vm));
        }

        public List<ProductViewModel> GetAll()
        {
            return Mapper.Map<List<Product>, List<ProductViewModel>>(_service.GetAllLoadCategory().ToList());
        }

        public void RemoveById(string id)
        {
            _service.RemoveById(id);
        }

        public void Update(ProductViewModel vm)
        {
            _service.Update(Mapper.Map<ProductViewModel, Product>(vm));
        }
    }
}
