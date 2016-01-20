import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  //
  // constructor() {
  //
  // }

  render() {
    return (
      <div>
        <h1>FilterableProductTable</h1>
        <ProductTable products={this.props.products} />
      </div>
    )
  }
}

export default FilterableProductTable;
