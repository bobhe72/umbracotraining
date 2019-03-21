using Our.Umbraco.Ditto;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace LearningProject.Website.Core.DittoConverter
{
    public class MultiNodePickerMedia : DittoProcessorAttribute
    {
        public string PropertyAlias { get; set; }

        /// <summary>
        /// Returns the IPublishedContent of a content picker by aliasName, where the content selected is a media type
        /// </summary>
        /// <param name="aliasName"></param>
        public MultiNodePickerMedia(string aliasName)
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


            //Gets the node ids of the selected content nodes
            string nodeIds = propertyValue.Value.ToString();

            if (string.IsNullOrEmpty(nodeIds))
            {
                return null;
            }

            UmbracoHelper umbracoHelper = new UmbracoHelper(UmbracoContext.Current);

            //split the returned CSV of node ids into an array to iterate
            var nodeIdList = nodeIds.Split(',').ToList();

            //news up a list of IPublishedContent
            var result = new List<IPublishedContent>();
            //Gets and adds an IPublishedContent to the list for each node id returned
            foreach (var id in nodeIdList)
            {
                result.Add(umbracoHelper.TypedMedia(id));
            }

			//Sanity check that result is IPublishedContent before returning
			if (result is List<IPublishedContent>)
			{
				return result;
			}

            //Returns the IPublishedContent of the block
            //This code should never get called
            return Value;
        }
    }
}