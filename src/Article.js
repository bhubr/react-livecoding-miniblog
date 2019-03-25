import React from 'react';

function Article(props) {
  return (
    <article>
      <h2 className="text-primary">{props.title}</h2>
      <p>{props.text}</p>
    </article>
  );
}

export default Article;
