/**
 * Redirects User to the List Settings by List Name
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarks
 * @bookmarkletName Edit List By Name
 * @file SP.EditListByName.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/15/2014.
 * @version 0.0.1
 */

___headjs___

// @todo Add setTimeout
(function (w) {

    var requestHeaders = {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    };
    var iList = w.prompt("Please enter the list name", "Tasks");
    var a = jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getbytitle('" + iList + "')?$select=Id,Title",
        type: "POST",
        contentType: "application/json;odata=verbose",
        headers: requestHeaders,
        success: function (data) {
            console.log(data);

            w.location.href = _spPageContextInfo.webAbsoluteUrl + "/_layouts/listedit.aspx?List=" + encodeURI( '{' + data.d.Id + '}' );
        },
        error: function (jqxr, errorCode, errorThrown) {
            console.log(jqxr.responseText);
            alert('Error! See the console.');
        }
    });

})(window);