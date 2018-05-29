import { PosModule } from './pos.module'

describe('PosModule', () => {
  let posModule: PosModule

  beforeEach(() => {
    posModule = new PosModule()
  })

  it('should create an instance', () => {
    expect(posModule).toBeTruthy()
  })
})
