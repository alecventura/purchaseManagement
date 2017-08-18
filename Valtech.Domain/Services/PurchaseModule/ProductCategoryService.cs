using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Domain.Entities.PurchaseModule;
using Valtech.Domain.Interfaces.Repository.PurchaseModule;
using Valtech.Domain.Interfaces.Services.PurchaseModule;

namespace Valtech.Domain.Services.PurchaseModule
{
    public class ProductCategoryService : ServiceBase<ProductCategory>, IProductCategoryService
    {
        private readonly IProductCategoryRepository _repository;
        public ProductCategoryService(IProductCategoryRepository repository)
            : base(repository)
        {
            _repository = repository;
        }
    }
}
