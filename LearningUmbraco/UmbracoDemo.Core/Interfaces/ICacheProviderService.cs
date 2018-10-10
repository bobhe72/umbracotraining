using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UmbracoDemo.Core.Interfaces
{
    public interface ICacheProviderService
    {
        T GetOrAdd<T>(string key, Func<T> func);
        T Get<T>(string key);
        void Add(string key, object data, int timeMinutes = 60);
        void Update(string key, object data, int timeMinutes = 60);
        void Clear(string key);
    }
}
