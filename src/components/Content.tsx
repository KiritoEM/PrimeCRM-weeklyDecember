import Color from "./content/Color";
import Text from "./content/Text";
import Paragraph from "./content/Paragraph";
import List from "./content/List";

const Content = (): JSX.Element => {
  return (
    <section id="content">
      <div id="content__container">
        <Color />
        <Text />
        <Paragraph />
        <List />
      </div>
    </section>
  );
};

export default Content;
