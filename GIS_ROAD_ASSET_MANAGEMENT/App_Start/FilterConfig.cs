﻿using System.Web;
using System.Web.Mvc;

namespace GIS_ROAD_ASSET_MANAGEMENT
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
