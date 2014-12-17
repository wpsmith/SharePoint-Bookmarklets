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
            ROOT_PATH = path.join(__dirname, '../src'),
            isIE = ( 'ie' === options.environment );

        var entries = fs.readdirSync(ROOT_PATH),
            fnames = entries.filter(function (element) {
                return ( element.contains('.js') && element.contains('.min') );
            }),
            dirs = entries.filter(function (element) {
                return !element.contains('.js');
            });

        var getTitle = function( pathname, entry, stat ) {
            var title = '', metaFile = '', metaContents = '', match = '';
            metaFile = pathname.replace('.min.js', '.js');
            stat = fs.statSync(metaFile);
            metaContents = fs.readFileSync(metaFile, { encoding: 'utf8'}, function (err, data) {
                if (err) throw err;
                //console.log(data);
            });
            match = /@bookmarkletName\s(.*)/.exec(metaContents);
            if ( match[1] ) {
                title = match[1];
            } else {
                title = entry.replace('SP.', '').replace('.min.js', '');
            }

            return title;
        };

        var processDir = function (entries, dirname) {

            var o = '', stat, date, bm = '', pathname = '', title = '', metaFile = '', js = '';

            // Folder Open
            if ('undefined' !== typeof dirname) {
                stat = fs.statSync(path.join(ROOT_PATH, dirname));
                date = new Date(stat.mtime);
                if (!isIE) {
                    o += templates.folderOpen.replace('%%FOLDER_TITLE%%', dirname.replace(/([A-Z])/g, " $1").trim());
                } else {
                    o += templates.ie.folderOpen.replace('%%FOLDER_TITLE%%', dirname).replace('%%DATE%%', date.valueOf());
                }
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

                // Add Javascript Address
                js = 'javascript:' + encodeURIComponent(fs.readFileSync(pathname, 'utf8'));
                if ( isIE ) {
                    bm = templates.ie.bookmark;
                } else {
                    bm = templates.bookmark;
                }

                if ('undefined' !== typeof dirname) {
                    bm = "\t" + bm;
                }

                bm = bm.replace('%%JS%%', js);

                // Add title

                bm = bm.replace('%%TITLE%%', getTitle(pathname,entry,stat));

                // Add date
                if ( isIE ) {
                    stat = fs.statSync(pathname);
                    date = new Date(stat.mtime);
                    bm = bm.replace(/%%DATE%%/g, date.valueOf());
                }

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