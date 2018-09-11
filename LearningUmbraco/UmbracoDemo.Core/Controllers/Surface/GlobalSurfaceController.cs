using System.Collections.Generic;
using System.Web.Mvc;
using Umbraco.Web.Mvc;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Models.Navigation;

namespace UmbracoDemo.Core.Controllers.Surface
{
    public class GlobalSurfaceController : SurfaceController
    {
        private readonly ICacheServices CacheServices;
        private readonly ISiteLayoutServices SiteLayoutServices;

        private const string PartialPath = "~/Views/Partials/SiteLayout/";

        public GlobalSurfaceController(
            ICacheServices cacheServices, 
            ISiteLayoutServices siteLayoutServices)
        {
            CacheServices = cacheServices;
            SiteLayoutServices = siteLayoutServices;
        }

        public ActionResult RenderHeader()
        {
            var items = SiteLayoutServices.GetNavigationListItems(CurrentPage);
            //var nav = CacheServices.GetOrAdd(GetNavigationItems, "mainNav", 20);
            return PartialView($"{PartialPath}_Header.cshtml", items);
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

        private List<NavigationListItem> GetNavigationItems()
        {
            return SiteLayoutServices.GetNavigationListItems(CurrentPage);
        }

    }
}
