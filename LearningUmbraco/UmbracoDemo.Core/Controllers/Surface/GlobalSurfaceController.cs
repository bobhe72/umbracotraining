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
            IAppCache cacheProviderService)
        {
            SiteLayoutServices = siteLayoutServices;
            AppCache = cacheProviderService;
        }

        public ActionResult RenderHeader()
        {
            var nav = AppCache.GetOrAdd("navigation-items", GetHeaderNavItems, DateTimeOffset.Now.AddHours(1));
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

        private List<NavigationListItem> GetHeaderNavItems()
        {
            return SiteLayoutServices.GetNavigationListItems(CurrentPage);
        }
    }
}
