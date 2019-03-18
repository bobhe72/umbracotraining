using System.Web.Mvc;
using LearningWebsite.Model;

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
                case 2:
                    return new LinkModel
                    {
                        Title = "Title12",
                        Description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
                    };
                case 3:
                    return new LinkModel
                    {
                        Title = "Title13",
                        Description = "default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like"
                    };
                case 4:
                    return new LinkModel
                    {
                        Title = "Title14",
                        Description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
                    };
                case 5:
                    return new LinkModel
                    {
                        Title = "Title15",
                        Description = "passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and"
                    };
                case 6:
                    return new LinkModel
                    {
                        Title = "Title162",
                        Description = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompa"
                    };
                default:
                    return new LinkModel
                    {
                        Title = "Title11",
                        Description = "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s"
                    };

            }
        }
    }
}