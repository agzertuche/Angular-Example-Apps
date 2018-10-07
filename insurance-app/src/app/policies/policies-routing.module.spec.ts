import { PoliciesRoutingModule } from './policies-routing.module';

describe('PoliciesRoutingModule', () => {
  let policiesRoutingModule: PoliciesRoutingModule;

  beforeEach(() => {
    policiesRoutingModule = new PoliciesRoutingModule();
  });

  it('should create an instance', () => {
    expect(policiesRoutingModule).toBeTruthy();
  });
});
