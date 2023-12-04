import React, { FC } from 'react';

import './Card.css';

import { CardInterface } from '../../common/types';

const Card: FC<CardInterface> = ({ image, title, content, alt }) => (
  <div className="card-item">
    <div>
      <img src={image} alt={alt} />
    </div>

    <strong>
      <p>
        <br />
        {title}
      </p>
    </strong>

    <p>{content}</p>
  </div>
);

export default Card;
