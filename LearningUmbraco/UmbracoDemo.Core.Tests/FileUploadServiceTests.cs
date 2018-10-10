using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Services;

namespace UmbracoDemo.Core.Tests
{
    [TestClass]
    public class FileUploadServiceTests
    {
        private IFileUploadService FileUploadService;

        [TestInitialize]
        public void Initialize()
        {
            FileUploadService = new FileUploadService(new WebContextService(), null);
        }

        [TestMethod]
        public void Test_FileUploadService_ShouldBeFine()
        {
        }
    }
}
