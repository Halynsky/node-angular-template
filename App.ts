import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as morgan from 'morgan';
import * as swagger from 'swagger-express-ts';
import { join } from 'path';
import { existsSync } from 'fs';
import { Container } from 'inversify';
import { ErrorHandler } from './beckend/utils/ErrorHandler';
import { buildProviderModule } from 'inversify-binding-decorators';
import getDecorators from 'inversify-inject-decorators';
import { InversifyExpressServer } from 'inversify-express-utils';

// create Ioc Container
export const container = new Container({ defaultScope: 'Singleton', autoBindInjectable: true });

export const { lazyInject } = getDecorators(container, false);

import './beckend/models';
import './beckend/controllers';
import { API_PATH, SWAGGER_ASSETS_PATH, SWAGGER_PATH, SWAGGER_ROOT_FOLDER, SWAGGER_UI_DIST_FOLDER } from './beckend/utils/Properties';
import { logger } from './beckend/utils/Util';
import Configuration from './beckend/utils/Configuration';

container.load(buildProviderModule());

// bind dependencies
container.bind<express.RequestHandler>('Morgan').toConstantValue(morgan('combined'));
const errorHandler = container.get<ErrorHandler>(ErrorHandler);
const configuration = container.get<Configuration>(Configuration);

// The Express app is exported so that it can be used by serverless Functions.
export function app() {

  const inversifyExpressServer = new InversifyExpressServer(container);

  inversifyExpressServer.setConfig(async (app: express.Application) => {

    app.use(compression());

    // Serve up content from dist directory
    app.use(express.static(__dirname + '/frontend', { maxAge: '7d' }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    if (process.env.NODE_ENV === 'local') app.use(morgan('combined'));

    app.use( SWAGGER_PATH , express.static( SWAGGER_ROOT_FOLDER ) );
    app.use( SWAGGER_ASSETS_PATH , express.static( SWAGGER_UI_DIST_FOLDER ) );
    app.use( swagger.express(
      {
        definition : {
          info : {
            title : 'Api doc' ,
            version : '0.1'
          },
          responses: {
            200: {description: 'OK'},
            204: {description: 'No Content'},
            400: {description: 'Bad request'},
            401: {description: 'Unauthorized'},
            500: {description: 'Internal Server Error'}
          },
          schemes: [ process.env.NODE_ENV !== 'local' ? 'https' : 'http'],
          basePath: API_PATH
        },
      }
    ));

  });

  inversifyExpressServer.setErrorConfig((app: any) => {
    app.use(errorHandler.handleInternalError);
  });

  return inversifyExpressServer.build();
}

async function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    logger.info(`Server is started in ${process.env.NODE_ENV} mode`);
    logger.info(`Server listening on port ${process.env.PORT} !`);
    logger.info(`Swagger documentation is served at => ${SWAGGER_PATH}`);
  });
}

(async () => {
  await run();
})();

