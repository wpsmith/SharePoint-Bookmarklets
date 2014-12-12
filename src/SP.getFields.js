/**
 * Provides the List's Field Information, including Internal Name, via the console.
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Booksmark
 * @file SP.AddSPServices.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 11/19/2014.
 * @version 0.0.1
 */

(function (w) {

    if ("undefined" !== typeof jQuery) {
        var jq = document.createElement("script");
        jq.type = "text/javascript";
        jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
        document.getElementsByTagName("head")[0].appendChild(jq)
    }

    var requestHeaders = {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
    };
    var iList = w.prompt("Please enter the list name", "Tasks");
    var a = jQuery.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/lists/getbytitle('" + iList + "')?$select=Fields&$expand=Fields",
        type: "POST",
        contentType: "application/json;odata=verbose",
        headers: requestHeaders,
        success: function (data) {
            console.log(data);

            var fields = data.d.Fields.results, f = {};
            for (i = 0; i < fields.length; i++) {
                console.log(
                        "Title: " + fields[i].Title + " | " +
                        "Internal Name: " + fields[i].InternalName + " | " +
                        "Type: " + fields[i].TypeAsString + " | " +
                        "GUID: " + fields[i].Id + " "
                );

                var _f = {
                    Title: fields[i].Title,
                    InternalName: fields[i].InternalName,
                    Type: fields[i].Type,
                    GUID: fields[i].GUID,
                    meta: fields[i]
                };

                console.log(_f);
                f[fields[i].Title] = _f;
            }
            console.log(f);
            alert('Success! See the console.');
        },
        error: function (jqxr, errorCode, errorThrown) {
            console.log(jqxr.responseText);
            alert('Error! See the console.');
        }
    });

})(window);