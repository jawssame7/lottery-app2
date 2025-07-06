import React from 'react';
import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import TdItem from './TdItem';
import SPItem from './SPItem';
import { useState, useEffect } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const List = ({ minilotoList }: { minilotoList: MiniLotoTypes[] }) => {
  const [reverseSort, setReverseSort] = useState(-1);
  const [topNumbers, setTopNumbers] = useState<number[]>([]);

  const onSort = () => {
    minilotoList.reverse();
    if (reverseSort === -1) {
      setReverseSort(1);
    } else {
      setReverseSort(-1);
    }
  };

  useEffect(() => {
    const latest24 = minilotoList.slice(-24);
    const numberCount: { [key: number]: number } = {};

    latest24.forEach((miniLoto) => {
      [
        miniLoto.per_number_1,
        miniLoto.per_number_2,
        miniLoto.per_number_3,
        miniLoto.per_number_4,
        miniLoto.per_number_5,
        miniLoto.bonus_number_1,
      ].forEach((num) => {
        if (numberCount[num]) {
          numberCount[num]++;
        } else {
          numberCount[num] = 1;
        }
      });
    });

    const filteredNumbers = Object.entries(numberCount).filter(([, count]) => count === 4); // 4回当選した数字のみ

    const sortedNumbers = filteredNumbers.map(([num]) => parseInt(num)).sort((a, b) => a - b); // 数字順にソート

    setTopNumbers(sortedNumbers);
  }, [minilotoList]);

  return (
    <>
      <div className={'mt-5'}>
        <div className={'flex flex-wrap justify-start gap-4'}>
          <div className="card bg-neutral text-neutral-content w-full sm:w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">上位3件の数字: {topNumbers.join(', ')}</h2>
              <p className="text-xs sm:text-sm">
                注意:
                これは最新24回分のデータに基づく結果です。5回以上出現した数字は除外されています。
              </p>
            </div>
          </div>
          <div className="card bg-neutral text-neutral-content w-full sm:w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                前回の当選番号は、1つまたは2つの数字が前回の当選番号と同じ場合があります。
              </h2>
              <p className="text-xs sm:text-sm"></p>
            </div>
          </div>
          <div className="card bg-neutral text-neutral-content w-full sm:w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">前回の当選番号から下一桁が同じとなる数字を選ぶ</h2>
              <p className="text-xs sm:text-sm">
                例: 前回の当選番号が 1, 5, 10, 15, 28, 25, ボーナス 30 の場合、
                <br />
                <span className="text-center font-bold">
                  下一桁が同じとなる数字は 1, 11, 21, 31、5、15、25、35、8、18、38...
                  のようになります。
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
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
