using System;
using System.Collections.Generic;
using System.Threading;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ServiceStack.Caching;
using UmbracoDemo.Core.Interfaces;
using UmbracoDemo.Core.Services.Caching;

namespace UmbracoDemo.Core.Tests
{
    [TestClass]
    public class MemCacheServiceTests
    {
        private IMemCacheServices MemCacheServices;

        [TestInitialize]
        public void Init()
        {
            MemCacheServices = new MemCacheServices(new MemoryCacheClient());
        }

        [TestMethod]
        public void Cache_Function_Value_IsValid()
        {
            //arrange: load test function into cache
            var item = MemCacheServices.GetOrAdd(GetTestValues(), "testGetOrAdd");

            //act: sleep for 2 second
            Thread.Sleep(2000);

            //assert value still in cache
            Assert.IsNotNull(item);

        }

        [TestCleanup]
        public void Cleanup()
        {
            MemCacheServices.Flush();
        }

        private List<string> GetTestValues()
        {
            return new List<string>{"One", "Two", "Three"};
        }
    }

}
