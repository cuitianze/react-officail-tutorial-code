import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/lib/index.css';
import { Table, Icon } from 'antd';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach( (product)=> {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} /> );
      lastCategory = product.category;
    });

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }];

    var products = this.props.products;
    // var lastCategory2 = null;
    products.map( (product, inx)=> {
      // if(product.category !== lastCategory2) {
      //   products.splice(inx, 0, {name: product.category});
      // }
      product.key = inx ? Math.random() : inx;
      // products.push(product);
      // lastCategory2 = product.category;
    });
    const data = products;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <hr/>
        <h2>Ant Design</h2>
        <Table columns={columns} dataSource={data}/>
      </div>
    );
  }
}

export default ProductTable;
