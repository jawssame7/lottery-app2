import { Loto6Types } from '../../types/Loto6Types';
import { Numbers } from '../common/Numbers';
import { format } from 'date-fns';

const TdItem = ({ loto6 }: { loto6: Loto6Types }) => {
  return (
    <>
      <td>{loto6.times}</td>
      <td>{format(new Date(loto6.event_date), 'yyyy/MM/dd')}</td>
      <td>
        <Numbers
          perNums={[
            loto6.per_number_1,
            loto6.per_number_2,
            loto6.per_number_3,
            loto6.per_number_4,
            loto6.per_number_5,
            loto6.per_number_6,
          ]}
          bonusNums={[loto6.bonus_number_1]}
          maxNum={43}
        />
      </td>
    </>
  );
};

export default TdItem;
