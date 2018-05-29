import { UserMaterialModule } from './user-material.module'

describe('UserMaterialModule', () => {
  let userMaterialModule: UserMaterialModule

  beforeEach(() => {
    userMaterialModule = new UserMaterialModule()
  })

  it('should create an instance', () => {
    expect(userMaterialModule).toBeTruthy()
  })
})
