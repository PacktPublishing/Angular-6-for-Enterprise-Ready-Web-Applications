import { ManagerMaterialModule } from './manager-material.module'

describe('ManagerMaterialModule', () => {
  let managerMaterialModule: ManagerMaterialModule

  beforeEach(() => {
    managerMaterialModule = new ManagerMaterialModule()
  })

  it('should create an instance', () => {
    expect(managerMaterialModule).toBeTruthy()
  })
})
