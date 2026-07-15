const products = [
  { name: 'Ceramic cup', price: '1 290 ₽', color: 'sand', emoji: '☕' },
  { name: 'Linen tote bag', price: '2 490 ₽', color: 'blue', emoji: '✦' },
  { name: 'Quiet evening candle', price: '890 ₽', color: 'pink', emoji: '✺' },
];

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">New collection · 2025</p>
          <h1>Things that<br /><em>stay</em> with you.</h1>
          <p className="hero-text">Thoughtful objects for home, work and little everyday joys.</p>
          <a className="button" href={`${import.meta.env.BASE_URL}test-kcatalog`}>Explore collection <span>→</span></a>
        </div>
        <div className="hero-art" aria-label="Иллюстрация коллекции">
          <div className="sun" /><div className="vase">◡</div><div className="leaf leaf-one" /><div className="leaf leaf-two" />
          <span className="art-label">slow<br />living</span>
        </div>
      </section>
      <section className="section-head"><div><p className="eyebrow">Editor&apos;s pick</p><h2>Everyday favorites</h2></div><a href={`${import.meta.env.BASE_URL}test-kcatalog`}>View all →</a></section>
      <section className="product-grid">
        {products.map((product) => <article className="product" key={product.name}><div className={`product-art ${product.color}`}><span>{product.emoji}</span></div><div className="product-info"><h3>{product.name}</h3><strong>{product.price}</strong></div></article>)}
      </section>
    </>
  );
}

export default HomePage;
