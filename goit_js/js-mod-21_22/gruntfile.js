module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'js/src',          // Родительский путь для файлов которые мы ищем, что бы перепомпелировать
                    src: ['*.js'],
                    dest: 'js/dist',        // Куда сохраняем перекомпелировные файлы
                    ext: '.js',
                    extDot: 'first'
                }]
            }
        },
        watch: {
            babel: {
                files: 'js/src/*.js',
                tasks: ['babel']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['babel']);
}