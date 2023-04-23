import { List } from '../components/loto6/List';
import Perinfo from '../components/loto6/PerInfo';

const Loto6 = ({ loto6Results }) => {
  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <h1 className={'text-2xl font-bold'}>Loto 6</h1>
        <Perinfo lotoList={loto6Results} maxNum={43} />
        <h3 className={'text-base font-medium mt-2.5'}>最新が一番上</h3>
        <List loto6List={loto6Results}></List>
      </div>
    </>
  );
};

export default Loto6;
