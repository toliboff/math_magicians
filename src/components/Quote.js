import React from 'react';

function Quote() {
  const quotes = [
    {
      text: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
      author: 'William Paul Thurston',
    },
    {
      text: 'There should be no such thing as boring mathematics.',
      author: 'Edsger Dijkstra',
    },
    {
      text: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. ',
      author: 'Shakuntala Devi',
    },
    {
      text: 'Somehow it’s o.k. for people to chuckle about not being good at math. Yet if I said ‘I never learned to read,” they’d say I was an illiterate dolt.” ',
      author: 'Neil Degrasse Tyson',
    },
    {
      text: 'Life is a math equation. In order to gain the most, you have to know how to convert negatives into positives.',
      author: 'Anonymous',
    },
    {
      text: 'If you stop at general math, then you will only make general money.',
      author: 'Snoop Dogg',
    },
    {
      text: 'The only way to learn mathematics is to do mathematics',
      author: 'Paul Halmos',
    },
  ];

  const randomQuote = Math.floor(Math.random() * 7);
  return (
    <div className="Quote">
      <div className="q_container">
        <span className="text">{quotes[randomQuote].text}</span>
        <span className="author">
          -
          {quotes[randomQuote].author}
        </span>
      </div>
    </div>
  );
}

export default Quote;
