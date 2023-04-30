import { Loto6Types } from '../../types/Loto6Types';
import TdItem from './TdItem';

export const List = ({ loto6List }: { loto6List: Loto6Types[] }) => {
  return (
    <div className={'overflow-x-auto'}>
      <table className={'table w-full'}>
        <thead>
          <tr>
            <th>開催回</th>
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
  );
};
