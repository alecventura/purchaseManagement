using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Valtech.MVC;
using Valtech.MVC.Controllers;

namespace Valtech.MVC.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void RenderIndexView()
        {
            HomeController controller = new HomeController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void RenderNotFoundView()
        {
            HomeController controller = new HomeController();
            ViewResult result = controller.NotFound() as ViewResult;
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void RenderErrorView()
        {
            HomeController controller = new HomeController();
            ViewResult result = controller.Error() as ViewResult;
            Assert.IsNotNull(result);
        }
    }
}
