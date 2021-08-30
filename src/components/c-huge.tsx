import { useState, memo }from 'react';

function CHuge() {
  const [count, setCount] = useState(0)
  console.log('render');
  return (
    <div>
      CHuge: {count}
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  );
}

export default memo(CHuge);
