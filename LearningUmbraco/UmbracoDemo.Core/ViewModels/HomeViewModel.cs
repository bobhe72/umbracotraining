using System.Globalization;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;
using UmbracoDemo.Core.Models.Content;

namespace UmbracoDemo.Core.ViewModels
{
    public class HomeViewModel : RenderModel
    {
        public Introduction Intro { get; set; }

        public HomeViewModel(IPublishedContent content, CultureInfo culture) 
            : base(content, culture)
        {
        }

        public HomeViewModel(IPublishedContent content) 
            : base(content)
        {
            Intro = new Introduction
            {
                Title = content.GetPropertyValue<string>("title"),
                Subtitle = content.GetPropertyValue<string>("subtitle"),
            };
        }
    }
}
