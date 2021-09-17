import { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import InfiniteScroll from "../../components/infinite-scroll/infinite-scroll";
import "./index.scss";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject("store")
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;

    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <Text
          className="iconfont icon-mianxingbeizi"
          style={{ fontSize: "50px" }}
        ></Text>
        <InfiniteScroll>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <View key={item} className="m_scroll">
                {item}
              </View>
            );
          })}
        </InfiniteScroll>
      </View>
    );
  }
}

export default Index;
