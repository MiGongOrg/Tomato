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
    },
    // clean files
    clean: {
      dist: {
        src: ['dist/']
      }
    },
    // Less 编译
    less: {
      production: {
        options: {
          // css 压缩
          compress: true
        },
        files: {
          'dist/css/tomato.min.css': 'src/css/tomato.less'
        }
      }
    },
    //自动添加浏览器私有前缀
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      css: {
        //目标文件
        src: [
          'dist/css/tomato.min.css'
        ]
      }
    }
  });
  

  //通过 load-grunt-tasks 加载任务（设定指定范围，从 package.json devDependencies ）
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  // time grunt 任务运行所耗时间
  require('time-grunt')(grunt);

  // 定义单个执行任务
  grunt.registerTask('x-sync', ['browserSync']);
  grunt.registerTask('x-less', ['clean:dist', 'less:production']);
  grunt.registerTask('x-autoprefixer', ['autoprefixer:css']);

  // 定义默认任务
  grunt.registerTask('default', ['x-less', 'x-autoprefixer']);
}