using System;

namespace UmbracoDemo.Core.Interfaces
{
    public interface ICacheServices
    {
        void Flush();
        void Remove(string key);
        T GetOrAdd<T>(Func<T> func, string key, int expMinutes = 10);
        T GetOrAdd<T>(T obj, string key, int expMinutes = 10);
    }
}
