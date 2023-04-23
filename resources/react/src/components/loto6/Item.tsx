import { Loto6 } from "../../types/Loto6";
import { format } from "date-fns";
import { Numbers } from "../common/Numbers";

export const Item = ({ loto6 }: { loto6: Loto6 }) => {
    return (
        <>
            <div className={"event-info"}>
                開催回:{loto6.times} 開催日:
                {format(new Date(loto6.event_date), "yyyy/MM/dd")}
            </div>
            <Numbers
                perNums={[
                    loto6.per_number_1,
                    loto6.per_number_2,
                    loto6.per_number_3,
                    loto6.per_number_4,
                    loto6.per_number_5,
                    loto6.per_number_6,
                ]}
                bonusNums={[loto6.bonus_number_1]}
                maxNum={43}
            />
        </>
    );
};
