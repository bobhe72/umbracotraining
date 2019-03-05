using System.Web.Mvc;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;
using UmbracoDemo.Core.ViewModels;

namespace UmbracoDemo.Core.Controllers.Page
{
    public class HomePageController : RenderMvcController
    {
        public override ActionResult Index(RenderModel renderModel)
        {
            var model = new HomeViewModel(renderModel.Content);
            return View("Home", model);
        }
    }
}
