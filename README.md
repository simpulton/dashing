dashing
=====

This is an AngularJS dashboard built using Angular component syntax and material design lite. It demonstrates the following latest Angular 1.5 features:

* .component: https://toddmotto.com/exploring-the-angular-1-5-component-method/

* Lifecycle Hooks: http://blog.thoughtram.io/angularjs/2016/03/29/exploring-angular-1.5-lifecycle-hooks.html

* Multiple Transclusion: http://www.codelord.net/2016/03/04/using-angular-1-dot-5-s-multiple-transclusion-slots/

* One-way bindings: https://toddmotto.com/one-way-data-binding-in-angular-1-5/

* Outputs (expression isolated scope): https://docs.angularjs.org/guide/component#component-based-application-architecture

* One-time binding: https://toddmotto.com/angular-one-time-binding-syntax/

## Prerequisites
You will need [Node.js and NPM](https://nodejs.org) as well as [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Getting started
We are using [Gulp.js](http://gulpjs.com/) as the build system orchestrator. To install it, run `npm i -g gulp`.

Then run the following:
```
# pull down the project and enter it
git clone https://github.com/simpulton/dashing.git
cd dashing

# install NPM dependencies
npm i

# start the app
gulp
```

## Testing
Testing is accomplished with Gulp running Karma. The testing environment is specified in `karma.conf.js`.

To run the unit tests, simply run `gulp test`. This will start karma using the config file and run all the unit tests in `src/app`. To test a new feature, just add a `.spec.js` file in the same directory.
