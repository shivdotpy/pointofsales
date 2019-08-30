import React, {Component} from 'react'
import Axios from 'axios';
import ProductTile from "./components/ProductTile";

class ManagerDashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [{
                title: "computer"
            }, {
                title: "tie"
            }]
        }
    }

    render() {
        return (
            <div class="flex-container">
                <div style={{flexGrow: 1}} className="bck-color-light-blue">
                    <table className="table-full-width p-1">
                        <thead>
                        <tr>
                            <th>PRODUCTS</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-center bck-color-white p-3">
                            <td colSpan={4} className="p-2">There are no products</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="p-1">
                        <div className="bck-color-white">
                            <table className="table-full-width">
                                <tbody>
                                <tr>
                                    <th className="text-left">Subtotal</th>
                                    <td className="space-between"><span>1000 EUR</span><span>0 Items</span></td>
                                </tr>
                                <tr>
                                    <th className="text-left">VAT tax</th>
                                    <td className="space-between"><span>NA</span><span>EUR</span></td>
                                </tr>
                                <tr>
                                    <th className="text-left">Discount</th>
                                    <td className="space-between"><span>NA</span><span>EUR</span></td>
                                </tr>
                                <tr>
                                    <th className="text-left">Total</th>
                                    <td>1000 EUR</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={{flexGrow: 3}} className="bck-color-light-blue">
                    <div style={{display: 'flex'}}>
                        <div className="red-chip">All</div>
                        <div className="green-chip">COMPUTER</div>
                        <div className="green-chip">FRUITS</div>
                        <div className="green-chip">CLOTHING</div>
                    </div>
                    <div className="m-1">
                        <input type="search" placeholder="Search product" style={{width: '100%'}}/>
                    </div>
                    <div className="m-1" style={{display: 'flex'}}>
                        {this.state.products.map(product => {
                            return <ProductTile title={product.title}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


export default ManagerDashboard