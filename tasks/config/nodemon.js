
module.exports = function( grunt ) {
  grunt.config(
	  "nodemon", {
		  dev: {
		    script: "index.js",
		    options: {
		      env: {
		        NODE_ENV: "development"
		      },
		      ignore: "<%= pkg.grunt.tasks.nodemon.ignore %>",
		      // omit this property if you aren't serving HTML files and 
		      // don't want to open a browser tab on start
		      callback: function (nodemon) {
		        nodemon.on('log', function (event) {
		          console.log(event.colour);
		        });
	
		        // refreshes browser when server reboots
		        nodemon.on('restart', function () {
		          // Delay before server listens on port
		          setTimeout(function() {
		            require('fs').writeFileSync('.rebooted', 'rebooted');
		          }, 1000);
		        });
		      }
		    }
		  }
		}
  );
}