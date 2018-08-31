using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;
using Umbraco.Web;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Models.Navigation;

namespace UmbracoDemo.Core.Services
{
    public class SiteLayoutServices : ISiteLayoutServices
    {
        private readonly UmbracoHelper UmbracoHelper;

        public SiteLayoutServices(UmbracoHelper umbracoHelper)
        {
            UmbracoHelper = umbracoHelper;
        }

        public List<NavigationListItem> GetNavigationListItems(IPublishedContent content)
        {
            var homePage = UmbracoHelper.TypedContentAtRoot().FirstOrDefault(d => d.ContentType.Alias == "home");
            //var homePage = content.AncestorOrSelf(1).DescendantsOrSelf().FirstOrDefault(d => d.DocumentTypeAlias == "home");
            var nav = new List<NavigationListItem>
            {
                new NavigationListItem(new NavigationLink(homePage?.Url, homePage?.Name))
            };

            var childPages = GetChildNavigationList(homePage);
            if (childPages != null)
                nav.AddRange(GetChildNavigationList(homePage));
            return nav;
        }

        private static List<NavigationListItem> GetChildNavigationList(IPublishedContent page)
        {
            var childPages = page.Children.Where(v => v.IsVisible())
                .Where(v => !v.HasValue("excludeFromTopNavigation")
                            || (v.HasValue("excludeFromTopNavigation")
                                && v.GetPropertyValue<bool>("excludeFromTopNavigation"))).ToList();
            if (!childPages.Any())
                return null;

            var listItems = new List<NavigationListItem>();
            foreach (var childPage in childPages)
            {
                var listItem =
                    new NavigationListItem(new NavigationLink(childPage.Url, childPage.Name))
                    {
                        Items = GetChildNavigationList(childPage)
                    };
                listItems.Add(listItem);
            }

            return listItems;
        }
    }
}

