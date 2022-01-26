import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./pages/Header"
import Product from "./pages/Product"
import Products from "./pages/Products"
import './style.css'

function App() {

    return (
        <div className="App">

            <Header />

            <Routes>
                <Route index element={<Navigate replace to="/products" />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Product />} />
            </Routes>

        </div>
    )
}

export default App

{/*
    
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<CategorieProduct />} />
          <Route path='/basket' element={<Basket />} />
          <Route path="*" element={<NotFound />} /> 
        */}




        // handleProductUpVote = (productId) => {
        //     const nextProducts = this.state.products.map((product) => {
        //       if (product.id === productId) {
        //         return Object.assign({}, product, {
        //           votes: product.votes + 1,
        //         });
        //       } else {
        //         return product;
        //       }
        //     });
        //     this.setState({
        //       products: nextProducts,
        //     });
        //   }


        // const productComponents = products.map((product) => (
        //     <Product
        //       key={'product-' + product.id}
        //       id={product.id}
        //       title={product.title}
        //       description={product.description}
        //       url={product.url}
        //       votes={product.votes}
        //       submitterAvatarUrl={product.submitterAvatarUrl}
        //       productImageUrl={product.productImageUrl}
        //       onVote={this.handleProductUpVote}
        //     />
        //   ));

// class ProductList extends React.Component {
//     render() {

//         const products = products.map((product) => (
//             <Product
//                 id={product.id}
//                 title={product.title}
//                 description={product.description}
//                 url={product.url}
//                 votes={product.votes}
//                 submitterAvatarUrl={product.submitterAvatarUrl}
//                 productImageUrl={product.productImageUrl}
//             />
//         ));

//         return (
//             <div className="container">
//                 <h1>Popular products</h1>
//                 <hr />
//                 {products}
//             </div>
//         );
//     }
// }

// class Product extends React.Component {
//     render() {
//         return (
//             <div className='container'>
//                 <div className="row">
//                     <div className='col-md-12'>


//                         <div className="main">
//                             <div className="image">
//                                 <img src={this.props.productImageUrl} />
//                             </div>

//                             <div className='header'>
//                                 <a>
//                                     <i className='fa fa-2x fa-caret-up' />
//                                 </a>
//                                 {this.props.votes}
//                             </div>
//                             <div className='description'>
//                                 <a href={this.props.url}>
//                                     {this.props.title}
//                                 </a>
//                                 <p>
//                                     {this.props.description}
//                                 </p>
//                             </div>
//                             <div className='extra'>
//                                 <span>Submitted by:</span>
//                                 <img
//                                     className='avatar'
//                                     src={this.props.submitterAvatarUrl}
//                                 />
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


// ReactDOM.render(<ProductList />, document.getElementById('content'));