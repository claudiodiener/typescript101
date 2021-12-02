import { audiTruck } from "./trucks"

describe('truck attach trailer', function() {
  it('should be true', function() {
    expect(audiTruck.attachTrailer("FF333AA")).toBe(true)
  })
  it('should be false', function() {
    expect(audiTruck.attachTrailer("AA444BB")).toBe(false)
  })
})

describe('truck deattach trailer', function() {
  it('should be true', function() {
    expect(audiTruck.deattachTrailer()).toBe(true)
  })
  it('should be false', function() {
    expect(audiTruck.deattachTrailer()).toBe(false)
  })
})