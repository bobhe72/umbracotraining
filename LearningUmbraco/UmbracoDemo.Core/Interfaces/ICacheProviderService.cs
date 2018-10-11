using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UmbracoDemo.Core.Interfaces
{
    public interface ICacheProviderService
    {
        T Get<T>(string key);
        T GetOrAdd<T>(string key, Func<T> func, int timeMinutes = 180);
        void Add(string key, object data, int timeMinutes = 180);
        void Update(string key, object data, int timeMinutes = 180);
        void Clear(string key);
    }
}
