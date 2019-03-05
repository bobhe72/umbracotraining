using Umbraco.Core.Models;
using Umbraco.Web;

namespace UmbracoDemo.Core.ViewModels.Base
{
    public class BaseViewModel
    {
        protected BaseViewModel(IPublishedContent content)
        {
            Id = content.Id;
            Title = content.GetPropertyValue<string>("title");
            Description = content.GetPropertyValue<string>("description");
            Url = content.Url;
            UrlName = content.UrlName;
        }

        protected int Id { get; }
        protected string Title { get; }
        protected string Description { get; }
        protected string Url { get; }
        protected string UrlName { get; }
    }
}
