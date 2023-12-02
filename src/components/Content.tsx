import Color from "./content/Color";
import Text from "./content/Text";

const Content = (): JSX.Element => {
  return (
    <section id="content">
      <div id="content__container">
        <Color />
        <Text />
      </div>
    </section>
  );
};

export default Content;
