using System.Web.Mvc;
using LearningProject.Website.Core.Models.Global;
using Our.Umbraco.Ditto;
using LearningProject.Website.Core.Helpers;
using Umbraco.Web.Mvc;

namespace LearningProject.Website.Core.Controllers.Surface
{
    public class NavigationSurfaceController : SurfaceController
    {
        public ActionResult RenderNavigation()
        {
            var model = ContentFinderHelpers.GetHomePage(Umbraco).As<Navigation>();
            switch(model.PrimaryNavigation.DocumentTypeAlias)
            {
                case "basicNavigation":
                    return PartialView("Navigation/BasicNavigation", model);
            }
            return null;
        }
    }
}
