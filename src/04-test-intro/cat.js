export default class Cat {
  constructor(name, age, skills = []) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }

  isPokemon() {
    return this.skills.includes("talk");
  }

  getType() {
    return this.age > 2 ? "oldie" : "kitty";
  }

  greetCat(cat) {
    if (!cat) {
      throw new Error("No cat to greet");
    }

    return `Hi ${cat.name}`;
  }

  walks(cb) {
    setTimeout(() => {
      cb("Miau");
    }, 1000);
  }

  work() {
    return Promise.resolve("Done");
  }
}
