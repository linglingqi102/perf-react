import React, { Suspense, useState } from 'react';
import styles from './index.less';
import { Link } from 'umi';
// 注释后 tree shaking 会去掉无用代码
import { Button } from 'antd';  
// 按需加载组件
/** loadable 方式，会单独打成chunk */
import AsyncB from '../components/b-dynamic';
/** 推荐官方，lazy 方式，也会单独打成chunk */
const ACom = React.lazy(() => import('../components/a-com')); 

// 像使用普通组件一样即可
// dynamic 为你做:
// 1. 异步加载该模块的 bundle
// 2. 加载期间 显示 loading（可定制）
// 3. 异步组件加载完毕后，显示异步组件
const {registerObserver}  = require('react-perf-devtool')

function callback(measures:any) {
  console.log('measures', measures);
  // do something with the measures
}

registerObserver({}, callback)

export default function IndexPage() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={handleClick}>Button</Button>
      number: {count}
      <div><Link to="/fast">Go to fast page</Link></div>
      <AsyncB /> 
      <Suspense fallback={<div>Loading...</div>}>
        <ACom />
      </Suspense>
    </div>
  );
}
