/*!
 * Description
 *
 * Copyright (c) 2014, Travis Smith 2014
 * @project SharePoint Bookmarks
 * @file GruntFile.js
 * @author Travis Smith <me@travislsmith.com>
 * @link http://travislsmith.com/sharepoint-bookmarks/
 * @date 12/11/2014.
 * @version 0.0.1
 */

module.exports = function (grunt) {

    grunt.initConfig({
        processhtml: {
            dist: {
                options: {
                    environment: 'dist',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'dist/ChromeBookmarks.html': ['templates/ChromeOperaBookmarks.html'],
                    'dist/FirefoxBookmarks.html': ['templates/FirefoxBookmarks.html'],
                    'dist/IEBookmarks.html': ['templates/IEBookmarks.html'],
                    'dist/SafariBookmarks.html': ['templates/SafariBookmarks.html']
                }
            },
            chrome: {
                options: {
                    environment: 'chrome',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'dist/ChromeOperaBookmarks.html': ['templates/ChromeOperaBookmarks.html']
                }
            },
            firefox: {
                options: {
                    environment: 'firefox',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'dist/FirefoxBookmarks.html': ['templates/FirefoxBookmarks.html']
                }
            },
            ie: {
                options: {
                    environment: 'ie',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'dist/IEBookmarks.html': ['templates/IEBookmarks.html']
                }
            },
            safari: {
                options: {
                    environment: 'safari',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'dist/SafariBookmarks.html': ['templates/SafariBookmarks.html']
                }
            }
        },

        // Clean Files
        clean: {
            files: ['dist/*.*'],
            chrome : ['dist/ChromeBookmarks.html'],
            firefox: ['dist/FirefoxBookmarks.html'],
            ie: ['dist/IEBookmarks.html'],
            safari: ['dist/SafariBookmarks.html'],
        },

        // Default task
        watch: {
            // Reload grunt if Gruntfile.js or package.json change
            grunt: {
                files: [
                    'Gruntfile.js',
                    'package.json'
                ]
            },

            chrome: {
                files: ['templates/ChromeBookmarks.html'],
                tasks: [
                    'clean:chrome',
                    'processhtml:chrome'
                ]
            },
            firefox: {
                files: ['templates/FirefoxBookmarks.html'],
                tasks: [
                    'clean:firefox',
                    'processhtml:firefox'
                ]
            },
            ie: {
                files: ['templates/IEBookmarks.html'],
                tasks: [
                    'clean:ie',
                    'processhtml:ie'
                ]
            },
            safari: {
                files: ['templates/SafariBookmarks.html'],
                tasks: [
                    'clean:safari',
                    'processhtml:safari'
                ]
            },
            create: {
                files: [
                    'src/*.min.js',
                    'src/*/*.min.js'
                ],
                tasks: [
                    'clean',
                    ''
                ]
            }
        }
    });

    // load plugins
//    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'watch'
    ]);
};