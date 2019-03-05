using LazyCache;
using UmbracoDemo.Core.Interfaces;

namespace UmbracoDemo.Core.Services.Base
{
    public class ServiceBase
    {
        protected IAppCache CacheProviderService;
        protected IMediaProviderService MediaProviderService;
    }
}
