const User = require("../User");

describe("User", () => {
  it("constructs a new user", () => {
    const testUser = new User("Harrison Bailey", "hbailey@gmail.com");
    expect(testUser.name).toEqual("Harrison Bailey");
    expect(testUser.email).toEqual("hbailey@gmail.com");
  });
  it("constructs a new user", () => {
    const testUser = new User("Mick Michaels", "mmichaels@gmail.com");
    expect(testUser.name).toEqual("Mick Michaels");
    expect(testUser.email).toEqual("mmichaels@gmail.com");
  });
  it("constructs a new user with applications", () => {
    const testUser = new User("Mick Michaels", "mmichaels@gmail.com");
    expect(testUser.applications).toEqual([]);
  });
});
