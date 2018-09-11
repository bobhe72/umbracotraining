using System;
using ServiceStack.Caching;
using UmbracoDemo.Core.Interfaces;

namespace UmbracoDemo.Core.Services.Caching
{
    public class CacheServices : ICacheServices
    {
        private readonly ICacheClient CacheClient;

        public CacheServices(ICacheClient cacheClient)
        {
            CacheClient = cacheClient;
        }

        public void Flush()
        {
            CacheClient.FlushAll();
        }

        public void Remove(string key)
        {
            CacheClient.Remove(key);
        }

        public T GetOrAdd<T>(Func<T> func, string key, int expMinutes = 10)
        {
            var cached = CacheClient.Get<T>(key);
            if (cached != null)
                return cached;
            CacheClient.Add(key, func, DateTime.Now.AddMinutes(expMinutes));
            return CacheClient.Get<T>(key);
        }

        public T GetOrAdd<T>(T obj, string key, int expMinutes = 10)
        {
            var cached = CacheClient.Get<T>(key);
            if (cached != null)
                return cached;
            CacheClient.Add(key, obj, DateTime.Now.AddMinutes(expMinutes));
            return CacheClient.Get<T>(key);
        }
    }
}
