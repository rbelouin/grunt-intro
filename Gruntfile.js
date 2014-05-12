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
    }

  });

  /* Plugins loading */
  grunt.loadNpmTasks("grunt-bower-concat");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-less");

  /* Task alias */
  grunt.registerTask("default", ["bower_concat", "concat", "less"]);
};
