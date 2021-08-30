import styles from './fast.less';
import { get } from 'lodash';

export default function Page() {
  const obj = { name: 'liu'}
  return (
    <div>
      <h1 className={styles.title}>Page fast</h1>
      {get(obj,'name')}
    </div>
  );
}
