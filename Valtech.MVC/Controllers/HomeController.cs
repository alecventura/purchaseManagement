﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Valtech.MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NotFound()
        {
            //return RedirectToAction("NotFound", "Shared");
            return View("../Shared/NotFound");
        }

        public ActionResult Error()
        {
            //return RedirectToAction("Error", "Shared");
            return View("../Shared/Error");
        }

        public ActionResult Forbidden()
        {
            //return RedirectToAction("Shared", "Forbidden");
            return View("../Shared/Forbidden");
        }
    }
}