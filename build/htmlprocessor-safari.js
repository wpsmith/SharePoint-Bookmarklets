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

module.exports = function (pathname) {

    var fs = require('fs');
    fs.readFileSync(pathname, 'utf8');

};