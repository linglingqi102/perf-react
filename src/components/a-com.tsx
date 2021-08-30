import { memo } from 'react';
import { Button } from 'antd';
function ACom() {
  const arr = new Array(1000).fill(0);
  console.log('arr', arr)
  return (
    <div>
      ACom
      <div>
        {arr.map((item, idx) => <Button key={idx} onClick={() => console.log('')}>{idx}</Button>)
        }
      </div>
    </div>
  );
}

export default memo(ACom);
