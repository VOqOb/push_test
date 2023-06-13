import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-main">
        <div className="header-left">
          <div className="title radious">ぜんこくずかん</div>
        </div>
        <div className="header-right">
            <div className="sort_name radious">番号順</div>
        </div>
    </div>
  )
}

export default Header