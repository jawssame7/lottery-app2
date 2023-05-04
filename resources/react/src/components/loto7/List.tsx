import TdItem from './TdItem';
import { Loto7Types } from '../../types/Loto7Types';
import SPItem from './SPItem';

export const List = ({ loto7List }: { loto7List: Loto7Types[] }) => {
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
            {loto7List.map((loto7: Loto7Types) => {
              return (
                <tr key={loto7.id}>
                  <TdItem loto7={loto7} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={'sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden mt-5'}>
        <div className={'border-base-300 border rounded-box'}>
          <div className={'p-3'}>
            {loto7List.map((loto7: Loto7Types) => {
              return <SPItem key={loto7.id} loto7={loto7} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
