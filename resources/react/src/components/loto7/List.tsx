import TdItem from './TdItem';
import { Loto7Types } from '../../types/Loto7Types';

export const List = ({ loto7List }: { loto7List: Loto7Types[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
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
  );
};

export default List;
