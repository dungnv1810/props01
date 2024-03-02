import React from 'react'
function Product(props) {
    const {item} = props;
    const {name, price, image} = item
  return (
    <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
            <img alt="" src={image}/>
            <div className="caption">
                <h3>
                    {name}
                </h3>
                <p>
                    {price} VND
                </p>
                <p>
                    <a href="#" className="btn btn-primary">Mua ngay</a>
                </p>
            </div>
            
        </div>
    </div>
    </div>
  );
}

export default Product;
