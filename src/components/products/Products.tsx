import ProductsCard from "../childrenComponents/ProductsCard";
import dataHelper from "../../helpers/dataHelper";
import Fade from "react-reveal/Fade";

const Products = (): JSX.Element => {
  const { productsData } = dataHelper();
  return (
    <section id="products">
      <Fade bottom cascade>
        <div className="section-header">
          <h3>Sales Automation Modules</h3>
          <p>
            Unique and powerful suite of software to run your entire business,
            brought to you by a company with the long term vision to transform
            the way you work.
          </p>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="section-content">
          <div className="products-container">
            <div className="row gx-5 gy-5 gy-lg-2">
              <div className="col-md-6 col-lg-4">
                <article className="box-products">
                  <div className="box-products__header">
                    <p>In Need</p>
                  </div>
                  {productsData.need.map((item, index) => (
                    <ProductsCard {...item} key={index} />
                  ))}
                </article>
              </div>
              <div className="col-md-6 col-lg-4">
                <article className="box-products">
                  <div className="box-products__header">
                    <p>Industry</p>
                  </div>
                  {productsData.industry.map((item, index) => (
                    <ProductsCard {...item} key={index} />
                  ))}
                </article>
              </div>
              <div className="col-md-6 col-lg-4" id="product-3">
                <article className="box-products">
                  <div className="box-products__header">
                    <p>Solution</p>
                  </div>
                  {productsData.solution.map((item, index) => (
                    <ProductsCard {...item} key={index} />
                  ))}
                </article>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Products;
