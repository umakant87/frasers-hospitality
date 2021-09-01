/* eslint-disable */
import TileCard from "./TileCard";

export default {
  title: "Common Components/Frasers/TileCard",
  component: TileCard,
};

const Template = (args) => <TileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  tiles: [
    {
      image: {
        src: `https://www.fraserspropertyindustrial.com/-/media/Estates/Corporate/Home/What-We-Do/Home---What-We-Do---Develop.jpg`,
        alt: "test",
      },
      title: `Develop`,
      description: "dummy content"
    },
    {
      image: {
        src: `https://www.fraserspropertyindustrial.com/-/media/Estates/Corporate/Home/What-We-Do/Home---What-We-Do---Own.jpg`,
        alt: "test",
      },
      title: `Own`,
      description: "dummy content"
    },
    {
      image: {
        src: `https://www.fraserspropertyindustrial.com/-/media/Estates/Corporate/Home/What-We-Do/Home---What-We-Do---Manage.jpg`,
        alt: "test",
      },
      title: `Manage`,
      description: "dummy content"
    }
  ]
};
