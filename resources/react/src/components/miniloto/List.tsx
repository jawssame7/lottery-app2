import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import TdItem from './TdItem';
import SPItem from './SPItem';

const List = ({ minilotoList }: { minilotoList: MiniLotoTypes[] }) => {
  return (
    <>
      <div className={'overflow-x-auto hidden sm:block md:block lg:block xl:block 2xl:block mt-5'}>
        <table className={'table w-full'}>
          <thead>
            <tr>
              <th>開催回</th>
              <th>開催日</th>
              <th>当たり</th>
            </tr>
          </thead>
          <tbody>
            {minilotoList.map((miniloto: MiniLotoTypes) => {
              return (
                <tr key={miniloto.id}>
                  <TdItem miniloto={miniloto} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={'sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden mt-5'}>
        <div className={'border-base-300 border rounded-box'}>
          <div className={'p-3'}>
            {minilotoList.map((miniloto: MiniLotoTypes) => {
              return <SPItem key={miniloto.id} miniLoto={miniloto} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
