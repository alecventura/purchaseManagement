using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Application.ViewModels;
using Valtech.Application.ViewModels.PurchaseModule;

namespace Valtech.MVC.Controllers
{
    public class PurchaseController : Controller
    {
        private readonly IPurchaseApplication _appPurchase;

        public PurchaseController(IPurchaseApplication appPurchase)
            : base()
        {
            _appPurchase = appPurchase;
        }

        #region Render Views
        public ActionResult Start()
        {
            return View();
        }

        public ActionResult Finish()
        {
            return View();
        }

        public ActionResult Success()
        {
            return View();
        }
        #endregion

        [HttpPost]
        public ActionResult StoreProductsOnSession(List<ProductOrderViewModel> vm)
        {
            HttpContext.Session["ProductsInCart"] = vm;

            return Json(Url.Action("Finish", "Purchase"));
        }

        
        public JsonResult GetSelectedProductsList()
        {
            List<ProductOrderViewModel> products = HttpContext.Session["ProductsInCart"] as List<ProductOrderViewModel>;

            return Json(products?? new List<ProductOrderViewModel>(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult ConfirmPurchase(PurchaseConfirmViewModel vm)
        {
            List<ProductOrderViewModel> products = HttpContext.Session["ProductsInCart"] as List<ProductOrderViewModel>;
            _appPurchase.ConfirmPurchase(products, vm.PaymentMethodId);

            HttpContext.Session["ProductsInCart"] = null;

            return Json(Url.Action("Success", "Purchase"));
        }

    }
}