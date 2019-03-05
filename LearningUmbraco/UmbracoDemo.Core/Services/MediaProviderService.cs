using System;
using System.Web;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Services.Base;

namespace UmbracoDemo.Core.Services
{
    public class MediaProviderService : ServiceBase, IMediaProviderService
    {
        public MediaProviderService(IMediaProviderService mediaProviderService)
        {
            MediaProviderService = mediaProviderService;
        }

        public HttpPostedFileBase GetMedia(int mediaId)
        {
            throw new NotImplementedException();
        }

        public void UploadMedia(HttpPostedFileBase file)
        {
            throw new NotImplementedException();
        }
    }
}

