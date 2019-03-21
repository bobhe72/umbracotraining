using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace LearningProject.Website.Core.Helpers
{
    public static class ContentFinderHelpers
    {
        public static IPublishedContent GetHomePage(UmbracoHelper helper)
        {
            return helper.TypedContentAtRoot().Where(m => m.ContentType.Alias.Equals("homePage")).First();
        }
        public static IPublishedContent GetDataSources(UmbracoHelper helper)
        {
            return helper.TypedContentAtRoot().Where(m => m.ContentType.Alias.Equals("dataSources")).First();
        }
        public static IPublishedContent GetSiteSettings(UmbracoHelper helper)
        {
            var homePage = GetHomePage(helper);

            var siteSettings = homePage.Descendants("siteSettings").First();

            return siteSettings;
        }
    }
}
