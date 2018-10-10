using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UmbracoDemo.Core.Interfaces
{
    public interface IWebContextService
    {
        Uri RequestUrl { get; }
        string ServerMapPath(string path);
    }
}
