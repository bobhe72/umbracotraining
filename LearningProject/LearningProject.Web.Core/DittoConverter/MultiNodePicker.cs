using Our.Umbraco.Ditto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace LearningProject.Website.Core.DittoConverter
{
    public class MultiNodePicker : DittoProcessorAttribute
    {
        public string PropertyAlias { get; set; }
        private bool _allowNulls = true;
        /// <summary>
        /// Returns a list of IPublishedContent from a multi node tree picker by aliasName
        /// </summary>
        /// <param name="aliasName"></param>
        public MultiNodePicker(string aliasName)
        {
            PropertyAlias = aliasName;
        }

        public MultiNodePicker(string aliasName, bool allowNulls)
        {
            PropertyAlias = aliasName;
            _allowNulls = allowNulls;
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

            //news up a list of IPublishedContent
            var result = new List<IPublishedContent>();

            if (string.IsNullOrEmpty(nodeIds))
            {
                if (_allowNulls)
                {
                    return null;
                }
                else
                {
                    return result;
                }
            }

            UmbracoHelper umbracoHelper = new UmbracoHelper(UmbracoContext.Current);

            //split the returned CSV of node ids into an array to iterate
            var nodeIdList = nodeIds.Split(',').ToList();

           
            //Gets and adds an IPublishedContent to the list for each node id returned
            foreach(var id in nodeIdList)
            {
                result.Add(umbracoHelper.TypedContent(id));
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