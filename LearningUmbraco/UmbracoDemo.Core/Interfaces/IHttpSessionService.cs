using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UmbracoDemo.Core.Interfaces
{
    public interface IHttpSessionService
    {
        T Get<T>(string key);
        void Set(string key, object data);
        void Remove(string key);
        void Flush();
    }
}
