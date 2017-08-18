using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Valtech.Application.ViewModels
{
    public static class ModelStateExtensions
    {
        public static IEnumerable<ViewModelErrors> AllErrors(this ModelStateDictionary modelState)
        {
            var result = new List<ViewModelErrors>();
            var erroneousFields = modelState.Where(ms => ms.Value.Errors.Any())
                                            .Select(x => new { x.Key, x.Value.Errors });

            foreach (var erroneousField in erroneousFields)
            {
                var fieldKey = erroneousField.Key.Split('.').Last();
                var fieldErrors = erroneousField.Errors
                                   .Select(error => new ViewModelErrors(fieldKey, error.ErrorMessage));
                result.AddRange(fieldErrors);
            }

            return result;
        }
    }
}
