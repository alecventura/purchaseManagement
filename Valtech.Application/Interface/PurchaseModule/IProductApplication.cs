using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.ViewModels.PurchaseModule;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Application.Interface.PurchaseModule
{
    public interface IProductApplication : IAppServiceBase<Product>
    {
        List<ProductViewModel> GetAll();
        void RemoveById(string id);
        void Add(ProductViewModel vm);
        void Update(ProductViewModel vm);
    }
}
