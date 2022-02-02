import create from 'zustand'

// const count =  Products.votes 

const useStore = create((set, get) => ({
    products: [],
    users: [],
    user: null,
    Users: Users => set({ users: Users }),
    User: User => set({ user: User }),

    fetchProducts: () => {
        fetch(`http://localhost:3001/products`)
            .then(resp => resp.json())
            .then(products => set({ products: products }))
    },




}))


export default useStore