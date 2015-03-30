module.exports = {
  html: {
    files: [ "**/*.jade", "**/*.js", "!**/*.min.js", "**/*.styl", "**/*.json", "**/*.section.html" ],
    tasks: [ "default" ],
    options: {
      interrupt: true,
      livereload: true
    }
  }
}