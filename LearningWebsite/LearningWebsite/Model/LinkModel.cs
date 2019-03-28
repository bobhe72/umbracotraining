using System;
using System.Collections.Generic;

namespace LearningWebsite.Model
{
    public class LinkModel
    {
        public string Title { get; set; }
        public string ImageLink { get; set; }
        public List<string> Details { get; set; } = new List<string>();
        public Tuple<string, string> ExternalLink { get; set; }
    }
}