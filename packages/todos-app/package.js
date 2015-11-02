Package.describe({
  name: 'todos-app',
  version: '0.0.1',
  summary: 'Base Layouts and Styles for the Todos app'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  // For now, switch to FR in a sec
  // TODO: remove session
  api.use([
    'ecmascript',
    'templating',
    'less',
    'kadira:flow-router@2.7.0',
    'kadira:blaze-layout@2.2.0',
    'session',
    'launch-screen'
  ]);
  api.addFiles([
    'head.html',
    'loading.html',
    'loading.import.less',
    'app-not-found.html',
    'app-not-found.import.less',
    'app-body.html',
    'app-body.js',
    'router.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('todos-app');
  api.addFiles('todos-app-tests.js');
});
