import { shallowMount } from "@vue/test-utils";
import cart from "@/store/cart";

const { mutations, actions, getters } = cart;

describe("Cart Store Module", () => {
  let state;

  beforeEach(() => {
    state = {
      cart: [
        {
          id: 1,
          title: "Shoes",
          price: 22.3,
          quantity: 1
        }
      ]
    };
  });

  describe("Mutations", () => {
    describe("removeCartItem", () => {
      it("removes an item", () => {
        mutations.removeCartItem(state, { id: 1 });
        expect(state.cart).toEqual([]);
      });
    });
    describe("addToCart", () => {
      it("if cart item doesn't exist, is added", () => {
        const result = [...state.cart, { id: 2, quantity: 1 }];
        mutations.addToCart(state, { id: 2 });
        expect(state.cart).toEqual(result);
      });

      it("if cart item exist, quantity is increased", () => {
        mutations.addToCart(state, { id: 1 });
        expect(state.cart).toEqual([
          {
            id: 1,
            title: "Shoes",
            price: 22.3,
            quantity: 2
          }
        ]);
      });
    });
  });

  describe("Getters", () => {
    describe("total", () => {
      it("returns 0 if cart is empty", () => {
        mutations.removeCartItem(state, { id: 1 });
        expect(getters.total(state)).toEqual(0);
      });

      it("returns the sum of cart items", () => {
        mutations.addToCart(state, { id: 2, price: 10 });
        mutations.addToCart(state, { id: 2, price: 10 });
        expect(getters.total(state)).toEqual(42.3);
      });
    });
  });

  // Remember we have axios mocked already
  describe("Actions", () => {
    describe("fetchCart", () => {
      it("calls addToCart after fetching Cart", async () => {
        const context = { commit: jest.fn() };
        await actions.fetchCart(context);
        expect(context.commit).toBeCalledWith("addToCart", 1);
      });
    });
  });
});
