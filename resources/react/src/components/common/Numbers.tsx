export const Numbers = ({
  perNums,
  bonusNums,
  maxNum,
}: {
  perNums: number[];
  bonusNums: number[];
  maxNum: number;
}) => {
  const targetNums = [];
  for (let i = 0; i < maxNum; i++) {
    targetNums.push(i + 1);
  }

  const numberCls = (target: number, perNums: number[], bonusNums: number[]) => {
    let cls: string = perNums.includes(target) ? 'number per_number' : 'number';
    cls = bonusNums.includes(target) ? cls + ' bonus_number' : cls;
    return cls;
  };

  return (
    <div className={'flex justify-between numbers'}>
      {targetNums.map((num: number) => (
        <div key={num} className={numberCls(num, perNums, bonusNums)}>
          {num < 10 ? '0' + num : '' + num}
        </div>
      ))}
    </div>
  );
};
