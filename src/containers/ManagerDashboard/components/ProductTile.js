import React from 'react'

export default function ProductTile(props) {
    return (
        <div className="product-tile">
            <div className="layer">
                <p className="product-title">{props.title}</p>
            </div>
        </div>
    )
}
