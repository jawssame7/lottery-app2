import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import { format } from 'date-fns';
import { Numbers } from '../common/Numbers';

export const Item = ({ miniloto }: { miniloto: MiniLotoTypes }) => {
  return (
    <>
      <div className={'event-info'}>
        開催回:{miniloto.times} 開催日:
        {format(new Date(miniloto.event_date), 'yyyy/MM/dd')}
      </div>
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
    </>
  );
};
