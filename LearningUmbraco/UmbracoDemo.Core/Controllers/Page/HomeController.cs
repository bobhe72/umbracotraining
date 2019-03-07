using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Umbraco.Web;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;
using UmbracoDemo.Core.Models.Content;
using UmbracoDemo.Core.ViewModels;

namespace UmbracoDemo.Core.Controllers.Page
{
    public class HomeController : RenderMvcController
    {
        public override ActionResult Index(RenderModel renderModel)
        {
            var model = new HomeViewModel(renderModel.Content);
            return View("Home", model);
        }
    }
}
