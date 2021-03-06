/**
 * Determines whether the current page is SharePoint
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Booksmarklets
 * @bookmarkletName Is this SharePoint?
 * @file SP.AddSPServices.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 11/19/2014.
 * @version 0.0.1
 */

(function(win){
    "use strict";

    function notify( isSP ) {
        if ( isSP ) {
            alert('Is SharePoint? Yes!');
            console.log( 'Is SharePoint - YES' );
        } else {
            alert('Is SharePoint? NO!');
            console.log( 'Is NOT SharePoint' );
        }
    }

    if ( 'undefined' !== typeof SP && SP.hasOwnProperty('__namespace') && SP.__namespace ) {
        return notify( true );
    }

    if ( 'undefined' !== typeof jQuery ) {
        var jq = document.createElement('script');
        jq.type = 'text/javascript';
        jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
        document.getElementsByTagName('head')[0].appendChild(jq);
    }

    if (!window.jQuery) {
        if (!String.prototype.contains) {
            String.prototype.contains = function(searchString, position) {
                return this.indexOf(searchString, position) != -1;
            }
        }
        var generator = jQuery('meta[name="GENERATOR"]').attr('content');
        if ( generator.toLowerCase().contains('sharepoint') ) {
            return notify( true );
        }
    }
    return notify( false );
})(window);