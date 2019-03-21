using System;
using System.Web;
using Umbraco.Web;

namespace LearningProject.Website.Core.Models.Global
{
    public class CanonicalUrl
    {
        public string CanonicalOverride { get; set; }
        public int Id { get; set; }
        public string Url { get; set; }
        public string Canonical
        {
            get
            {            
                if (!string.IsNullOrEmpty(CanonicalOverride))
                {
                    return  HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + CanonicalOverride;
                }
              
                return this.Url;
            }
        }
    }
}


