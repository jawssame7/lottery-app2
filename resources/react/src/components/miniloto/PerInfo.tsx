import { MiniLotoTypes } from '../../types/MiniLotoTypes';
import { getNotHitList } from '../../functions/Functions';

const PerInfo = ({
  minilotoList,
  maxNum = 31,
}: {
  minilotoList: MiniLotoTypes[];
  maxNum: number;
}) => {
  const tmpPrev10List = minilotoList.filter((miniLoto, index) => {
    return index < 10;
  });

  const tmpPrev5List = minilotoList.filter((miniLoto, index) => {
    return index < 5;
  });

  const prev10PerNumber1List = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.per_number_1;
  });

  const prev10PerNumber2List = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.per_number_2;
  });

  const prev10PerNumber3List = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.per_number_3;
  });

  const prev10PerNumber4List = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.per_number_4;
  });

  const prev10PerNumber5List = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.per_number_5;
  });

  const prev10BonusNumberList = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.bonus_number_1;
  });

  const prev5PerNumber1List = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.per_number_1;
  });

  const prev5PerNumber2List = tmpPrev5List.flatMap((miniLoto) => {
    return miniLoto.per_number_2;
  });

  const prev5PerNumber3List = tmpPrev5List.flatMap((miniLoto) => {
    return miniLoto.per_number_3;
  });

  const prev5PerNumber4List = tmpPrev5List.flatMap((miniLoto) => {
    return miniLoto.per_number_4;
  });

  const prev5PerNumber5List = tmpPrev5List.flatMap((miniLoto) => {
    return miniLoto.per_number_5;
  });

  const prev5BonusNumberList = tmpPrev10List.flatMap((miniLoto) => {
    return miniLoto.bonus_number_1;
  });

  // 過去10回あたりのない数字(ボーナス数字含む)
  const prev10NotHitInBonusList: number[] = getNotHitList(
    maxNum,
    prev10PerNumber1List,
    prev10PerNumber2List,
    prev10PerNumber3List,
    prev10PerNumber4List,
    prev10PerNumber5List,
    prev10BonusNumberList
  );
  // 過去5回あたりのない数字(ボーナス数字含む)
  const prev5NotHitInBonusList: number[] = getNotHitList(
    maxNum,
    prev5PerNumber1List,
    prev5PerNumber2List,
    prev5PerNumber3List,
    prev5PerNumber4List,
    prev5PerNumber5List,
    prev5BonusNumberList
  );

  // 過去10回あたりのない数字
  const prev10NotHitList: number[] = getNotHitList(
    maxNum,
    prev10PerNumber1List,
    prev10PerNumber2List,
    prev10PerNumber3List,
    prev10PerNumber4List,
    prev10PerNumber5List
  );
  // 過去5回あたりのない数字
  const prev5NotHitList: number[] = getNotHitList(
    maxNum,
    prev5PerNumber1List,
    prev5PerNumber2List,
    prev5PerNumber3List,
    prev5PerNumber4List,
    prev5PerNumber5List
  );

  // 過去10回あたりのない数字 表示用
  const prev10NotHitInBonusMap = prev10NotHitInBonusList.map((num) => (
    <span style={{ paddingRight: '5px' }} key={num}>
      {num}
    </span>
  ));
  // 過去5回あたりのない数字 表示用
  const prev5NotHitInBonusMap = prev5NotHitInBonusList.map((num) => (
    <span style={{ paddingRight: '5px' }} key={num}>
      {num}
    </span>
  ));

  // 過去10回あたりのない数字 表示用
  const prev10NotHitMap = prev10NotHitList.map((num) => (
    <span style={{ paddingRight: '5px' }} key={num}>
      {num}
    </span>
  ));
  // 過去5回あたりのない数字 表示用
  const prev5NotHitMap = prev5NotHitList.map((num) => (
    <span style={{ paddingRight: '5px' }} key={num}>
      {num}
    </span>
  ));

  return (
    <div className={'border-base-300 border rounded-box p-3 mt-2.5 per-info'}>
      <div className={'flex justify-between entry'}>
        <div>過去10回でていない数字(ボーナス数字含む)：</div>
        <div>{prev10NotHitInBonusMap}</div>
      </div>
      <div className={'flex justify-between entry'}>
        <div>過去5回でていない数字(ボーナス数字含む)：</div>
        <div>{prev5NotHitInBonusMap}</div>
      </div>
      <div className={'flex justify-between entry'}>
        <div>過去10回でていない数字(ボーナス数字含まない)：</div>
        <div>{prev10NotHitMap}</div>
      </div>
      <div className={'flex justify-between entry'}>
        <div>過去5回でていない数字(ボーナス数字含まない)：</div>
        <div>{prev5NotHitMap}</div>
      </div>
    </div>
  );
};

export default PerInfo;
