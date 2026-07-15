const catalog = [
  ['Morning cup', '1 290 ₽', '☕'], ['Linen tote bag', '2 490 ₽', '✦'],
  ['Quiet evening candle', '890 ₽', '✺'], ['Ideas notebook', '690 ₽', '▱'],
];

function RouterDomPage() {
  return <section className="catalog-page"><p className="eyebrow">All objects</p><h1>Catalog</h1><p className="catalog-intro">A small collection of thoughtful, useful things.</p><div className="product-grid catalog-grid">{catalog.map(([name, price, emoji], index) => <article className="product" key={name}><div className={`product-art ${['sand', 'blue', 'pink', 'green'][index]}`}><span>{emoji}</span></div><div className="product-info"><h3>{name}</h3><strong>{price}</strong></div></article>)}</div></section>;
}

export default RouterDomPage;
