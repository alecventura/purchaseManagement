using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Valtech.MVC.Controllers
{
    public class PurchaseController : Controller
    {
        #region Render Views
        public ActionResult Start()
        {
            return View();
        }

        public ActionResult Finish()
        {
            return View();
        }
        #endregion
    }
}