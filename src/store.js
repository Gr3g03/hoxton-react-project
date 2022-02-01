
// import zustand from "zustand";
import create from 'zustand'


const useStore = create((set, get) => ({
    products: [],
    singleProduct: [],
    count: 0,



    fetchProducts: () => {
        fetch(`http://localhost:3001/products`)
            .then(resp => resp.json())
            .then(products => set({ products: products }))
    },


    increase: () => set(state => ({ count: state.count + 1 })),
    decrease: () => set(state => ({ count: state.count - 1 }))

}))



//  const [products, setProduct] = useState([])


//  fetch(`http://localhost:3001/products`)
//      .then(resp => resp.json())
//      .then(productsFromServer => get().(productsFromServer)

export default useStore