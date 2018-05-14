import Cat from "../cat";

describe("Cat", () => {
  it("is instantiable", () => {
    const cat = new Cat("Mickey", 2);
    expect(cat).toBeInstanceOf(Cat);
  });

  it("two cats with same params are the same", () => {
    const cat = new Cat("Mickey", 2);
    const cat2 = new Cat("Mickey", 2);
    expect(cat).toEqual(cat2); // true
  });

  describe("isPokemon", () => {
    it("is true if can talk", () => {
      const cat = new Cat("Jo", 2, ["talk"]);
      expect(cat.isPokemon()).toBe(true);
    });
    it("is false if can't talk", () => {
      const cat = new Cat("Mickey", 2);
      expect(cat.isPokemon()).toBe(false);
    });
  });

  describe("getType", () => {
    it("is oldie if age > 2", () => {
      const cat = new Cat("Mickey", 3);
      expect(cat.getType()).toBe("oldie");
    });
    it("is kitty if age <= 2", () => {
      const cat = new Cat("Mickey", 2);
      expect(cat.getType()).toBe("kitty");
    });
  });

  describe("greetCat", () => {
    // it("greets a cat by its name", () => {
    //   const cat = new Cat("Mickey", 3);
    //   const cat2 = new Cat("Mouse", 3);
    //   expect(cat.greetCat(cat2)).toBe("Hi Mouse");
    // });
    it("throws when greeting no cat", () => {
      const cat = new Cat("Mickey", 2);
      expect(() => cat.greetCat()).toThrow();
    });
  });

  it("walks", done => {
    const cat = new Cat("Mickey", 2);
    cat.walks(result => {
      expect(result).toBe("Miau");
      done();
    });
  });

  it("works", () => {
    const cat = new Cat("Mickey", 2);
    expect(cat.work()).resolves.toBe("Done");
  });

  it("works (async/await)", async () => {
    const cat = new Cat("Mickey", 2);
    const workResult = await cat.work();
    expect(workResult).toBe("Done");
  });
});
