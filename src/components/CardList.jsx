import React from 'react';
import Card from './Card';

function CardList({ robots }) {
  return (
    <div className="">
      {robots.map(user => {
        return (
          <Card
            key={`user-${user.robots_id}`}
            id={user.robots_id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
