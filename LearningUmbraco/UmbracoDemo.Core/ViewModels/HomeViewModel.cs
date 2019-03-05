using Umbraco.Core.Models;
using UmbracoDemo.Core.ViewModels.Base;

namespace UmbracoDemo.Core.ViewModels
{
    public class HomeViewModel : BaseViewModel
    {
        public HomeViewModel(IPublishedContent content) 
            : base(content)
        {
        }
    }
}
