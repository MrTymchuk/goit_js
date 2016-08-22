module.exports = function(grunt) {

	// 1. Всё конфигурирование тут
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

			// 2. Конфигурация для объединения файлов тут.
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/'
				}]
			}
		},
		concat_css: {
			options: {
			},
			all: {
				src: [
					'src/css/*.css'
				],
				dest: 'css/concatenated.css'
			}
		},
		cssmin: {
			target: {
				files: [{ //найти и минифицировать все файлы в папкке
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		}
	});

	// 3.1 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин оптимизации изображений:
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// 3.2 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин конкатенации css:
	grunt.loadNpmTasks('grunt-concat-css');

	// 3.2.1 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин минификации css:
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	// 4. Мы сообщаем Grunt, что нужно делать, когда мы введём "grunt" в терминале.
	grunt.registerTask('default', ['imagemin','concat_css','cssmin']);

};
