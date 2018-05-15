import userModel from "../user";

describe("User", () => {
  describe("createUser", () => {
    it("can be created", () => {
      const user = userModel.createUser(3, "Yao");
      expect(user).toEqual({ id: 3, name: "Yao" });
    });

    it("throws an error if no valid id", () => {
      const createUser = () => userModel.createUser();
      expect(createUser).toThrow();
    });

    describe("user validation", () => {
      const spy = jest.spyOn(userModel, "validateUser");

      beforeEach(() => {
        spy.mockClear();
      });

      it("validates the user", () => {
        userModel.createUser(1, "Yao");
        const user = { id: 1, name: "Yao" };
        expect(spy).toBeCalled();
        expect(spy).toBeCalledWith(user);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it("shouldn't be called", () => {
        expect(spy).not.toBeCalled();
      });
    });
  });

  describe("saveUser", () => {
    it("user is saved to localStorage", () => {
      const user = userModel.createUser(1, "Yao");
      userModel.saveUser(user);
      expect(localStorage.setItem).toBeCalledWith("user", user);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
    it("another user saved to localStorage", () => {
      userModel.saveUser({ id: 1 });
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
  });

  describe("fetchUser", () => {
    it("gets a user", async () => {
      const { data } = await userModel.fetchUser(1);
      return expect(data).toBe(1);
    });
  });
});
