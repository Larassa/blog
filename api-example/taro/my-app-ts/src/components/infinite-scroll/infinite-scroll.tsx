/*
 * @Description: 滚动加载更多
 * @Date: 2021-08-21 18:41:40
 * @LastEditTime: 2021-08-26 11:03:22
 */
import React from 'react';
import { View, Text, ScrollView, LivePlayer } from '@tarojs/components';
import style from './infinite-scroll.module.scss';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

interface IProps {
  children: React.ReactNode;
}
const InfiniteScroll = (props: IProps) => {
  const temp = useInfiniteScroll(1);
  const onScrollToLower = (e) => {
    console.log('e', e);
    console.log('temp', temp);
  };
  return (
    <ScrollView
      className={style.m_wrap}
      scrollY
      onScrollToLower={onScrollToLower}
    >
      {props.children}
    </ScrollView>
  );
};

export default InfiniteScroll;
