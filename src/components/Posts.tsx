// Posts.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import '../css/Blog.css'
import '../css/Posts.css';
import { cardsData } from './CardData';
import {Pagination}  from './Pagination';

const Posts: React.FC = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/label');
  };
  return (   
    <Pagination />    
  )
};

export default Posts;
