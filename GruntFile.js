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

/**
 * @todo Chrome - modify bookmarks file (%APPDATA%\..\Local\Google\Chrome\User Data\Default\Bookmarks,%APPDATA%\..\Local\Google\Chrome\User Data\Default\Bookmarks.bak) directly
 */
module.exports = function (grunt) {

    grunt.initConfig({

        // Create Bookmarks html File
        processhtml: {
            dist: {
                options: {
                    environment: 'dist',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'temp/ChromeOperaBookmarks.html': ['templates/ChromeOperaBookmarks.html'],
                    'temp/FirefoxBookmarks.html': ['templates/FirefoxBookmarks.html'],
                    'temp/IEBookmarks.htm': ['templates/IEBookmarks.html'],
                    'temp/SafariBookmarks.html': ['templates/SafariBookmarks.html']
                }
            },
            chrome: {
                options: {
                    environment: 'chrome',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'temp/ChromeOperaBookmarks.html': ['templates/ChromeOperaBookmarks.html']
                }
            },
            firefox: {
                options: {
                    environment: 'firefox',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'temp/FirefoxBookmarks.html': ['templates/FirefoxBookmarks.html']
                }
            },
            ie: {
                options: {
                    environment: 'ie',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'temp/IEBookmarks.htm': ['templates/IEBookmarks.html']
                }
            },
            safari: {
                options: {
                    environment: 'safari',
                    customBlockTypes: ['build/htmlprocessor-bookmarks.js']
                },
                files: {
                    'temp/SafariBookmarks.html': ['templates/SafariBookmarks.html']
                }
            }
        },

        // Clean Files
        clean: {
            temp: ['temp/*.*'],
            files: ['dist/*.*'],
            chrome : ['dist/ChromeBookmarks.html'],
            firefox: ['dist/FirefoxBookmarks.html'],
            ie: ['dist/IEBookmarks.htm'],
            safari: ['dist/SafariBookmarks.html'],
        },

        // Add HeadJS replacing
        includereplace: {
            headLoad: {
                options: {
                    globals: {
                        headjs: '<%= grunt.file.read("libraries/head.load.min.js") %>'
                    },
                    prefix: '<!-- @@',
                    suffix: ' -->',
                    includesDir: 'src/'
                },
                src: 'src/*.min.js',
                dest: 'temp/'
            }
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
            replace: {
                files: ['temp/*.htm*'],
                tasks: [
                    'includereplace',
                ]
            },
            chrome: {
                files: ['templates/ChromeBookmarks.html'],
                tasks: [
                    'clean:temp',
                    'clean:chrome',
                    'processhtml:chrome'
                ]
            },
            firefox: {
                files: ['templates/FirefoxBookmarks.html'],
                tasks: [
                    'clean:temp',
                    'clean:firefox',
                    'processhtml:firefox'
                ]
            },
            ie: {
                files: ['templates/IEBookmarks.html'],
                tasks: [
                    'clean:temp',
                    'clean:ie',
                    'processhtml:ie'
                ]
            },
            safari: {
                files: ['templates/SafariBookmarks.html'],
                tasks: [
                    'clean:temp',
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
    grunt.loadNpmTasks('grunt-include-replace');

    grunt.registerTask('default', [
        'watch'
    ]);
};