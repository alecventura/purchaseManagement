using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Valtech.MVC.Controllers;
using System.Web.Mvc;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Application.ViewModels.PurchaseModule;
using Valtech.MVC.Tests.Controllers.FakeClasses;

namespace Valtech.MVC.Tests.Controllers
{

    [TestClass]
    public class PurchaseAdminControllerTest
    {
        [TestMethod]
        public void RenderProductView()
        {
            FakeProductApplication _appProduct = new FakeProductApplication();
            FakeProductCategoryApplication _appProductCategory = new FakeProductCategoryApplication();
            FakePaymentMethodApplication _appPaymentMethod = new FakePaymentMethodApplication();

            PurchaseAdminController controller = new PurchaseAdminController(_appProduct, _appProductCategory, _appPaymentMethod);
            ViewResult result = controller.Product() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void RenderProductCategoryView()
        {
            FakeProductApplication _appProduct = new FakeProductApplication();
            FakeProductCategoryApplication _appProductCategory = new FakeProductCategoryApplication();
            FakePaymentMethodApplication _appPaymentMethod = new FakePaymentMethodApplication();

            PurchaseAdminController controller = new PurchaseAdminController(_appProduct, _appProductCategory, _appPaymentMethod);
            ViewResult result = controller.ProductCategory() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void RenderPaymentMethodView()
        {
            FakeProductApplication _appProduct = new FakeProductApplication();
            FakeProductCategoryApplication _appProductCategory = new FakeProductCategoryApplication();
            FakePaymentMethodApplication _appPaymentMethod = new FakePaymentMethodApplication();

            PurchaseAdminController controller = new PurchaseAdminController(_appProduct, _appProductCategory, _appPaymentMethod);
            ViewResult result = controller.PaymentMethod() as ViewResult;
            Assert.IsNotNull(result);
        }
    }

}
