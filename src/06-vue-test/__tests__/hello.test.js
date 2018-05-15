import Vue from "vue";
import { mount, shallow } from "@vue/test-utils";
import Hello from "../Hello.vue";

/** Testing using plain Vue **/

// describe("Hello component", () => {
//   it("renders correctly", () => {
//     const comp = new Vue(Hello).$mount();
//     expect(comp.$el.textContent).toContain("Hello Vue");
//   });

//   it("renders correctly after changing the name state", () => {
//     const comp = new Vue(Hello).$mount();
//     comp.name = "Camel";

//     comp.$nextTick(() => {
//       expect(comp.$el.textContent).toContain("Hello Camel");
//     });
//   });

//   it("renders correctly passing the from prop", () => {
//     const propsData = {
//       greeter: "Joe",
//     };
//     const Constructor = Vue.extend(Hello);
//     const comp = new Constructor({
//       propsData,
//     }).$mount();

//     expect(comp.$el.textContent).toContain("Hello Vue from Joe");
//   });
// });

/** Testing rendered data using @vue/test-utils methods **/

// describe("Hello component", () => {
//   it("renders correctly", () => {
//     const comp = mount(Hello);
//     expect(comp.html()).toContain("Hello Vue");
//   });

//   it("renders correctly after changing the name state", () => {
//     const comp = mount(Hello);
//     comp.setData({ name: "Camel" });
//     expect(comp.html()).toContain("Hello Camel");
//   });

//   it("renders correctly passing the from prop", () => {
//     const propsData = { greeter: "Joe" };
//     const comp = mount(Hello, {
//       propsData,
//     });

//     expect(comp.html()).toContain("Hello Vue from Joe");
//   });
// })

/** Testing with Snapshot Testing **/

describe("Hello component", () => {
  it("renders correctly", () => {
    const comp = mount(Hello);
    expect(comp.html()).toMatchSnapshot();
  });

  it("renders correctly after changing the name state", () => {
    const comp = mount(Hello);
    comp.setData({ name: "Camelo" });
    expect(comp.html()).toMatchSnapshot();
  });

  it("renders correctly passing the from prop", () => {
    const propsData = { greeter: "Joe" };
    const comp = mount(Hello, { propsData });

    expect(comp.html()).toMatchSnapshot();
  });

  it("calls sayHi when click on button", () => {
    const stub = jest.fn();
    const methods = { sayHi: stub };
    const comp = mount(Hello, { methods });

    comp.find("button").trigger("click");
    expect(stub).toBeCalled();
  });

  it("sayHi emits a sayHi event", () => {
    const comp = mount(Hello);
    comp.vm.sayHi();
    expect(comp.emitted().sayHi).toBeTruthy();
  });
});
