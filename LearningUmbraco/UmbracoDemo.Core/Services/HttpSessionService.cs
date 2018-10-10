using System.Web;
using UmbracoDemo.Core.Interfaces;

namespace UmbracoDemo.Core.Services
{
    public class HttpSessionService : IHttpSessionService
    {
        public T Get<T>(string key)
        {
            return (T)HttpContext.Current.Session[key];
        }

        public void Set(string key, object data)
        {
            HttpContext.Current.Session[key] = data;
        }

        public void Remove(string key)
        {
            HttpContext.Current.Session.Remove(key);
            HttpContext.Current.Session[key] = null;
        }

        public void Flush()
        {
            HttpContext.Current.Session.Clear();
            HttpContext.Current.Session.Abandon();
        }
    }
}
