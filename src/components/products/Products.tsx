import ProductsCard from "../childrenComponents/ProductsCard";

const Products = (): JSX.Element => {
  return (
    <section id="products">
      <div className="section-header">
        <h3>Sales Automation Modules</h3>
        <p>
          Unique and powerful suite of software to run your entire business,
          brought to you by a company with the long term vision to transform the
          way you work.
        </p>
      </div>

      <div className="section-content">
        <div className="products-container">
          <div className="row">
            <div className="col-4">
              <ProductsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
