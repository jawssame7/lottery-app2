import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import { Numbers } from '../common/Numbers';
import { format } from 'date-fns';

const TdItem = ({ miniloto }: { miniloto: MiniLotoTypes }) => {
  return (
    <>
      <td>{miniloto.times}</td>
      <td>{format(new Date(miniloto.event_date), 'yyyy/MM/dd')}</td>
      <td>
        <Numbers
          perNums={[
            miniloto.per_number_1,
            miniloto.per_number_2,
            miniloto.per_number_3,
            miniloto.per_number_4,
            miniloto.per_number_5,
          ]}
          bonusNums={[miniloto.bonus_number_1]}
          maxNum={31}
        />
      </td>
    </>
  );
};

export default TdItem;
