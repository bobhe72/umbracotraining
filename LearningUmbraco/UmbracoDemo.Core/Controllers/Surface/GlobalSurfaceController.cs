using System;
using System.Collections.Generic;
using System.Web.Mvc;
using LazyCache;
using Umbraco.Web.Mvc;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Models.Navigation;

namespace UmbracoDemo.Core.Controllers.Surface
{
    public class GlobalSurfaceController : SurfaceController
    {
        private readonly ISiteLayoutServices SiteLayoutServices;
        private readonly IAppCache AppCache;

        private const string PartialPath = "~/Views/Partials/SiteLayout/";

        public GlobalSurfaceController(
            ISiteLayoutServices siteLayoutServices, 
            IAppCache appCache)
        {
            SiteLayoutServices = siteLayoutServices;
            AppCache = appCache;
        }

        public ActionResult RenderHeader()
        {
            var expirytime = new TimeSpan(0, 30, 0);
            var nav = AppCache.GetOrAdd("navigation-items", ()=> SiteLayoutServices.GetNavigationListItems(CurrentPage), expirytime);
            return PartialView($"{PartialPath}_Header.cshtml", nav);
        }

        public ActionResult RenderFooter()
        {
            return PartialView($"{PartialPath}_Footer.cshtml");
        }

        public ActionResult RenderIntro()
        {
            return PartialView($"{PartialPath}_Intro.cshtml");
        }

        public ActionResult RenderTitleControls()
        {
            return PartialView($"{PartialPath}_TitleControls.cshtml");
        }

    }
}
