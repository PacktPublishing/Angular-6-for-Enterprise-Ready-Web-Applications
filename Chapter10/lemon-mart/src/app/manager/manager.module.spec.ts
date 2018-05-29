import { ManagerModule } from './manager.module'

describe('ManagerModule', () => {
  let managerModule: ManagerModule

  beforeEach(() => {
    managerModule = new ManagerModule()
  })

  it('should create an instance', () => {
    expect(managerModule).toBeTruthy()
  })
})
