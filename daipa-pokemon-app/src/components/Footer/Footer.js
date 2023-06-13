import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <div className="Footer">
        <nav>
            <ul className="footer_button">
                ⓐ<li>詳しく見る</li>
                ⓧ<li>分布</li>
                Ⓨ<li>並び替え</li>
                ☥<li>評価</li>
                Ⓡ<li>図鑑の切り替え</li>
                Ⓑ<li>戻る</li>
            </ul>
        </nav>
    </div>
  )
}

export default footer