/**
 * maxNum内の番号で番号一覧にない番号を取得
 * @param maxNum
 * @param perNumList
 */
export const getNotHitList = (maxNum: number, ...perNumList: Array<number[]>) => {
  // 集約関数
  const lestArr = (...arr: Array<Array<number>>) => {
    return arr;
  };

  let arr: Array<number> = [];

  lestArr(...perNumList).forEach((letArr) => {
    arr = arr.concat(letArr);
  });

  // 重複を削除
  let set: Set<number> = new Set(arr);
  const uniqNumList = [...set];

  let notHitList: Array<number> = [];
  // console.log(uniqNumList.sort((a, b) => a - b));
  for (let i = 0; i < maxNum; i++) {
    let num = i + 1;
    if (uniqNumList.length > 0 && !uniqNumList.includes(num)) {
      notHitList.push(num);
    }
  }

  // 重複を削除
  set = new Set(notHitList);
  notHitList = [...set];

  return notHitList;
};
