using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace UmbracoDemo.Core.Helpers
{
    public static class ContentExtension
    {
        
        public static IPublishedContent GetTranslatedNode(this IPublishedContent node, string language)
        {
            if (string.IsNullOrWhiteSpace(language)) { return null; }

            IPublishedContent languageNode = null;
            var translationFolder = node.Children().FirstOrDefault(c => c.DocumentTypeAlias == node.DocumentTypeAlias + "TranslationFolder");
            if (translationFolder != null)
            {
                foreach (var translation in translationFolder.Children.Where(c => c.DocumentTypeAlias == node.DocumentTypeAlias + "Translation"))
                {
                    var lang = translation.GetPropertyValue<string>("language");
                    if (!string.IsNullOrWhiteSpace(lang) && lang.ToLowerInvariant() == language.ToLowerInvariant())
                    {
                        languageNode = translation;
                    }
                }
            }

            return languageNode;
        }
    }
}
