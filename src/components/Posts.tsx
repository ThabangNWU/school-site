// Posts.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './Blog.css';
import './Posts.css';
import { cardsData } from './CardData';

const Posts: React.FC = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/label');
  };

  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <Card
        key={i}
        imageUrl={cardsData[i % cardsData.length].imageUrl}
        title={cardsData[i % cardsData.length].title}
        body={cardsData[i % cardsData.length].body}
        onReadMoreClick={handleReadMoreClick}
      />
    );
  }

  return <div className="posts-container">{cards}</div>;
};

export default Posts;
