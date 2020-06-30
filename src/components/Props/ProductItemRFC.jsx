import React from 'react'

export default function ProductItemRFC(props) {
    let { productData } = props;
    return (
        <div>
            Name: {productData.name}
        </div>
    )
}
