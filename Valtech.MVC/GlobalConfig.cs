using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Valtech.MVC
{
    public class GlobalConfig
    {
        public static string GetBundleNameByUrl(string url)
        {
            List<string> paths = url.Split('?').ToList();
            paths = paths.First().Split('/').ToList().Where(x => !string.IsNullOrEmpty(x)).ToList();
            return "~/bundles/" + paths[paths.Count - 2] + paths.Last();
        }
    }
}