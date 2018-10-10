using System;
using System.Web;
using UmbracoDemo.Core.Interfaces;

namespace UmbracoDemo.Core.Services
{
    public class WebContextService : IWebContextService
    {
        public Uri RequestUrl
        {
            get
            {
                return HttpContext.Current.Request.Url;
            }
        }

        public string ServerMapPath(string path)
        {
            return HttpContext.Current.Server.MapPath(path);
        }
    }
}
