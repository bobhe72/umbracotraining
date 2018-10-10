using System;
using System.Web.Caching;
using UmbracoDemo.Core.Interfaces;

namespace UmbracoDemo.Core.Services
{
    public class CacheProviderService : ICacheProviderService
    {
        protected readonly Cache _appCache;
        public CacheProviderService(Cache appCache)
        {
            _appCache = appCache;

        }

        public void Add(string key, object data, int timeMinutes)
        {
            _appCache.Insert(key, data, null, DateTime.Now.AddMinutes(timeMinutes), TimeSpan.Zero);
        }

        public void Update(string key, object data, int timeMinutes)
        {
            _appCache.Remove(key);
            _appCache.Insert(key, data, null, DateTime.Now.AddMinutes(timeMinutes), TimeSpan.Zero);
        }

        public void Clear(string key)
        {
            _appCache.Remove(key);
        }

        public T Get<T>(string key)
        {
            return (T)_appCache[key];
        }

        public T GetOrAdd<T>(string key, Func<T> func)
        {
            var response = (T)_appCache[key];

            if (response == null)
            {
                response = func();
                Add(key, response, 1440); //1440 minutes = 1 day
            }

            return response;
        }
    }
}
