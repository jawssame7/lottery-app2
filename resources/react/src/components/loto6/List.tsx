import React from 'react';
import { Loto6Types } from '../../types/Loto6Types';
import TdItem from './TdItem';
import SPItem from './SPItem';
import { useState, useEffect } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export const List = ({ loto6List }: { loto6List: Loto6Types[] }) => {
  const [reverseSort, setReverseSort] = useState(-1);
  const [topNumbers, setTopNumbers] = useState<number[]>([]);

  const onSort = () => {
    loto6List.reverse();
    if (reverseSort === -1) {
      setReverseSort(1);
    } else {
      setReverseSort(-1);
    }
  };

  useEffect(() => {
    const latest24 = loto6List.slice(-24);
    const numberCount: { [key: number]: number } = {};

    latest24.forEach((loto6) => {
      [
        loto6.per_number_1,
        loto6.per_number_2,
        loto6.per_number_3,
        loto6.per_number_4,
        loto6.per_number_5,
        loto6.per_number_6,
        loto6.bonus_number_1,
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
  }, [loto6List]);

  return (
    <>
      <div className={'mt-5'}>
        <div className={'flex flex-wrap justify-start gap-4'}>
          <div className="card bg-neutral text-neutral-content w-full sm:w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                4回当選した数字:
                <br />
                {topNumbers.join(', ')}
              </h2>
              <p className="text-xs sm:text-sm">
                注意:
                これは最新24回分のデータに基づく結果です。4回当選した数字をすべて表示しています。
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
            {loto6List.map((loto6: Loto6Types) => {
              return (
                <tr key={loto6.id}>
                  <TdItem loto6={loto6} />
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
            {loto6List.map((loto6: Loto6Types) => {
              return <SPItem key={loto6.id} loto6={loto6} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
