import { AppMaterialModule } from './app-material.module'

describe('MaterialModule', () => {
  let materialModule: AppMaterialModule

  beforeEach(() => {
    materialModule = new AppMaterialModule()
  })

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy()
  })
})
