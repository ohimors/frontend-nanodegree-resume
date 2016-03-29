module.exports = function (grunt){
	require('load-grunt-tasks')(grunt);
	var config = grunt.file.readYAML('GruntConfig.yml');
	grunt.initConfig({
		sass: {
			dist: {
				src: config.scssDir+'style.scss',
				dest: config.cssDir+'style.css'
			}
		},
		concat:{
			dist: {
				src: config.jsSrcDir+'*.*',
				dest: config.jsConcatDir+'app.js'
			}
		},
		jshint: {
			all: [
				'Gruntfile.js',
				config.jsSrcDir+'*.js'
			]
		},
		"jsbeautifier" : {
 		   	files : ["js/*.js"],
			options : {
    		}
		},
		watch: {
			files: config.scssDir+'style.scss',
			tasks: ['sass']
		}
	});

	grunt.registerTask('default',[
		'jshint',
		'jsbeautifier'
	]);
};