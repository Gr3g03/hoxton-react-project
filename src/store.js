
// import zustand from "zustand";
import create from 'zustand'


const useStore = create((set, get) => ({
    products: [],
    singleProduct: [],



    fetchProducts: () => {
        fetch(`http://localhost:3001/products`)
            .then(resp => resp.json())
            .then(products => set({ products: products }))
    },

}))

//  const [products, setProduct] = useState([])


//  fetch(`http://localhost:3001/products`)
//      .then(resp => resp.json())
//      .then(productsFromServer => get().(productsFromServer)

export default useStore