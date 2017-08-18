using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Domain.Entities.PurchaseModule;
using Valtech.Domain.Interfaces.Repository.PurchaseModule;

namespace Valtech.Data.Repository.PurchaseModule
{
    public class ProductCategoryRepository : RepositoryBase<ProductCategory>, IProductCategoryRepository
    {
    }
}
