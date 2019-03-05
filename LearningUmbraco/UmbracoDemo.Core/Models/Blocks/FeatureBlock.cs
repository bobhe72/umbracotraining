using RJP.MultiUrlPicker.Models;
using Umbraco.Core.Models;

namespace UmbracoDemo.Core.Models.Blocks
{
    public class FeatureBlock
    {
        public string Heading { get; set; }
        public string Summary { get; set; }
        public IPublishedContent Image { get; set; }
        public Link Link { get; set; }
    }
}
