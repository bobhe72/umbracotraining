using System.Web;
using UmbracoDemo.Core.Models.Shared;

namespace UmbracoDemo.Core.Interfaces
{
    public interface IFileUploadService
    {
        FileUploadResult UploadFile(HttpPostedFileBase file, string folderName);
    }
}
