using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Valtech.Application.Interface.PurchaseModule;

namespace Valtech.MVC.Controllers
{
    public class PurchaseAdminController : Controller
    {
        private readonly IProductApplication _appProduct;
        private readonly IProductCategoryApplication _appProductCategory;
        private readonly IPaymentMethodApplication _appPaymentMethod;

        public PurchaseAdminController(IProductApplication appProduct, IProductCategoryApplication appProductCategory, IPaymentMethodApplication appPaymentMethod)
            : base()
        {
            _appProduct = appProduct;
            _appProductCategory = appProductCategory;
            _appPaymentMethod = appPaymentMethod;
        }

        public ActionResult Product()
        {
            return View();
        }

        public ActionResult ProductCategory()
        {
            return View();
        }

        public ActionResult PaymentMethod()
        {
            return View();
        }
    }
}