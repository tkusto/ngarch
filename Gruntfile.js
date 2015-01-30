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
                'app/js/angular-route.min.js'
            ],
            html: ['app/index.html'],
            glyphicons: ['app/assets/glyphicons-*']
        },

        copy: {
            html: {
                files: { 'app/index.html': 'src/index.html' }
            },
            libs: {
                files: {
                    'app/js/angular.min.js': './node_modules/angular/angular.min.js',
                    'app/js/angular-route.min.js': './node_modules/angular-route/angular-route.min.js'
                }
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
                files: { 'app/css/phonebook.css': ['src/main.less'] },
                options: { compress: false }
            },
            prod: {
                options: { compress: true },
                files: { 'app/css/phonebook.css': ['src/main.less'] }
            }
        },

        browserify: {
            options: {
                transform: ['browserify-shim', 'brfs', 'uglifyify']
            },
            dev: {
                options: {
                    browserifyOptions: { debug: true },
                },
                files: { 'app/js/phonebook.min.js': 'src/main.js' }
            },
            prod: {
                files: { 'app/js/phonebook.min.js': 'src/main.js' }
            }
        },

        connect: {
            dev: {
                options: {
                    base: 'app',
                    hostname: 'localhost',
                    port: 8082,
                    livereload: true
                }
            }
        },

        watch: {
            options: { spawn: true },
            html: {
                files: ['src/index.html'],
                tasks: ['copy:html']
            },
            js: {
                files: ['src/**/*.js', 'src/**/*.html', '!src/index.html'],
                tasks: ['clean:js', 'browserify:dev']
            },
            less: {
                files: ['src/**/*.less'],
                tasks: ['clean:css', 'less:dev']
            }
        }

    });

    grunt.registerTask('dev', ['clean', 'copy', 'browserify:dev', 'less:dev', 'connect', 'watch']);
    grunt.registerTask('default', ['clean', 'copy', 'browserify:prod', 'less:prod']);
};
