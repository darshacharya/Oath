import React from 'react';

const OfficeNews = () => {
  const newsItems = [
    "Office will be closed on Friday for maintenance.",
    "New project kickoff meeting on Monday.",
    "Annual company picnic scheduled for next month."
  ];

  return (
    <section id="office-news">
      <h2>Office News</h2>
      <div id="news-ticker">
        {newsItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
};

export default OfficeNews;
