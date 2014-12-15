/**
 * Redirects User to the List Settings by List Name
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarks
 * @bookmarkletName SP.EditListByName
 * @file SP.EditListByName.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/15/2014.
 * @version 0.0.1
 */

// @todo Add setTimeout
(function (w) {
    <!-- @@head.load.min.js -->

    //https://sharedservicestest.rndc-usa.com/_layouts/15/listedit.aspx?List=%7B5ea1442d-e1c7-4273-bd9c-93b2a0b15c10%7D
    if ("undefined" === typeof jQuery) {
        var jq = document.createElement("script");
        jq.type = "text/javascript";
        jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
        document.getElementsByTagName("head")[0].appendChild(jq)
    }

    setTimeout(
        function(){ alert("Hello"); },
        3000
    );

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

            w.location.href = _spPageContextInfo.webAbsoluteUrl + "/_layouts/listedit.aspx?List=" + encodeURI( data.d.Id );
        },
        error: function (jqxr, errorCode, errorThrown) {
            console.log(jqxr.responseText);
            alert('Error! See the console.');
        }
    });

})(window)