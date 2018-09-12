using System.Web.Mvc;
using Umbraco.Web.Mvc;
using UmbracoDemo.Core.Interfaces;

namespace UmbracoDemo.Core.Controllers.Surface
{
    public class GlobalSurfaceController : SurfaceController
    {
        private readonly IGlobalSurfaceServices GlobalSurfaceServices;

        private const string PartialPath = "~/Views/Partials/SiteLayout/";

        public GlobalSurfaceController(IGlobalSurfaceServices globalSurfaceServices)
        {
            GlobalSurfaceServices = globalSurfaceServices;
        }

        public ActionResult RenderHeader()
        {
            //var items = SiteLayoutServices.GetNavigationListItems(CurrentPage);
            var nav = GlobalSurfaceServices.GetHeaderNavItems(CurrentPage);
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
