module.exports = function(grunt) {

   // Configure task(s)
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      htmlmin: {
         dist: {
            options: {
               removeComments: true,
               collapseWhitespace: true
            },
            files: {
               'dist/index.html': 'src/index.html'
            }
         }
      },

      imagemin: {
         images: {
            files: [ {
               expand: true,
               cwd: 'src/public/assets/images/',
               src: [ '**/*.{png,jpg,gif}' ],
               dest: 'dist/public/assets/images/'
            } ]
         }
      }

   })

   // Load the plugin(s)
   grunt.loadNpmTasks('grunt-contrib-htmlmin')
   grunt.loadNpmTasks('grunt-contrib-imagemin')

   // Default task(s)
   grunt.registerTask('default', [ 'htmlmin', 'imagemin' ])

}