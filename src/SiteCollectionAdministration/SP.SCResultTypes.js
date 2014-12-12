/**
 * Redirects Users to ResultTypes
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarks
 * @file ResultTypes.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/11/2014.
 * @version 0.0.1
 */

(function (w) {
    w.location.href = ('undefined' !== typeof _spPageContextInfo ? _spPageContextInfo.webAbsoluteUrl : w.location.origin + L_Menu_BaseUrl) + "/_layouts/manageresulttypes.aspx?level=sitecol";
})(window)