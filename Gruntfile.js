module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({

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
				files: { 'app/css/phonebook.css': ['src/main.less'] }
			},
			prod: {
				options: { compress: true }
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
			server: {
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
				tasks: ['browserify:dev']
			},
			less: {
				files: ['src/**/*.less'],
				tasks: ['less:dev']
			}
		}

	});

	grunt.registerTask('dev', ['copy', 'browserify:dev', 'less:dev', 'connect', 'watch']);
};
