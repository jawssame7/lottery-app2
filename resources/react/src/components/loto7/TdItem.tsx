import { Loto7Types } from '../../types/Loto7Types';
import { Numbers } from '../common/Numbers';
import { format } from 'date-fns';

const TdItem = ({ loto7 }: { loto7: Loto7Types }) => {
  return (
    <>
      <td>{loto7.times}</td>
      <td>{format(new Date(loto7.event_date), 'yyyy/MM/dd')}</td>
      <td>
        <Numbers
          perNums={[
            loto7.per_number_1,
            loto7.per_number_2,
            loto7.per_number_3,
            loto7.per_number_4,
            loto7.per_number_5,
            loto7.per_number_6,
            loto7.per_number_7,
          ]}
          bonusNums={[loto7.bonus_number_1, loto7.bonus_number_2]}
          maxNum={37}
        />
      </td>
    </>
  );
};

export default TdItem;
