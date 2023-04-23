import List from '../components/miniloto/List';
import PerInfo from '../components/miniloto/PerInfo';

const MiniLoto = ({ minilotoResults }) => {
  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <h1 className={'text-2xl font-bold'}>Mini Loto</h1>
        <PerInfo minilotoList={minilotoResults} maxNum={31} />
        <h3 className={'text-base font-medium mt-2.5'}>最新が一番上</h3>
        <List minilotoList={minilotoResults}></List>
      </div>
    </>
  );
};

export default MiniLoto;
