using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Valtech.Application.ViewModels;

namespace Valtech.MVC.Annotations.Filters
{
    public class ValidateModelStateAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            var controller = actionContext.Controller as Controller;
            if (controller != null && !controller.ModelState.IsValid)
            {
                controller.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                actionContext.Result = new JsonResult { Data = ModelStateExtensions.AllErrors(controller.ModelState) };
            }
        }
    }
}