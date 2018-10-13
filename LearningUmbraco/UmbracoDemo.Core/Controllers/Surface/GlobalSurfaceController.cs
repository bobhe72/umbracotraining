using System.Collections.Generic;
using System.Web.Mvc;
using Umbraco.Web.Mvc;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Models.Navigation;

namespace UmbracoDemo.Core.Controllers.Surface
{
    public class GlobalSurfaceController : SurfaceController
    {
        private readonly ISiteLayoutServices SiteLayoutServices;
        private readonly ICacheProviderService _cacheProviderService;

        private const string PartialPath = "~/Views/Partials/SiteLayout/";

        public GlobalSurfaceController(
            ISiteLayoutServices siteLayoutServices, 
            ICacheProviderService cacheProviderService)
        {
            SiteLayoutServices = siteLayoutServices;
            _cacheProviderService = cacheProviderService;
        }

        public ActionResult RenderHeader()
        {
            var nav = _cacheProviderService.GetOrAdd("navigation-items", GetHeaderNavItems, 1440);
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
