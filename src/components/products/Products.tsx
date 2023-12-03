import ProductsCard from "../childrenComponents/ProductsCard";
import dataHelper from "../../helpers/dataHelper";

const Products = (): JSX.Element => {
  const { productsData } = dataHelper();
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
          <div className="row gx-5">
            <div className="col-4">
              <article className="box-products">
                <div className="box-products__header">
                  <p>In Need</p>
                </div>
                {productsData.need.map((item, index) => (
                  <ProductsCard {...item} key={index} />
                ))}
              </article>
            </div>
            <div className="col-4">
              <article className="box-products">
                <div className="box-products__header">
                  <p>Industry</p>
                </div>
                {productsData.industry.map((item, index) => (
                  <ProductsCard {...item} key={index} />
                ))}
              </article>
            </div>
            <div className="col-4">
              <article className="box-products">
                <div className="box-products__header">
                  <p>Industry</p>
                </div>
                {productsData.solution.map((item, index) => (
                  <ProductsCard {...item} key={index} />
                ))}
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
