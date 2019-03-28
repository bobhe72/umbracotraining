using System.Collections.Generic;
using System.Web.Mvc;
using LearningWebsite.Model;
using LearningWebsite.Repo;

namespace LearningWebsite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult News()
        {
            return View();
        }

        public ActionResult Link(int id)
        {
            var model = GetLinkModel(id);

            return PartialView("Partials/Index/_Link", model);
        }

        private LinkModel GetLinkModel(int id)
        {
            switch (id)
            {
                case 1:
                    return LinkDataSources.GetCellFreeLinkModel();
                case 2:
                    return LinkDataSources.GetAutomationLinkModel();
                case 3:
                    return LinkDataSources.GetCareerLinkModel();
                default:
                    return new LinkModel();

            }
        }
    }
}