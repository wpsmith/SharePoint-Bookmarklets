/**
 * Redirects user to Manage Site Administrators
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Booksmarklets
 * @bookmarkletName
 * @file SP.AddSPServices.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 11/19/2014.
 * @version 0.0.1
 */

(function (w) {
    w.location.href = ('undefined' !== typeof _spPageContextInfo ? _spPageContextInfo.webAbsoluteUrl : w.location.origin + L_Menu_BaseUrl) + "/_layouts/mngsiteadmin.aspx";
})(window)