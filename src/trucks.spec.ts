import * as truckModel from "./trucks"

describe('truck attach trailer', function() {
  it('should be true', function() {
    expect(truckModel.audiTruck.attachTrailer("FF333AA")).toBe(true)
  })
  it('should be false', function() {
    expect(truckModel.audiTruck.attachTrailer("AA444BB")).toBe(false)
  })
})

describe('truck deattach trailer', function() {
  it('should be true', function() {
    expect(truckModel.audiTruck.deattachTrailer()).toBe(true)
  })
  it('should be false', function() {
    expect(truckModel.audiTruck.deattachTrailer()).toBe(false)
  })
})