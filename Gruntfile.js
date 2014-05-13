/* Grunt configuration is a module */
module.exports = function(grunt) {

  /* Configuration for grunt plugins */
  grunt.initConfig({

    /* Configuration for grunt-bower-concat plugin */
    bower_concat: {
      all: {
        dest: "dependencies.js",
        mainFiles: {
          "impress.js": "js/impress.js"
        }
      }
    },

    /* Configuration for grunt-contrib-concat plugin */
    concat: {
      all: {
        dest: "grunt-intro.js",
        src: ["dependencies.js", "src/main.js"]
      }
    },

    /* Configuration for grunt-contrib-less plugin */
    less: {
      all: {
        files: {
          "all.css": "less/all.less"
        }
      }
    },

    /* Configuration for grunt-contrib-uglify plugin */
    uglify: {
      all: {
        files: {
          "grunt-intro.min.js": ["grunt-intro.js"]
        }
      }
    },

    /* Configuration for grunt-contrib-watch plugin */
    watch: {
      src: {
        files: "src/**/*.js",
        tasks: ["concat", "uglify"]
      },
      less: {
        files: "less/**/*.less",
        tasks: ["less"]
      }
    }

  });

  /* Plugins loading */
  grunt.loadNpmTasks("grunt-bower-concat");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  /* Task alias */
  grunt.registerTask("default", ["bower_concat", "concat", "uglify", "less"]);
};
