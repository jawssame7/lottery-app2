import { Loto7 } from '../../types/Loto7';
import { format } from 'date-fns';
import { Numbers } from '../common/Numbers';

export const Item = ({ loto7 }: { loto7: Loto7 }) => {
  return (
    <>
      <div className={'event-info'}>
        開催回:{loto7.times} 開催日:
        {format(new Date(loto7.event_date), 'yyyy/MM/dd')}
      </div>
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
    </>
  );
};
