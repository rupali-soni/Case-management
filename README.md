# README #

### Case Management System ###

* Quick summary : App will provide basic feature for funeral case management system
* Version 1.0.0

### How do I get set up? ###

* Clone the repository 
* Move into created repository `Case-management` and run `npm install`
* Move into 'Case-management/www` and run 'npm install'
* Open terminal and move to base directory i.e `Case-management` and run 'npm start'
* Open another terminal tab and move into `www` directory anf run `npm start`
* App will be accessible on this URL `http://localhost:8080/#/`

* ### Implemented Logic ###

* Base repository is containing server side code, developed using `Express.Js`
* `www` directory is containing frontend code based on 'React.Js`
* server side code will be running on `8081 port` (If you want to change this port then make changes in `server.js` and `www/webpack.config.js` files)
* Frontend code will be running on `8080 port`


* ### About Code Structure ###
* `Case-management` is containing `server.js` file which is responsible for all server side operations like `save a case` and `get list of cases`
* `Case-management/data` directory containing a `.json` file which will store all the cases in it. This file should have `[]` sign in it in case we clear the data.
* 'Case-management/poc' directory contains screenshots of the developed app.
* 'Case-management/www' directory contains frontend application.
* 'Case-management/www/src/app.js' is the entry point file for `React.Js`
* 'Case-management/www/src/case` directory have all the case related components
* 'Case-management/www/src/common` directory has all the common components like header etc.
* 'Case-management/www/src/theme` directory has custom style sheet


* ### Who do I talk to? ###

* * rupali.soni19@gmail.com
