using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;
using UmbracoDemo.Core.Models.Navigation;

namespace UmbracoDemo.Core.Interfaces
{
    public interface ISiteLayoutServices
    {
        List<NavigationListItem> GetNavigationListItems(IPublishedContent content);
    }
}
