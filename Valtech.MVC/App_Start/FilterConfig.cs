using System.Web;
using System.Web.Mvc;
using Valtech.MVC.Annotations.Filters;

namespace Valtech.MVC
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new ValidateModelStateAttribute());
        }
    }
}
