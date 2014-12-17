/**
 * Redirects Users to Enable Search Config Settings
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarklets
 * @bookmarkletName Enable Search Config Settings
 * @file SP.EnableSearchConfigSettings.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/15/2014.
 * @version 0.0.1
 */

javascript:(function (w) {
    w.location.href = _spPageContextInfo.webAbsoluteUrl + "/_layouts/Enablesearchconfigsettings.aspx";
})(window)