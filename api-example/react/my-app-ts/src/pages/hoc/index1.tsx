/*
 * @Description: 高阶组件demo1
 * @Date: 2021-11-07 16:42:31
 * @LastEditTime: 2021-11-07 20:45:28
 */
import React from 'react';
interface IProps {
  name: string;
}
const WidthHoc1 = (WrappedComponent: JSX.Element) => {
  return WrappedComponent;
};
const HOC1 = (props: IProps) => {
  return (
    <div>
      hocdfdf: {props.name}
      <WidthHoc1>
        <div>djhfjdhfdf</div>
      </WidthHoc1>
    </div>
  );
};
export default HOC1;
