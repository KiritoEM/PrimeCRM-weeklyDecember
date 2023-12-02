import Color from "./content/Color";
import Text from "./content/Text";
import Paragraph from "./content/Paragraph";
import List from "./content/List";
import Quotes from "./content/Quotes";

const Content = (): JSX.Element => {
  return (
    <section id="content">
      <div id="content__container">
        <Color />
        <Text />
        <Paragraph />
        <List />
        <Quotes />
      </div>
    </section>
  );
};

export default Content;
