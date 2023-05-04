import { Loto6Types } from '../../types/Loto6Types';
import { format } from 'date-fns';

const SPItem = ({ loto6 }: { loto6: Loto6Types }) => {
  const addZero = (val: number) => {
    if (val < 10) {
      val = '0' + val;
    }
    return val;
  };

  return (
    <div className={'flex flex-row justify-stretch sp-item'}>
      <div className={'mr-0.5 w-14 text-justify'}>{loto6.id}回</div>
      <div className={'mr-0.5 w-24 text-justify'}>
        {format(new Date(loto6.event_date), 'yyyy/MM/dd')}
      </div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(loto6.per_number_1)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(loto6.per_number_2)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(loto6.per_number_3)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(loto6.per_number_4)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(loto6.per_number_5)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(loto6.per_number_6)}</div>
      <div className={'mr-0.5 w-5 text-justify bonus_number'}>{addZero(loto6.bonus_number_1)}</div>
    </div>
  );
};

export default SPItem;
