var gulp = require('gulp');
var del = require('del');
var log = require('fancy-log');

var alloySource = "target/bower_components/alloy-ui/build/**";
var diagramFolderDest = "src/main/resources/org/vaadin/diagrambuilder/public/diagram-builder/js/diagram/alloyui/build";
var nodeModulesFolder = "node_modules";

gulp.task('clean', function () {
    log.info("CLEANING  node modules");
    return del([nodeModulesFolder]);
});

gulp.task('sync', function () {
   log.info("SYNC Diagram Destination folder");
   return del.sync([diagramFolderDest]);
});

gulp.task('build', ['sync'], function() {
    log.info("COPYING Alloy Source into Diagram Destination");
    return gulp.src(alloySource)
        .pipe(gulp.dest(diagramFolderDest));
});
