# billingFeedsApp
Microservices were exposed for hybrid integration approach. This is a quick frontend for such services to expose billing feeds service functions to the user to help understand the api.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)

version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.
please use "grunt serve --verbose --debug" to see issues with packages.

NOTE: CORS should be enabled on backend to allow cross domain json requests.
'grunt-connect-proxy' node package is used to proxy anything containing '/apiv1' to backend api as the connect server hosting this application will fail by default. 

## Testing

Running `grunt test` will run the unit tests with karma.

##Deploy
appSettingsService.getHost(). Please blank host to '' for production as you will not require proxy interceptor. CORS will not be required.
