/*!
 * Description
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarks
 * @file htmlprocessor-bookmarks.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/11/2014.
 * @version 0.0.1
 */

module.exports = {
    ie: {
        bookmark: "\t\t\t" + '<DT><A HREF="%%JS%%" ADD_DATE="%%DATE%%" LAST_VISIT="" LAST_MODIFIED="%%DATE%%" ICON_URI="http://travislsmith.com/spbookmarklets.png">%%TITLE%%</A>' + "\n",
        folderOpen: "\t\t\t" + '<DT><H3 FOLDED ADD_DATE="%%DATE%%">%%FOLDER_TITLE%%</H3>' + "\n\t\t\t" + '<DL><p>' + "\n"
    },
    bookmark: "\t\t\t" + '<DT><A HREF="%%JS%%">%%TITLE%%</A>' + "\n",
    folderClose: "\t\t\t" + '</DL><p>' + "\n",
    folderOpen: "\t\t\t" + '<DT><H3>%%FOLDER_TITLE%%</H3>' + "\n" + '<DL><p>' + "\n"
};