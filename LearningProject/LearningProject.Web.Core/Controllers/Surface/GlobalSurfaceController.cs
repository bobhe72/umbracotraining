using System.Web.Mvc;
using Umbraco.Web.Mvc;
using LearningProject.Website.Core.Models.Global;
using Our.Umbraco.Ditto;
using LearningProject.Website.Core.Helpers;

namespace LearningProject.Website.Core.Controllers.Surface
{
    public class GlobalSurfaceController : SurfaceController
    {
        public ActionResult RenderGoogleAnalytics()
        {
            var model = ContentFinderHelpers.GetSiteSettings(Umbraco).As<GoogleAnalytics>();
            if(!string.IsNullOrEmpty(model.GoogleAnalyticsUACode))
            {
                return PartialView("Global/GoogleAnalytics", model);
            }
            return null;
        }
        public ActionResult RenderGoogleTagManager()
        {
            var model = ContentFinderHelpers.GetSiteSettings(Umbraco).As<GoogleTagManager>();
            if (!string.IsNullOrEmpty(model.GoogleTagManagerCode))
            {
                return PartialView("Global/GoogleTagManager", model);
            }
            return null;
        }
        public ActionResult RenderCanonical()
        {
            var model = CurrentPage.As<CanonicalUrl>();
            return PartialView("Global/Canonical", model);
        }
        public ActionResult RenderMetaDetails()
        {
            var model = CurrentPage.As<MetaData>();
            return PartialView("Global/MetaData", model);
        }
        public ActionResult RenderCookieBanner()
        {
            var model = ContentFinderHelpers.GetSiteSettings(Umbraco).As<Cookie>();
            return PartialView("Global/CookieBanner", model);
        }

    }
}
