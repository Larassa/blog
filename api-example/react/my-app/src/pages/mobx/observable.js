/*
 * @Description: observable
 * @Date: 2021-08-17 21:55:35
 * @LastEditTime: 2021-08-19 11:52:40
 */
import { autorun, observable, action, computed, reaction, makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

class OTemp {
  temp = observable({
    name: 'temp',
    age: 12,
    arr: [1, 2, 3, 4, 5],
  });
  // 通过action改变可监听对象
  setName = action(name => {
    this.temp.name = name;
  });
  setAge = action(age => {
    this.temp.age = age;
  });
  setArr = action(arr => {
    this.temp.arr.push(6);
  });

  getNewAge = computed(() => {
    return this.temp.age * 10;
  });
}
const sTemp = new OTemp();

const Observable = () => {
  useEffect(() => {
    autorun(() => {
      console.log('temp.name: ', sTemp.temp.name);
      console.log('temp.name: ', sTemp.temp.age);
      console.log('temp.newAge: ', sTemp.getNewAge);
    });
    // 粗略地讲，reaction 是 computed(expression).observe(action(sideEffect)) 或 autorun(() => action(sideEffect)(expression)) 的语法糖。
    reaction(
      () => sTemp.temp.arr.length,
      (len, reaction) => {
        console.log('len', len);
        console.log('reaction', reaction);
      },
    );
  }, []);

  const changeName = name => {
    sTemp.setName(name);
    sTemp.setAge(13);
    // sTemp.setArr();
  };

  return (
    <div>
      <p>temp.name: {sTemp.temp.name}</p>
      {/* <p>temp.age: {sTemp.getNewAge}</p> */}

      <button onClick={() => changeName('change temp name')}>change temp name</button>
    </div>
  );
};

export default observer(Observable);
