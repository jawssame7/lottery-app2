import { List } from '../components/loto6/List';
import Perinfo from '../components/loto6/PerInfo';
import { Link } from '@inertiajs/inertia-react';

const Loto6 = ({ loto6Results, authorizedId }) => {
  const btnCls = (authorizedId) => {
    const btnCls = 'btn btn-primary btn-wide';
    return authorizedId ? btnCls : btnCls + ' hidden';
  };
  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <div className={'flex flex-row'}>
          <div className={'flex-1'}>
            <h1 className={'text-2xl font-bold'}>Loto 6</h1>
          </div>
          <div className={'flex flex-1 justify-end'}>
            <Link href={'/create-loto6'} className={btnCls(authorizedId)}>
              当選結果作成
            </Link>
          </div>
        </div>
        <Perinfo lotoList={loto6Results} maxNum={43} />
        <h3 className={'text-base font-medium mt-2.5'}>最新が一番上</h3>
        <List loto6List={loto6Results}></List>
      </div>
    </>
  );
};

export default Loto6;
