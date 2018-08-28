using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UmbracoDemo.Models
{
    public class NavigationLink
    {
        public string Text { get; set; }
        public string Url { get; set; }
        public bool NewWindow { get; set; }
        public string Target => NewWindow ? "_blank" : null;
        public string Title { get; set; }

        public NavigationLink()
        { }

        public NavigationLink(string url, string text = null, bool newWindow = false, string title = null)
        {
            Text = text;
            Url = url;
            NewWindow = newWindow;
            Title = title;
        }
    }
}
