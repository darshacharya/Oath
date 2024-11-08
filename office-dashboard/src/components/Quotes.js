import React from 'react';

const Quotes = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
  ];

  return (
    <section id="quotes">
      <h2>Inspirational Quotes</h2>
      <div>
        {quotes.map((quote, index) => (
          <p key={index}>{quote}</p>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
