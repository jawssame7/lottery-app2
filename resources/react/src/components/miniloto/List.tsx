import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import TdItem from './TdItem';

const List = ({ minilotoList }: { minilotoList: MiniLotoTypes[] }) => {
  return (
    <>
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
    </>
  );
};

export default List;
