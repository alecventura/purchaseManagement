﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Application.ViewModels.PurchaseModule;

namespace Valtech.MVC.Tests.Controllers.FakeClasses
{
    public class FakeProductCategoryApplication : IProductCategoryApplication
    {
        public void Add(ProductCategoryViewModel vm)
        {
            throw new NotImplementedException();
        }

        public List<ProductCategoryViewModel> GetAll()
        {
            throw new NotImplementedException();
        }

        public void RemoveById(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(ProductCategoryViewModel vm)
        {
            throw new NotImplementedException();
        }
    }
}
