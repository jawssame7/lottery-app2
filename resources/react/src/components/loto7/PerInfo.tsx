import { Loto7Types } from '../../types/Loto7Types';
import { getNotHitList } from '../../functions/Functions';

const PerInfo = ({ lotoList, maxNum = 37 }: { lotoList: Loto7Types[]; maxNum: number }) => {
  const tmpPrev10List = lotoList.filter((loto, index) => {
    return index < 10;
  });

  const tmpPrev5List = lotoList.filter((loto, index) => {
    return index < 5;
  });

  const prev10PerNumber1List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_1;
  });

  const prev10PerNumber2List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_2;
  });

  const prev10PerNumber3List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_3;
  });

  const prev10PerNumber4List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_4;
  });

  const prev10PerNumber5List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_5;
  });

  const prev10PerNumber6List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_6;
  });

  const prev10PerNumber7List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_7;
  });

  const prev10BonusNumber1List = tmpPrev10List.flatMap((loto) => {
    return loto.bonus_number_1;
  });

  const prev10BonusNumber2List = tmpPrev10List.flatMap((loto) => {
    return loto.bonus_number_2;
  });

  const prev5PerNumber1List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_1;
  });

  const prev5PerNumber2List = tmpPrev5List.flatMap((loto) => {
    return loto.per_number_2;
  });

  const prev5PerNumber3List = tmpPrev5List.flatMap((loto) => {
    return loto.per_number_3;
  });

  const prev5PerNumber4List = tmpPrev5List.flatMap((loto) => {
    return loto.per_number_4;
  });

  const prev5PerNumber5List = tmpPrev5List.flatMap((loto) => {
    return loto.per_number_5;
  });

  const prev5PerNumber6List = tmpPrev5List.flatMap((loto) => {
    return loto.per_number_6;
  });

  const prev5PerNumber7List = tmpPrev10List.flatMap((loto) => {
    return loto.per_number_7;
  });

  const prev5BonusNumber1List = tmpPrev10List.flatMap((loto) => {
    return loto.bonus_number_1;
  });

  const prev5BonusNumber2List = tmpPrev10List.flatMap((loto) => {
    return loto.bonus_number_2;
  });

  // 過去10回あたりのない数字(ボーナス数字含む)
  const prev10NotHitInBonusList: number[] = getNotHitList(
    maxNum,
    prev10PerNumber1List,
    prev10PerNumber2List,
    prev10PerNumber3List,
    prev10PerNumber4List,
    prev10PerNumber5List,
    prev10PerNumber6List,
    prev10PerNumber7List,
    prev10BonusNumber1List,
    prev10BonusNumber2List
  );
  // 過去5回あたりのない数字(ボーナス数字含む)
  const prev5NotHitInBonusList: number[] = getNotHitList(
    maxNum,
    prev5PerNumber1List,
    prev5PerNumber2List,
    prev5PerNumber3List,
    prev5PerNumber4List,
    prev5PerNumber5List,
    prev5PerNumber6List,
    prev5PerNumber7List,
    prev5BonusNumber1List,
    prev5BonusNumber2List
  );

  // 過去10回あたりのない数字
  const prev10NotHitList: number[] = getNotHitList(
    maxNum,
    prev10PerNumber1List,
    prev10PerNumber2List,
    prev10PerNumber3List,
    prev10PerNumber4List,
    prev10PerNumber5List,
    prev10PerNumber6List,
    prev10PerNumber7List
  );
  // 過去5回あたりのない数字
  const prev5NotHitList: number[] = getNotHitList(
    maxNum,
    prev5PerNumber1List,
    prev5PerNumber2List,
    prev5PerNumber3List,
    prev5PerNumber4List,
    prev5PerNumber5List,
    prev5PerNumber6List,
    prev5PerNumber7List
  );

  console.log(prev10NotHitInBonusList);
  console.log(prev5NotHitInBonusList);
  console.log(prev10NotHitList);
  console.log(prev5NotHitList);

  // 過去10回あたりのない数字 表示用
  const prev10NotHitInBonusMap = prev10NotHitInBonusList.map((num) => {
    return (
      <span style={{ paddingRight: '5px' }} key={num}>
        {num}
      </span>
    );
  });
  // 過去5回あたりのない数字 表示用
  const prev5NotHitInBonusMap = prev5NotHitInBonusList.map((num) => {
    return (
      <span style={{ paddingRight: '5px' }} key={num}>
        {num}
      </span>
    );
  });

  // 過去10回あたりのない数字 表示用
  const prev10NotHitMap = prev10NotHitList.map((num) => {
    return (
      <span style={{ paddingRight: '5px' }} key={num}>
        {num}
      </span>
    );
  });
  // 過去5回あたりのない数字 表示用
  const prev5NotHitMap = prev5NotHitList.map((num) => {
    return (
      <span style={{ paddingRight: '5px' }} key={num}>
        {num}
      </span>
    );
  });

  const prev10NotHitInBonusDivTitle = '過去10回でていない数字(ボーナス数字含む)：';

  const prev5NotHitInBonusDivTitle = '過去5回でていない数字(ボーナス数字含む)：';

  const prev10NotHitDivTitle = '過去10回でていない数字(ボーナス数字含まない)：';

  const prev5NotHitDivTitle = '過去5回でていない数字(ボーナス数字含まない)：';

  return (
    <>
      <div
        tabIndex={0}
        className={
          'collapse collapse-arrow w-full border-base-300 border rounded-box p-3 mt-2.5 per-info block sm:block md:block lg:block xl:block 2xl:block'
        }
      >
        <div className={'collapse-title text-base font-medium'}>過去にあまり出ていない数字</div>
        <div className={'collapse-content'}>
          <div className={'md:flex lg:flex xl:flex 2xl:flex justify-between entry break-all '}>
            <div className={'break-all text-xs sm:text-base'}>{prev10NotHitInBonusDivTitle}</div>
            <div className={'break-all text-sm sm:text-base'}>{prev10NotHitInBonusMap}</div>
          </div>
          <div className={'md:flex lg:flex xl:flex 2xl:flex  justify-between entry'}>
            <div className={'break-all text-xs sm:text-base'}>{prev5NotHitInBonusDivTitle}</div>
            <div className={'break-all text-sm sm:text-base'}>{prev5NotHitInBonusMap}</div>
          </div>
          <div className={'md:flex lg:flex xl:flex 2xl:flex  justify-between entry'}>
            <div className={'break-all text-xs sm:text-base'}>{prev10NotHitDivTitle}</div>
            <div className={'break-all text-sm sm:text-base'}>{prev10NotHitMap}</div>
          </div>
          <div className={'md:flex lg:flex xl:flex 2xl:flex  justify-between entry'}>
            <div className={'break-all text-xs sm:text-base'}>{prev5NotHitDivTitle}</div>
            <div className={'break-all text-sm sm:text-base'}>{prev5NotHitMap}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerInfo;
