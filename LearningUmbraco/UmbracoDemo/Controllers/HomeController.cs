using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Umbraco.Web.Mvc;

namespace UmbracoDemo.Controllers
{
    public class HomeController : SurfaceController
    {
        private const string PartialPath = "~/Views/Partials/Home/";

        public ActionResult RenderFeatured()
        {
            return PartialView($"{PartialPath}_Featured.cshtml");
        }

        public ActionResult RenderServices()
        {
            return PartialView($"{PartialPath}_Services.cshtml");
        }

        public ActionResult RenderBlog()
        {
            return PartialView($"{PartialPath}_Blog.cshtml");
        }

        public ActionResult RenderClients()
        {
            return PartialView($"{PartialPath}_Clients.cshtml");
        }
    }
}
