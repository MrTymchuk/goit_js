module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
       js_files: {
        src: ['js/src/*.js'],
        dest: 'js/dest/script.min.js',
        options: {
          separator: ';'
        }
      },
      css_files: {
        src: ['css/src/*.css'],
        dest: 'css/dest/style.min.css',
        options: {
          separator: ''
        }
      }
    },
    uglify: {
      js_files: {
        src: ['js/dest/script.min.js'],
        dest: 'js/dest/script.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['dest/style.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};