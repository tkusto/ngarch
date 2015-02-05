module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        clean: {
            js: ['app/js/phonebook.min.js'],
            css: ['app/css/phonebook.css'],
            libs: [
                'app/js/angular.min.js',
                'app/js/angular-ui-router.min.js'
            ],
            html: ['app/index.html'],
            glyphicons: ['app/assets/glyphicons-*']
        },

        copy: {
            html: {
                files: { 'app/index.html': 'src/index.html' }
            },
            libs: {
                files: [{
                    cwd: './node_modules/',
                    src: [
                        'angular/angular.min.js',
                        'angular-ui-router/release/angular-ui-router.min.js'
                    ],
                    dest: 'app/js/',
                    flatten: true,
                    expand: true
                }]
            },
            glyphicons: {
                files: [{
                    cwd: './node_modules/bootstrap/fonts/',
                    src: 'glyphicons-*',
                    dest: 'app/assets/',
                    expand: true,
                    flatten: true
                }]
            }
        },

        less: {
            dev: {
                options: { compress: false },
                files: { 'app/css/phonebook.css': 'src/index.less' }
            },
            prod: {
                options: { compress: true },
                files: { 'app/css/phonebook.css': 'src/index.less' }
            }
        },

        browserify: {
            dev: {
                options: {
                    transform: ['browserify-shim', 'brfs'],
                    browserifyOptions: { debug: true },
                },
                files: { 'app/js/phonebook.min.js': 'src/index.js' }
            },
            prod: {
                options: {
                    transform: ['browserify-shim', 'brfs', 'uglifyify']
                },
                files: { 'app/js/phonebook.min.js': 'src/index.js' }
            }
        },

        connect: {
            dev: {
                options: {
                    base: 'app',
                    hostname: 'localhost',
                    port: '?',
                    livereload: true
                }
            }
        },

        watch: {
            options: { spawn: true },
            html: {
                files: ['src/index.html'],
                tasks: ['clean', 'build:dev']
            },
            js: {
                files: ['src/**/*.js', 'src/**/*.html', '!src/index.html'],
                tasks: ['clean:js', 'browserify:dev']
            },
            less: {
                files: ['src/**/*.less'],
                tasks: ['clean:css', 'less:dev']
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['clean', 'build:dev']
            }
        }

    });

    grunt.registerTask('build:dev', ['clean', 'copy', 'browserify:dev', 'less:dev']);
    grunt.registerTask('build:prod', ['clean', 'copy', 'browserify:prod', 'less:prod']);
    grunt.registerTask('dev', ['build:dev', 'connect:dev', 'watch']);
    grunt.registerTask('default', ['build:prod']);
};
