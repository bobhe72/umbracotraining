using FourOhFour.Routing;
using Umbraco.Core;
using Umbraco.Web.Routing;

namespace FourOhFour
{
    public class Startup : ApplicationEventHandler
    {
        protected override void ApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {

            //On application starting event...
            //Add to the ContentFinder resolver collection our custom 404 Content Finder resolver
            ContentLastChanceFinderResolver.Current.SetFinder(new FourOhFourContentFinder());

        }
    }

}