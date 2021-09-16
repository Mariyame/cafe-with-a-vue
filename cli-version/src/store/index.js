import { createStore } from 'vuex'

export default createStore({
  state: {
    restaurantName: "La belle vue",
    shoppingCart: 0,
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/crossiant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 1
      },
      {
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 1
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 1
      }
    ]
  },
  getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()

			return `Copyright ${state.restaurantName} ${currentYear}`
		}
	},
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
