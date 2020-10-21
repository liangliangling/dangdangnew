//下载gulp并引入
const gulp = require('gulp');

//css压缩空格
//css加前缀
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const cssHandler = ()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}


//压缩js
//babel依赖另外两个包:@babel/core和@babel/preset-env
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const jsHanlder = ()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}


//压缩html
const htmlmin = require('gulp-htmlmin');
const htmlHanlder = ()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes:true, //移除属性的引号
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true,//移除注释
        minifyCSS:true,//把页面里面的style标签里面的css样式也去空格
        minifyJS:true,//把页面里的script标签里面的js代码给去空格
    }))
    .pipe(gulp.dest('./dist/pages'))
}


//删除dist目录
const del = require('del');
const delHandler = ()=>{
    return del(['./dist'])
}



//开启以dist为网站根目录的热更新的web服务器
const webserver = require('gulp-webserver');
const serverHanler = ()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:8080,
        open:'./pages/index.html',
        livereload:true,
        proxies:[{
            source:'/weather',
            target:'https://way.jd.com/jisuapi/weather'
        }],
    }))
}


//移动images文件夹
const imgHandler = ()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}

//移动lib文件夹
const libHandler = ()=>{
    return gulp.src('./src/lib/*.js')
    .pipe(gulp.dest('./dist/lib'))
}

//监控src下所有文件夹
const watchHandler = ()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHanlder);
    gulp.watch('./src/pages/*.html',htmlHanlder);
    gulp.watch('./src/images/**',imgHandler);
    gulp.watch('./src/lib/*.js',libHandler)

}


//多任务，导入默认任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,jsHanlder,htmlHanlder,imgHandler,libHandler
    ),
    serverHanler,
    watchHandler
)