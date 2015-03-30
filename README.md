# static-site-boilerplate

Boilerplate to get started creating your static web project using Jade template engine and Stylus CSS preprocessor.

## Usage

Generate example site for production:
```
git clone https://github.com/codeva/static-site-boilerplate.git
cd https://github.com/codeva/static-site-boilerplate.git
npm install
bower install
grunt
```
Run watch with livereload for development:
```
grunt watch --env=development
```
This will watch for file changes and reload the browser preview if anything changed. Please not that you need to access your html pages via a web server.

Grunt installs the generated files to ```example/static```.
