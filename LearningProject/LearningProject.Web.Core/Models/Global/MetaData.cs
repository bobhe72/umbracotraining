using Our.Umbraco.Ditto;
using System;
using System.Web;
using Umbraco.Web;

namespace LearningProject.Website.Core.Models.Global
{
    public class MetaData
    {
        public int Id { get; set; }
        public bool NoIndex { get; set; }
        public bool NoFollow { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Keywords { get; set; }
        public int CardImage { get; set; }

        [DittoIgnore]
        public string FollowValue
        {
            get
            {
                return NoIndex ? "noindex" : "index";
            }
        }
        [DittoIgnore]
        public string IndexValue
        {
            get
            {
                return NoFollow ? "nofollow" : "follow";
            }
        }
        [DittoIgnore]
        public string PageName
        {
            get
            {
                var umbracoHelper = new UmbracoHelper(UmbracoContext.Current);
                return !string.IsNullOrEmpty(Title) ? Title : umbracoHelper.TypedContent(Id).Name;
            }
        }
        [DittoIgnore]
        public string CardImageUrl
        {
            get
            {
                if(CardImage > 0)
                {
                    var umbracoHelper = new UmbracoHelper(UmbracoContext.Current);
                    return HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + umbracoHelper.TypedMedia(CardImage).Url;
                }
                return "";
            }        
        }
    }
}
