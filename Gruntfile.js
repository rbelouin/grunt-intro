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
    }

  });

  /* Plugins loading */
  grunt.loadNpmTasks("grunt-bower-concat");

  /* Task alias */
  grunt.registerTask("default", ["bower_concat"]);
};
