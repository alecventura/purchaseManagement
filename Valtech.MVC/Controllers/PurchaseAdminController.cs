using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Application.ViewModels.PurchaseModule;

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

        #region Render Views
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
        #endregion

        #region PaymentMethod 
        public JsonResult GetPaymentMethodList()
        {
            List<PaymentMethodViewModel> list = _appPaymentMethod.GetAll();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        [HttpDelete]
        public JsonResult DeletePaymentMethod(string Id)
        {
            _appPaymentMethod.RemoveById(Id);

            return Json(_appPaymentMethod.GetAll(), JsonRequestBehavior.AllowGet);
        }        

        [HttpPost]
        public JsonResult CreatePaymentMethod(PaymentMethodViewModel vm)
        {
            _appPaymentMethod.Add(vm);

            return Json(_appPaymentMethod.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdatePaymentMethod(PaymentMethodViewModel vm)
        {
            _appPaymentMethod.Update(vm);

            return Json(_appPaymentMethod.GetAll(), JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region ProductCategory 
        public JsonResult GetProductCategoryList()
        {
            List<ProductCategoryViewModel> list = _appProductCategory.GetAll();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        [HttpDelete]
        public JsonResult DeleteProductCategory(string Id)
        {
            _appProductCategory.RemoveById(Id);

            return Json(_appProductCategory.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CreateProductCategory(ProductCategoryViewModel vm)
        {
            _appProductCategory.Add(vm);

            return Json(_appProductCategory.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdateProductCategory(ProductCategoryViewModel vm)
        {
            _appProductCategory.Update(vm);

            return Json(_appProductCategory.GetAll(), JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Product 
        public JsonResult GetProductList()
        {
            List<ProductViewModel> list = _appProduct.GetAll();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        [HttpDelete]
        public JsonResult DeleteProduct(string Id)
        {
            _appProduct.RemoveById(Id);

            return Json(_appProduct.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CreateProduct(ProductViewModel vm)
        {
            _appProduct.Add(vm);

            return Json(_appProduct.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdateProduct(ProductViewModel vm)
        {
            _appProduct.Update(vm);

            return Json(_appProduct.GetAll(), JsonRequestBehavior.AllowGet);
        }
        #endregion
    }
}