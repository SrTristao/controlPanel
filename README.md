





## Control Panel

This project has been created with NodeJS + TypeScript + MongoDB + AngularJS + Mocha + Chai.

TypeScript? Why not? =).

The front was developmented with es6 , keep cool, the gulp has been configured with babel because some browsers not accept es6

### <i class="icon-hdd"></i> How install and execute

> npm install

##### NodeJS 8.x.x > because has async/await

### Execute server
 First compile typeScript, after start server.
 > - npm run compile
 > - npm run start

### Execute front

The gulp has been configured with browserify.
 > - gulp dev

Use this credentials for a test.

>- Admin
	- email: controlpanel@controlpanel.com.br
	- password: 123456
>- User
	- email: controlpanel-user@controlpanel.com.br
	- password: 123456

### API Docs

This API created with restFull and you need to provide authentication details which will be used through API calls.

In project has blueprint to understand the endpoints.

### Front Core

I created other project to centralize services.

Why? Thinking scalar form this project can use mobile (ionic) or desktop (electron) and use the same core.

> - [Core Project](https://github.com/corohsnk/controlpanel-core)

### Test

To run the library tests, use npm test.

> - npm test
