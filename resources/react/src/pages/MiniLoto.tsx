import List from '../components/miniloto/List';
import PerInfo from '../components/miniloto/PerInfo';
import { Link } from '@inertiajs/inertia-react';

const MiniLoto = ({ minilotoResults, authorizedId }) => {
  const btnCls = (authorizedId) => {
    const btnCls = 'btn btn-primary btn-sm';
    return authorizedId ? btnCls : btnCls + ' hidden';
  };
  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <div className={'flex flex-row'}>
          <div className={'flex-1'}>
            <h1 className={'text-2xl font-bold'}>Mini Loto</h1>
          </div>
          <div className={'flex flex-1 justify-end'}>
            <Link href={'/create-miniLoto'} className={btnCls(authorizedId)}>
              当選結果作成
            </Link>
            <Link href={'/import-miniLoto'} className={btnCls(authorizedId) + ' btn-info ml-2'}>
              CSVインポート
            </Link>
          </div>
        </div>
        <PerInfo minilotoList={minilotoResults} maxNum={31} />
        <List minilotoList={minilotoResults}></List>
      </div>
    </>
  );
};

export default MiniLoto;
