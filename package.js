Package.describe({
  name: 'alexdmejias:to-dollars',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Easily format number objects to dollars',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/amejias101/meteor-to-dollars',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('to-dollars.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('alexdmejias:to-dollars');
  api.addFiles('to-dollars-tests.js');
});
