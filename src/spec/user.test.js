const User = require("../User");

describe("User", () => {
  it("constructs a new user", () => {
    const testUser = new User("Harrison Bailey", "hbailey@gmail.com");
    expect(testUser.name).toEqual("Harrison Bailey");
  });
});
