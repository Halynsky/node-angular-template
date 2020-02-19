import { provide } from 'inversify-binding-decorators';

@provide(FooService)
export default class FooService {
  async getFoo(id: number) {
    return {id, name: 'Foo'};
  }
}
