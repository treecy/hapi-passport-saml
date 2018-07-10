exports.register = function (server, options) {

    var saml = require('./lib/saml')
        .create(options).saml;

    server.expose('instance', saml);
};

exports.register.attributes = {
    pkg: require('./package.json')
};

