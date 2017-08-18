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
                        "~/Scripts/Lib/lodash.min.js",
                        "~/Scripts/Util/utils.js",
                        "~/Scripts/Lib/knockout/knockout-3.3.0.js",
                        "~/Scripts/Lib/knockout/knockout.mapping-latest.js",
                        "~/Scripts/Lib/respond.js",
                        "~/Scripts/Valtech/Resource/geralResource.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // Pages Bundles

            // PurchaseAdmin/PaymentMethod
            bundles.Add(new ScriptBundle("~/bundles/PurchaseAdminPaymentMethod").Include(
                "~/Scripts/ImbitubaGP/Resource/PurchaseAdmin/paymentMethodResource.js",
                "~/Scripts/ImbitubaGP/Service/PurchaseAdmin/paymentMethodService.js",
                "~/Scripts/ImbitubaGP/Behavior/PurchaseAdmin/paymentMethod.js"));

            // PurchaseAdmin/Product
            bundles.Add(new ScriptBundle("~/bundles/PurchaseAdminProduct").Include(
                "~/Scripts/ImbitubaGP/Resource/PurchaseAdmin/productResource.js",
                "~/Scripts/ImbitubaGP/Service/PurchaseAdmin/productService.js",
                "~/Scripts/ImbitubaGP/Behavior/PurchaseAdmin/product.js"));

            // PurchaseAdmin/ProductCategory
            bundles.Add(new ScriptBundle("~/bundles/PurchaseAdminProductCategory").Include(
                "~/Scripts/ImbitubaGP/Resource/PurchaseAdmin/productCategoryResource.js",
                "~/Scripts/ImbitubaGP/Service/PurchaseAdmin/productCategoryService.js",
                "~/Scripts/ImbitubaGP/Behavior/PurchaseAdmin/productCategory.js"));

            // Purchase/Start
            bundles.Add(new ScriptBundle("~/bundles/PurchaseStart").Include(
                "~/Scripts/ImbitubaGP/Resource/Purchase/startResource.js",
                "~/Scripts/ImbitubaGP/Service/Purchase/startService.js",
                "~/Scripts/ImbitubaGP/Behavior/Purchase/start.js"));

            // Purchase/Finish
            bundles.Add(new ScriptBundle("~/bundles/PurchaseFinish").Include(
                "~/Scripts/ImbitubaGP/Resource/Purchase/finishResource.js",
                "~/Scripts/ImbitubaGP/Service/Purchase/finishService.js",
                "~/Scripts/ImbitubaGP/Behavior/Purchase/finish.js"));
        }
    }
}
