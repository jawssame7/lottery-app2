import List from '../components/loto7/List';
import PerInfo from '../components/loto7/PerInfo';
import { Link } from '@inertiajs/inertia-react';

const Loto7 = ({ loto7Results, authorizedId }) => {
  const btnCls = (authorizedId) => {
    const btnCls = 'btn btn-primary btn-sm';
    return authorizedId ? btnCls : btnCls + ' hidden';
  };
  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <div className={'flex flex-row'}>
          <div className={'flex-1'}>
            <h1 className={'text-2xl font-bold'}>Loto 7</h1>
          </div>
          <div className={'flex flex-1 justify-end'}>
            <Link href={'/create-loto7'} className={btnCls(authorizedId)}>
              当選結果作成
            </Link>
            <Link href={'/import-loto7'} className={btnCls(authorizedId) + ' btn-info ml-2'}>
              CSVインポート
            </Link>
          </div>
        </div>
        <PerInfo lotoList={loto7Results} maxNum={37} />
        <List loto7List={loto7Results}></List>
      </div>
    </>
  );
};

export default Loto7;
