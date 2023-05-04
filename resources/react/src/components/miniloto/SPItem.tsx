import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import { format } from 'date-fns';

const SPItem = ({ miniLoto }: { miniLoto: MiniLotoTypes }) => {
  const addZero = (val: number) => {
    if (val < 10) {
      val = '0' + val;
    }
    return val;
  };

  return (
    <div className={'flex flex-row justify-stretch sp-item'}>
      <div className={'mr-0.5 w-14 text-justify'}>{miniLoto.times}回</div>
      <div className={'mr-0.5 w-24 text-justify'}>
        {format(new Date(miniLoto.event_date), 'yyyy/MM/dd')}
      </div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(miniLoto.per_number_1)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(miniLoto.per_number_2)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(miniLoto.per_number_3)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(miniLoto.per_number_4)}</div>
      <div className={'mr-0.5 w-5 text-justify per_number'}>{addZero(miniLoto.per_number_5)}</div>
      <div className={'mr-0.5 w-5 text-justify bonus_number'}>
        {addZero(miniLoto.bonus_number_1)}
      </div>
    </div>
  );
};

export default SPItem;
