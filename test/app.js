'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-silmarilli:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({'skip-install': true, 'skip-angular': true})
      .withPrompts({project_name: "myproject"})
      .on('end', done);
  });

  // it('creates files', function () {
  //   assert.file([
  //     'myproject', // the Django project
  //   ]);
  // });
});
