import List from '../components/loto7/List';
import PerInfo from '../components/loto7/PerInfo';

const Loto7 = ({ loto7Results }) => {
  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <h1 className={'text-2xl font-bold'}>Loto 7</h1>
        <PerInfo lotoList={loto7Results} maxNum={37} />
        <h3 className={'text-base font-medium mt-2.5'}>最新が一番上</h3>
        <List loto7List={loto7Results}></List>
      </div>
    </>
  );
};

export default Loto7;
