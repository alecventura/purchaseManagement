using System.Web;
using System.Web.Optimization;

namespace Valtech.MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/base").Include(
                        "~/Scripts/Lib/jquery/jquery-2.1.4.min.js",
                        "~/Scripts/Lib/modernizr-*",
                        "~/Scripts/Lib/bootstrap.js",
                        "~/Scripts/Lib/noty/packaged/jquery.noty.packaged.min.js",
                        "~/Scripts/Lib/lodash.min.js",
                        "~/Scripts/Util/utils.js",
                        "~/Scripts/Lib/knockout/knockout-3.3.0.js",
                        "~/Scripts/Lib/knockout/knockout.mapping-latest.js",
                        "~/Scripts/Lib/respond.js",
                        "~/Scripts/Valtech/Resource/geralResource.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            var jqueryMaskMoney = new[] {
                "~/Scripts/Lib/jquery/jquery.maskMoney.js"
            };

            // Pages Bundles

            // PurchaseAdmin/PaymentMethod
            bundles.Add(new ScriptBundle("~/bundles/PurchaseAdminPaymentMethod").Include(
                "~/Scripts/Valtech/Resource/PurchaseAdmin/paymentMethodResource.js",
                "~/Scripts/Valtech/Service/PurchaseAdmin/paymentMethodService.js",
                "~/Scripts/Valtech/Behavior/PurchaseAdmin/paymentMethod.js"));

            // PurchaseAdmin/Product
            bundles.Add(new ScriptBundle("~/bundles/PurchaseAdminProduct")
                .Include(jqueryMaskMoney)
                .Include(
                "~/Scripts/Valtech/Resource/PurchaseAdmin/productResource.js",
                "~/Scripts/Valtech/Service/PurchaseAdmin/productService.js",
                "~/Scripts/Valtech/Behavior/PurchaseAdmin/product.js"));

            // PurchaseAdmin/ProductCategory
            bundles.Add(new ScriptBundle("~/bundles/PurchaseAdminProductCategory").Include(
                "~/Scripts/Valtech/Resource/PurchaseAdmin/productCategoryResource.js",
                "~/Scripts/Valtech/Service/PurchaseAdmin/productCategoryService.js",
                "~/Scripts/Valtech/Behavior/PurchaseAdmin/productCategory.js"));

            // Purchase/Start
            bundles.Add(new ScriptBundle("~/bundles/PurchaseStart")
                .Include(jqueryMaskMoney)
                .Include(
                "~/Scripts/Valtech/Resource/Purchase/startResource.js",
                "~/Scripts/Valtech/Service/Purchase/startService.js",
                "~/Scripts/Valtech/Behavior/Purchase/start.js"));

            // Purchase/Finish
            bundles.Add(new ScriptBundle("~/bundles/PurchaseFinish")
                .Include(jqueryMaskMoney)
                .Include(
                "~/Scripts/Valtech/Resource/Purchase/finishResource.js",
                "~/Scripts/Valtech/Service/Purchase/finishService.js",
                "~/Scripts/Valtech/Behavior/Purchase/finish.js"));
        }
    }
}
