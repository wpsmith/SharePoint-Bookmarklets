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

if (!String.prototype.contains) {
    String.prototype.contains = function (s, i) {
        return this.indexOf(s, i) != -1;
    }
}

module.exports = function (processor) {
    var options = arguments[0].options,
        templates = require('./htmlprocessor-templates.js');

    // This will allow to use this <!-- build:bookmarklets[:target] chrome/firefox --> syntax
    processor.registerBlockType('bookmarklets', function (content, block, blockLine, blockContent) {
        var output = '',
            path = require('path'),
            fs = require('fs'),
//            _ = require('underscore-contrib'),
//            S = require('string'),
            ROOT_PATH = path.join(__dirname, '../src');

        var entries = fs.readdirSync(ROOT_PATH),
            fnames = entries.filter(function (element) {
                return ( element.contains('.js') && element.contains('.min') );
            }),
            dirs = entries.filter(function (element) {
                return !element.contains('.js');
            });

        var processDir = function (entries, dirname) {

            var o = '', stat, date, bm = '', pathname = '', title = '', js = '';

            // Folder Open
            if ('undefined' !== typeof dirname) {
                stat = fs.statSync(path.join(ROOT_PATH, dirname));
                date = new Date(stat.mtime);
                o += templates.folderOpen.replace('%%FOLDER_TITLE%%', dirname);
//                o += templates.folderOpen.replace('%%FOLDER_TITLE%%', dirname).replace('%%DATE%%', date.valueOf());
            }

            // Bookmarklets
            entries.filter(function (element) {
                return element.contains('.min.js');
            }).forEach(function (entry) {
                if ('undefined' !== typeof dirname) {
                    pathname = path.join(ROOT_PATH, dirname, entry);
                } else {
                    pathname = path.join(ROOT_PATH, entry);
                }

                // Safari escapes for us, so let's don't do it
//                js = _.escape(fs.readFileSync(pathname, 'utf8'));
//                js = encodeURI(fs.readFileSync(pathname, 'utf8'));
                js = 'javascript:' + encodeURIComponent(fs.readFileSync(pathname, 'utf8'));
//                if ( 'safari' === options.environment ) {
//                    js = fs.readFileSync(pathname, 'utf8');
//                } else {
//
//                }

                bm = templates.bookmark.replace('%%JS%%', js);

                // Add title
                title = entry.replace('SP.', '').replace('.min.js', '');
                bm = bm.replace('%%TITLE%%', title);

                // Add date
//                stat = fs.statSync(pathname);
//                date = new Date(stat.mtime);
//                bm = bm.replace('%%DATE%%',date.valueOf());

                o += bm;

            });

            // Folder Close
            if ('undefined' !== typeof dirname) {
                o += templates.folderClose;
            }

            return o;

        };

        // Cycle through directories
        dirs.forEach(function (dirname) {
            output += processDir(
                fs.readdirSync(path.join(ROOT_PATH, dirname)),
                dirname
            );
        });


        // Process Parent Dir
        output += processDir(fnames);

        return content.replace(blockLine, output);
    });

};