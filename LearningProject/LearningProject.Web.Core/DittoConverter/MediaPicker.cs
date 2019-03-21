using Our.Umbraco.Ditto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace LearningProject.Website.Core.DittoConverter
{
    public class MediaPicker : DittoProcessorAttribute
    {
        public string PropertyAlias { get; set; }

        /// <summary>
        /// Returns the IPublishedContent of a content picker by aliasName
        /// </summary>
        /// <param name="aliasName"></param>
        public MediaPicker(string aliasName)
        {
            PropertyAlias = aliasName;
        }

        public override object ProcessValue()
        {
            //Value is the IPublishedContent of the block.
            var content = Value as IPublishedContent;

            var propertyValue = Context.Content.GetProperty(PropertyAlias);

            if (propertyValue == null || !propertyValue.HasValue)
            {
                return null;
            }

			//Gets the node id of the selected content node
			var selectedContentNodeId = propertyValue.Value.ToString();

			if (string.IsNullOrEmpty(selectedContentNodeId))
            {
                return null;
            }

            var nodeId = Convert.ToInt32(selectedContentNodeId);
            UmbracoHelper umbracoHelper = new UmbracoHelper(UmbracoContext.Current);
            
            //Gets the IPublishedContent via the umbraco helper
            var result = umbracoHelper.TypedMedia(nodeId);

			//Sanity check before returning as IPublishedContent
			if (result is IPublishedContent)
			{
				return ((IPublishedContent)result).As<IPublishedContent>();
			}

            //Returns the IPubilshedContent of the block
            //This code should not get hit
            return Value;
        }
    }
}