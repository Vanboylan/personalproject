const User = require("../User");

describe("User", () => {
  it("constructs a new user", () => {
    const testUser = new User("Harrison", "Bailey", "hbailey@gmail.com");
    expect(testUser.getName()).toEqual("Harrison Bailey");
    expect(testUser.email).toEqual("hbailey@gmail.com");
  });
  it("constructs a new user", () => {
    const testUser = new User("Mick", "Michaels", "mmichaels@gmail.com");
    expect(testUser.getName()).toEqual("Mick Michaels");
    expect(testUser.email).toEqual("mmichaels@gmail.com");
  });
  it("constructs a new user with applications", () => {
    const testUser = new User("Mick", "Michaels", "mmichaels@gmail.com");
    expect(testUser.applications).toEqual([]);
  });
  it("allows the name to be updated", () => {});
});
