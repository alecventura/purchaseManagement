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
    public class ProductCategoryApplication : AppServiceBase<ProductCategory>, IProductCategoryApplication
    {
        private readonly IProductCategoryService _service;
        public ProductCategoryApplication(IProductCategoryService service)
            : base(service)
        {
            _service = service;
        }

        public void Add(ProductCategoryViewModel vm)
        {
            _service.Add(Mapper.Map<ProductCategoryViewModel, ProductCategory>(vm));
        }

        public List<ProductCategoryViewModel> GetAll()
        {
            return Mapper.Map<List<ProductCategory>, List<ProductCategoryViewModel>>(_service.GetAll().ToList());
        }

        public void RemoveById(string id)
        {
            _service.RemoveById(id);
        }

        public void Update(ProductCategoryViewModel vm)
        {
            _service.Update(Mapper.Map<ProductCategoryViewModel, ProductCategory>(vm));
        }
    }
}
