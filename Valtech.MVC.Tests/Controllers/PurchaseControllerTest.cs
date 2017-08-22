using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Valtech.MVC.Controllers;
using Valtech.MVC.Tests.Controllers.FakeClasses;

namespace Valtech.MVC.Tests.Controllers
{
    [TestClass]
    public class PurchaseControllerTest
    {
        [TestMethod]
        public void RenderStartView()
        {
            FakePurchaseApplication _appPurchase = new FakePurchaseApplication();

            PurchaseController controller = new PurchaseController(_appPurchase);
            ViewResult result = controller.Start() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void RenderFinishView()
        {
            FakePurchaseApplication _appPurchase = new FakePurchaseApplication();

            PurchaseController controller = new PurchaseController(_appPurchase);
            ViewResult result = controller.Finish() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void RenderSuccessView()
        {
            FakePurchaseApplication _appPurchase = new FakePurchaseApplication();

            PurchaseController controller = new PurchaseController(_appPurchase);
            ViewResult result = controller.Success() as ViewResult;
            Assert.IsNotNull(result);
        }
    }
}
