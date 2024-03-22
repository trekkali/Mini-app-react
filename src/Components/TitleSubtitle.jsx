import React from 'react';

function TitleSubtitle({ title, subtitle }) {
  return (
    <div className="title-subtitle text-center">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <h2 className="text-xl">{subtitle}</h2>
    </div>
  );
}

export default TitleSubtitle;
