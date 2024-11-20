import React from 'react'

export default function Review() {
    const reviews = [
      {
        name: 'John Doe',
        rating: 5,
        imgSrc:"/review1.jpg",
        content: 'This is an amazing website! The design is clean and modern, and the functionality is excellent.'
      },
      {
        name: 'Jane Smith',
        rating: 4,
        imgSrc:"/reviews2.jpg",
        content: 'I absolutely loved it! The colors were beautiful, and the website was easy to navigate.'
      },
      {
        name: 'Alice Johnson',
 
        imgSrc:"/reviews3.jpg",
        rating: 4,
        content: 'The website was not as fast as I expected, but it was still usable and functional.'
      },
      {
        name: 'Bob Brown',
        rating: 5,
        imgSrc:"/reviews4.jpg",
        content: "This site loads quickly and performs flawlessly on my device. I appreciate the smooth experience"
      },
    ]
    return (
      <section className="section" id="review">
        <div className="container">
                <h1 className="heading-2">What our customer says</h1>
                <p>These are some of the positive feedback from our users.</p>
      
        <div className="hovereffect hover:bg-zinc-900">
            {reviews.map((review, index) => (
                <div key={index} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0', borderRadius: '10px' }}>
                    <img src={review.imgSrc} alt={`${review.name}'s profile`} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
                    <h4>{review.name}</h4>
                    <p>{'⭐'.repeat(review.rating)}</p>
                    <p>{review.content}</p>
                </div>
            ))}
        </div>
        </div>
        </section>
    );
}