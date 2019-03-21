using Umbraco.Core.Models;

namespace LearningProject.Website.Core.Models.Global
{
    public class Cookie
    {
        public string Headline { get; set; }
        public string Description { get; set; }
        public IPublishedContent Link { get; set; }
    }
}
