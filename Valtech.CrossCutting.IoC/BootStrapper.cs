using SimpleInjector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.Implementation;
using Valtech.Application.Implementation.PurchaseModule;
using Valtech.Application.Interface;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Data.Repository;
using Valtech.Data.Repository.PurchaseModule;
using Valtech.Domain.Interfaces.Repository;
using Valtech.Domain.Interfaces.Repository.PurchaseModule;
using Valtech.Domain.Interfaces.Services;
using Valtech.Domain.Interfaces.Services.PurchaseModule;
using Valtech.Domain.Services;
using Valtech.Domain.Services.PurchaseModule;

namespace Valtech.CrossCutting.IoC
{
    public class BootStrapper
    {
        public static void RegisterServices(Container container)
        {

            // Repositories
            container.Register(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));
            container.Register<IPaymentMethodRepository, PaymentMethodRepository>(Lifestyle.Scoped);
            container.Register<IProductCategoryRepository, ProductCategoryRepository>(Lifestyle.Scoped);
            container.Register<IProductRepository, ProductRepository>(Lifestyle.Scoped);
            container.Register<IPurchaseRepository, PurchaseRepository>(Lifestyle.Scoped);

            // Domain Services
            container.Register(typeof(IServiceBase<>), typeof(ServiceBase<>));
            container.Register<IPaymentMethodService, PaymentMethodService>(Lifestyle.Scoped);
            container.Register<IProductCategoryService, ProductCategoryService>(Lifestyle.Scoped);
            container.Register<IProductService, ProductService>(Lifestyle.Scoped);
            container.Register<IPurchaseService, PurchaseService>(Lifestyle.Scoped);

            // Application
            container.Register(typeof(IAppServiceBase<>), typeof(AppServiceBase<>));
            container.Register<IPaymentMethodApplication, PaymentMethodApplication>(Lifestyle.Scoped);
            container.Register<IProductCategoryApplication, ProductCategoryApplication>(Lifestyle.Scoped);
            container.Register<IProductApplication, ProductApplication>(Lifestyle.Scoped);
            container.Register<IPurchaseApplication, PurchaseApplication>(Lifestyle.Scoped);


        }        

    }
}
