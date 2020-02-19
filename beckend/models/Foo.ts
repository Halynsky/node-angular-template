import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel({
  description: 'Foo model',
  name: 'Foo'
})
export default class Foo {
  @ApiModelProperty({description: 'Id', required: true})
  id?: number = null;
  @ApiModelProperty({description: 'Name', required: true})
  name?: string = null;
}
