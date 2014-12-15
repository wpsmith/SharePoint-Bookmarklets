/**
 * Redirects Users to Quick Deploy List
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Booksmarklets
 * @bookmarkletName Quick Deploy List
 * @file SP.QuickDeployList.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/13/2014.
 * @version 0.0.1
 */

javascript:(function (w) {
    w.location.href = _spPageContextInfo.webAbsoluteUrl + "/Quick%20Deploy%20Items/AllItems.aspx";
})(window)