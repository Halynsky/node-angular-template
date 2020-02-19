import { controller, httpGet, queryParam, request, requestParam, response } from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request, Response } from 'express';
import FooService from '../services/FooService';
import { ApiOperationGet, ApiPath, SwaggerDefinitionConstant } from 'swagger-express-ts';
import { API_PATH } from '../utils/Properties';

@ApiPath({
  path: '/foo',
  name: 'FooController'
})
@controller(`${API_PATH}/foo`)
export default class FooController {

    @inject(FooService) private fooService: FooService;

  @ApiOperationGet({
    path: '/{id}',
    summary: 'Get Foo',
    parameters: {
      path: {id: {description: 'Id of Foo', required: true}}
    },
    responses: {
      200: {description: 'Success', type: SwaggerDefinitionConstant.Response.Type.OBJECT, model: 'Foo'}
    }
  })
    @httpGet('/:id')
    private async get(@requestParam('id') id: number, @request() req: Request, @response() res: Response) {
        return this.fooService.getFoo(id);
    }

}
