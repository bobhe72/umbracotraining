using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web.Mvc;
using UmbracoDemo.Models;
using Umbraco.Web;

namespace UmbracoDemo.Controllers
{
    public class SiteLayoutController : SurfaceController
    {
        private const string PartialPath = "~/Views/Partials/SiteLayout/";

        public ActionResult RenderHeader()
        {
            var nav = GetObjectFromCache<List<NavigationListItem>>("mainNav", 5, GetNavigationModelFromDatabase);
            //var nav = GetNavigationModelFromDatabase();
            return PartialView($"{PartialPath}_Header.cshtml", nav);
        }

        public ActionResult RenderFooter()
        {
            return PartialView($"{PartialPath}_Footer.cshtml");
        }

        public ActionResult RenderIntro()
        {
            return PartialView($"{PartialPath}_Intro.cshtml");
        }

        public ActionResult RenderTitleControls()
        {
            return PartialView($"{PartialPath}_TitleControls.cshtml");
        }

        /// <summary>
        /// Finds the home page and gets the navigation structure based on it and it's children
        /// </summary>
        /// <returns>A List of NavigationListItems, representing the structure of the site.</returns>
        private List<NavigationListItem> GetNavigationModelFromDatabase()
        {
            var homePage = CurrentPage.AncestorOrSelf(1).DescendantsOrSelf().FirstOrDefault(d=>d.DocumentTypeAlias == "home");
            var nav = new List<NavigationListItem>
            {
                new NavigationListItem(new NavigationLink(homePage?.Url, homePage?.Name))
            };

            var childPages = GetChildNavigationList(homePage);
            if (childPages != null)
                nav.AddRange(GetChildNavigationList(homePage));
            return nav;
        }

        /// <summary>
        /// Loops through the child pages of a given page and their children to get the structure of the site.
        /// </summary>
        /// <param name="page">The parent page which you want the child structure for</param>
        /// <returns>A List of NavigationListItems, representing the structure of the pages below a page.</returns>
        private static List<NavigationListItem> GetChildNavigationList(IPublishedContent page)
        {
            var childPages = page.Children.Where(v=>v.IsVisible()).Where(v => !v.HasValue("excludeFromTopNavigation") || (v.HasValue("excludeFromTopNavigation") && v.GetPropertyValue<bool>("excludeFromTopNavigation"))).ToList();
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

        /// <summary>
        /// A generic function for getting and setting objects to the memory cache.
        /// </summary>
        /// <typeparam name="T">The type of the object to be returned.</typeparam>
        /// <param name="cacheItemName">The name to be used when storing this object in the cache.</param>
        /// <param name="cacheTimeInMinutes">How long to cache this object for.</param>
        /// <param name="objectSettingFunction">A parameterless function to call if the object isn't in the cache and you need to set it.</param>
        /// <returns>An object of the type you asked for</returns>
        private static T GetObjectFromCache<T>(string cacheItemName, int cacheTimeInMinutes, Func<T> objectSettingFunction)
        {
            var cache = MemoryCache.Default;
            var cachedObject = (T)cache[cacheItemName];
            if (cachedObject != null) return cachedObject;
            var policy = new CacheItemPolicy {AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(cacheTimeInMinutes)};
            cachedObject = objectSettingFunction();
            cache.Set(cacheItemName, cachedObject, policy);
            return cachedObject;
        }
    }
}
