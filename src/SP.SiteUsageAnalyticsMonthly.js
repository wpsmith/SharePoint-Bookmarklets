/**
 * Redirects Users to Site Usage Analytics Monthly
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarks
 * @file SP.SiteUsageAnalytics.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/13/2014.
 * @version 0.0.1
 */

javascript:(function (w) {
    w.location.href = _spPageContextInfo.webAbsoluteUrl + "/_layouts/usagedetails.aspx";
})(window)