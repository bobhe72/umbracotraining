using System.Collections.Generic;
using Umbraco.Core.Models;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Models.Navigation;

namespace UmbracoDemo.Core.Controllers.Xtensions
{
    public class GlobalSurfaceServices : IGlobalSurfaceServices
    {
        private readonly ISiteLayoutServices SiteLayoutServices;

        public GlobalSurfaceServices(ISiteLayoutServices siteLayoutServices)
        {
            SiteLayoutServices = siteLayoutServices;
        }

        public List<NavigationListItem> GetHeaderNavItems(IPublishedContent content)
        {
            var nav = SiteLayoutServices.GetNavigationListItems(content);
            return nav;
        }

    }
}
