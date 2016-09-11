Package.describe({
    name: 'jayuda:flx-jsencrypt',
    version: '0.0.1',
    summary: "JSEncrypt in meteor.",
    git: 'https://github.com/Jayuda/flx-jsencrypt',
    documentation: 'README.md'
});

Package.on_use(function (api, where) {
  api.add_files('jsencrypt.js', 'client');
  api.export('JSEncrypt');
});
