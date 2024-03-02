import React from 'react'
import Product from './component/product';
import './App.css';
function App() {
  const Box1 ={
      id: 1,
      name: 'Apple Iphone 14 Pro Max 128 GB',
      price: 32000000,
      image: 'https://genk.mediacdn.vn/139269124445442048/2022/10/6/photo-2-1665045982304747589236-1665047852638-1665047852910827993220.jpeg',
  };
  const Box2 ={
    id: 2,
    name: 'Samsung Galaxy S22 Ultra',
    price: 35000000,
    image: 'https://vnn-imgs-f.vgcloud.vn/2022/04/02/20/galaxy-s22-ultra-se-bat-kha-chien-bai-neu-khac-phuc-nhung-dieu-nay.jpg',
  };
  const Box3 ={
      id: 3,
      name: 'Oppo Reno 8',
      price: 25000000,
      image: 'https://danhgiacongnghe.net/wp-content/uploads/2022/06/danh-gia-chi-tiet-dien-thoai-oppo-reno-8-co-tot-khong-thumb.jpg',
  }
  const Box4 ={
    id: 4,
    name: 'Lenovo Z6 Pro',
    price: 30000000,
    image: 'https://photo-cms-viettimes.zadn.vn/w666/Uploaded/2022/zdjwpvrwq/2019_10_28/39206415_28102019.jpg',
  }
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className='container-fluid'>
          <a className='navbar-brand'>Props</a>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Product item={Box1}/>
              <Product item={Box2}/>
              <Product item={Box3}/>
              <Product item={Box4}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
