import React, { FC } from 'react';

import './Panel.css';

import { PanelInterface } from '../../common/types';

const Panel: FC<PanelInterface> = ({
  image,
  title,
  text,
  imgPos,
  txtPos,
  alt,
}) => (
  <div className="panel-container">
    <img
      style={{
        float: imgPos,
        order: imgPos === 'right' ? '3' : '1',
      }}
      className="panel-img"
      src={image}
      alt={alt}
    />
    <div style={{ float: txtPos }} className="panel-txt">
      <strong> {title} </strong>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </div>
);

export default Panel;
