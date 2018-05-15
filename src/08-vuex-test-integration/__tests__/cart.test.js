import { shallowMount } from "@vue/test-utils";
import Cart from "@/03-cart-vuex/Cart";
import { createStore } from "../storeUtils";

describe("Cart Component", () => {
  let mutations
  let getters
  let store
  let localVue

  const removeCartItemStub = jest.fn()
  const mock = {
    modules: {
      cart: {
        state: () => ({
          cart: [{ id: 1, quantity: 1, price: 10 }]
        }),
        mutations: {
          removeCartItem: removeCartItemStub
        }
      }
    }
  }

  beforeEach(() => {
    removeCartItemStub.mockClear();

    const storeResult = createStore(mock)
    store = storeResult.store
    localVue = storeResult.localVue
  })

  it("renders with getters", () => {
    const comp = shallowMount(Cart, { store, localVue });
    expect(comp.find('h3').html()).toContain('Total: 10');
  });

  it("calls removeCartItem mutation when click on remove", () => {
    const comp = shallowMount(Cart, { store, localVue });
    comp.find('button').trigger('click');
    expect(removeCartItemStub).toBeCalled();
  });
});
