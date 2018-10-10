using System;
using System.IO;
using Umbraco.Core.Logging;
using System.Web;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Models.Shared;

namespace UmbracoDemo.Core.Services
{
    public class FileUploadService : IFileUploadService
    {
        private readonly IWebContextService WebContextService;
        private readonly ILogger Logger;

        public FileUploadService(IWebContextService webContextService, ILogger logger)
        {
            WebContextService = webContextService;
            Logger = logger;
        }

        public FileUploadResult UploadFile(HttpPostedFileBase file, string folderName)
        {
            return UploadHttpPostedFileBaseFile(file, folderName);
        }

        private FileUploadResult UploadHttpPostedFileBaseFile(HttpPostedFileBase fileUpload, string folderName)
        {
            try
            {
                //get file extension
                var fileExtension = Path.GetExtension(fileUpload.FileName);

                //create a unique file name
                var fileName = Guid.NewGuid().ToString();

                //create a unique file name
                var fullFileName = $"{fileName}{fileExtension}";

                //check or create save folder
                var uploadUrl = WebContextService.ServerMapPath($"~/{folderName}");
                if (!Directory.Exists(uploadUrl))
                    Directory.CreateDirectory(uploadUrl);

                //create save path
                var filePath = Path.Combine(uploadUrl, fullFileName);

                //save file
                fileUpload.SaveAs(filePath);

                //return file name and type
                return new FileUploadResult { FileName = fileName, FileExtension = fileExtension };

            }
            catch (Exception ex)
            {
                Logger.Error(typeof(FileUploadService), $"failed to upload file into {folderName}", ex);
                throw;
            }

        }

    }
}
