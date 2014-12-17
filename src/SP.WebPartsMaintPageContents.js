/**
 * Description
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Booksmarklets
 * @bookmarkletName Web Parts Maintenance Page (Contents)
 * @file EditListByName.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/11/2014.
 * @version 0.0.1
 */

(function (w) {
    w.location.href = ('undefined' !== typeof _spPageContextInfo ? _spPageContextInfo.webAbsoluteUrl : w.location.origin + L_Menu_BaseUrl) + "?contents=1";
})(window)