module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserSync: {
      bsFiles: {
        src: ['./*.html','src/css/*.less']
      },
      options: {
        server: {
          baseDir: './'
        }
      }
    }
  });
  // 加载插件 Browser-sync
  grunt.loadNpmTasks('grunt-browser-sync');

  // 定义单个执行任务
  grunt.registerTask('x-sync', ['browserSync']);

  // 定义默认任务
  grunt.registerTask('default', ['x-sync']);
}