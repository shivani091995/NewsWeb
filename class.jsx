// // NewsSection.js
// import React, { Component } from 'react';
// import './NewsSection.css'; // Import the CSS file

// class NewsSection extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newsList: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     try {
//       const apiKey = '29a0d2f7e91d4b659ccab6b601aa3c72';
//       const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
//       const data = await response.json();
//       this.setState({ newsList: data.articles });
//     } catch (error) {
//       console.error('Error fetching news data:', error);
//     }
//   };

//   render() {
//     const { newsList } = this.state;

//     return (
//       <div className="news-section-container">
//         <h2>Top-Headlines</h2>
//         <hr></hr>
//         <br></br>
//         <div className="news-list">
//           {newsList.map((news, index) => (
//             <div key={index} className="news-item">
//               <img src={news.urlToImage} alt={news.title} className="news-image" />
//               <div className="news-details">
//                 <h4>{news.title}</h4>
//                 <p>{news.description}</p>
//                 <a href={news.url} target="_blank" rel="noopener noreferrer">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsSection;
