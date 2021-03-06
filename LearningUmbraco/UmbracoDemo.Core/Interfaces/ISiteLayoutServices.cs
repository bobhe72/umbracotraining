﻿using System.Collections.Generic;
using Umbraco.Core.Models;
using UmbracoDemo.Core.Models.Navigation;

namespace UmbracoDemo.Core.Interfaces
{
    public interface ISiteLayoutServices
    {
        List<NavigationListItem> GetNavigationListItems(IPublishedContent content);
    }
}
