import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

export default class TextCellComponent extends React.Component {


  render() {
    const {rowIndex, field, data, ...props} = this.props;

    let obj = data[rowIndex];

    if(field && field == "flag") {
           obj = ( <img src={obj[field]} className="imageStyle"/> );
    }
    else if(field){
      field.forEach(function (f) {
          obj = obj[f];
      });
    }

    return (

        <Cell {...props}>
            {obj}
        </Cell>

    );
  }
}
