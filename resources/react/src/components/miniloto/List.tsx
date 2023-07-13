import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import TdItem from './TdItem';
import SPItem from './SPItem';
import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const List = ({ minilotoList }: { minilotoList: MiniLotoTypes[] }) => {
  const [reverseSort, setReverseSort] = useState(-1);

  const onSort = () => {
    minilotoList.reverse();
    if (reverseSort === -1) {
      setReverseSort(1);
    } else {
      setReverseSort(-1);
    }
  };
  return (
    <>
      <div className={'overflow-x-auto hidden sm:block md:block lg:block xl:block 2xl:block mt-5'}>
        <table className={'table w-full'}>
          <thead>
            <tr>
              <th onClick={onSort}>
                開催回
                <span className={'times-sort'}>
                  {reverseSort === -1 ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
                </span>
              </th>
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
        <div className={'flex flex-1 justify-start'}>
          <button
            className={
              'text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            }
            type={'button'}
            onClick={onSort}
          >
            ソート
          </button>
        </div>
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
