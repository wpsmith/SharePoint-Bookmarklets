/**
 * Redirects user to Page History
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarks
 * @bookmarkletName Page History
 * @file SP.PageHistory.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/15/2014.
 * @version 0.0.1
 */

(function (w) {
    w.location.href = _spPageContextInfo.webAbsoluteUrl + "/_layouts/15/VersionDiff.aspx?List=" + encodeURI(_spPageContextInfo.pageListId) + "&ID=" + _spPageContextInfo.pageItemId;

})(window)