import { useForm } from '@inertiajs/inertia-react';
// import DatePicker, { registerLocale } from 'react-datepicker';
// import ja from 'date-fns/locale/ja';
import Datepicker from 'react-tailwindcss-datepicker';

const getCls = (id, type) => {
  let cls: string = '';

  switch (type) {
    case 'loto6':
      if (id === 'per_number_6') {
        cls = 'rounded-r';
      }
      if (id === 'per_number_7') {
        cls = 'hidden';
      }
      if (id === 'bonus_number_1') {
        cls = 'rounded-r';
      }
      if (id === 'bonus_number_2') {
        cls = 'hidden';
      }
      if (id === 'win-unit-prize-6') {
        cls = 'hidden';
      }

      break;
    case 'loto7':
      break;
    case 'miniLoto':
      if (id === 'per_number_7' || id === 'per_number_6') {
        cls = 'hidden';
      }
      if (id === 'bonus_number_2') {
        cls = 'hidden';
      }
      if (id === 'win-unit-prize-6' || id === 'win-unit-prize-5') {
        cls = 'hidden';
      }
      if (id === 'carry_over') {
        cls = 'hidden';
      }
      break;
    default:
      break;
  }
  return cls;
};

const trim = (value: string) => {
  return value.replace(/[^0-9]/g, '');
};

const Form = ({ type = 'loto6' }, { type: string }) => {
  let title: string = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  const { data, setData, post, processing, errors } = useForm({
    times: '',
    event_date: new Date(),
    per_number_1: '',
    per_number_2: '',
    per_number_3: '',
    per_number_4: '',
    per_number_5: '',
    per_number_6: '',
    per_number_7: '',
    bonus_number_1: '',
    bonus_number_2: '',
    win_units_1: '',
    prize_1: '',
    win_units_2: '',
    prize_2: '',
    win_units_3: '',
    prize_3: '',
    win_units_4: '',
    prize_4: '',
    win_units_5: '',
    prize_5: '',
    win_units_6: '',
    prize_6: '',
    win_units_7: '',
    prize_7: '',
    carry_over: '',
  });

  // const { errors } = usePage().props

  // registerLocale(ja);

  const submit = (e) => {
    e.preventDefault();
    switch (type) {
      case 'loto6':
        post('/loto6/store');
        break;
      case 'loto7':
        post('/loto7/store');
        break;
      case 'miniLoto':
        post('/miniloto/store');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <h1 className={'text-2xl font-bold'}>{title}</h1>
        <div className={'border-base-300 border rounded-box p-3 mt-2.5'}>
          <form className="w-full max-w-lg">
            <div className="flex flex-row w-full mx-3 mb-6">
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">開催回</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>開催回</span>
                    <input
                      type="text"
                      id={'times'}
                      placeholder="開催回"
                      className="input input-bordered"
                      value={data.times}
                      onChange={(e) => setData('times', trim(e.target.value))}
                    />
                    <span>回</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.times}</span>
                  </label>
                </div>
              </div>
              <div className={'basis-1/2 ml-4'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">抽選日</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>抽選日</span>
                    <Datepicker
                      // showIcon
                      primaryColor={'fuchsia'}
                      asSingle={true}
                      useRange={false}
                      inputClassName="input input-bordered datefield"
                      displayFormat="YYYY/MM/DD"
                      selected={data['event_date']}
                      id={'event_date'}
                      value={data.event_date}
                      onChange={({ startDate }) => {
                        setData('event_date', startDate);
                      }}
                    />
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.event_date}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full mx-3 mb-6">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">本数字</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>本数字</span>
                    <input
                      type="text"
                      id={'per_number_1'}
                      placeholder="本数字 1"
                      className="input input-bordered per-number"
                      value={data.per_number_1}
                      onChange={(e) => setData('per_number_1', trim(e.target.value))}
                    />
                    <input
                      type="text"
                      id={'per_number_2'}
                      placeholder="本数字 2"
                      className="input input-bordered per-number"
                      value={data.per_number_2}
                      onChange={(e) => setData('per_number_2', trim(e.target.value))}
                    />
                    <input
                      type="text"
                      id={'per_number_3'}
                      placeholder="本数字 3"
                      className="input input-bordered per-number"
                      value={data.per_number_3}
                      onChange={(e) => setData('per_number_3', trim(e.target.value))}
                    />
                    <input
                      type="text"
                      id={'per_number_4'}
                      placeholder="本数字 4"
                      className="input input-bordered per-number"
                      value={data.per_number_4}
                      onChange={(e) => setData('per_number_4', trim(e.target.value))}
                    />
                    <input
                      type="text"
                      id={'per_number_5'}
                      placeholder="本数字 5"
                      className="input input-bordered per-number"
                      value={data.per_number_5}
                      onChange={(e) => setData('per_number_5', trim(e.target.value))}
                    />
                    <input
                      type="text"
                      id={'per_number_6'}
                      placeholder="本数字 6"
                      className={'input input-bordered per-number ' + getCls('per_number_6', type)}
                      value={data.per_number_6}
                      onChange={(e) => setData('per_number_6', trim(e.target.value))}
                    />
                    <input
                      type="text"
                      id={'per_number_7'}
                      placeholder="本数字 7"
                      className={'input input-bordered per-number ' + getCls('per_number_7', type)}
                      value={data.per_number_7}
                      onChange={(e) => setData('per_number_7', trim(e.target.value))}
                    />
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>
                      {errors.per_number_1} {errors.per_number_2} {errors.per_number_3}{' '}
                      {errors.per_number_4} {errors.per_number_5} {errors.per_number_6}{' '}
                      {errors.per_number_7}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full mx-3 mb-6">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ボーナス数字</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>ボーナス数字</span>
                    <input
                      type="text"
                      id={'bonus_number_1'}
                      placeholder="ボーナス数字 1"
                      className={
                        'input input-bordered per-number ' + getCls('bonus_number_1', type)
                      }
                      value={data.bonus_number_1}
                      onChange={(e) => setData('bonus_number_1', trim(e.target.value))}
                    />
                    <input
                      type="text"
                      id={'bonus_number_2'}
                      placeholder="ボーナス数字 2"
                      className={
                        'input input-bordered per-number ' + getCls('bonus_number_2', type)
                      }
                      value={data.bonus_number_2}
                      onChange={(e) => setData('bonus_number_2', trim(e.target.value))}
                    />
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.bonus_number_1}</span>
                    <span className={'error-msg'}>{errors.bonus_number_2}</span>
                  </label>
                </div>
              </div>
            </div>
            <div id={'win-unit-prize-1'} className="flex flex-row w-full mx-3 mb-6">
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">1等</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>1等</span>
                    <input
                      type="text"
                      id={'win_units_1'}
                      placeholder="口数"
                      className="input input-bordered win-unit"
                      value={data.win_units_1}
                      onChange={(e) => setData('win_units_1', trim(e.target.value))}
                    />
                    <span>口</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.win_units_1}</span>
                  </label>
                </div>
              </div>
              <div className={'basis-1/2 ml-4'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">&nbsp;</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      id={'prize_1'}
                      placeholder="当選額"
                      className="input input-bordered"
                      value={data.prize_1}
                      onChange={(e) => setData('prize_1', trim(e.target.value))}
                    />
                    <span>円</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.prize_1}</span>
                  </label>
                </div>
              </div>
            </div>
            <div id={'win-unit-prize-2'} className="flex flex-row w-full mx-3 mb-6">
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">2等</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>2等</span>
                    <input
                      type="text"
                      id={'win_units_2'}
                      placeholder="口数"
                      className="input input-bordered win-unit"
                      value={data.win_units_2}
                      onChange={(e) => setData('win_units_2', trim(e.target.value))}
                    />
                    <span>口</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.win_units_2}</span>
                  </label>
                </div>
              </div>
              <div className={'basis-1/2 ml-4'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">&nbsp;</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      id={'prize_2'}
                      placeholder="当選額"
                      className="input input-bordered"
                      value={data.prize_2}
                      onChange={(e) => setData('prize_2', trim(e.target.value))}
                    />
                    <span>円</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.prize_2}</span>
                  </label>
                </div>
              </div>
            </div>
            <div id={'win-unit-prize-3'} className="flex flex-row w-full mx-3 mb-6">
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">3等</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>3等</span>
                    <input
                      type="text"
                      id={'win_units_3'}
                      placeholder="口数"
                      className="input input-bordered win-unit"
                      value={data.win_units_3}
                      onChange={(e) => setData('win_units_3', trim(e.target.value))}
                    />
                    <span>口</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.win_units_3}</span>
                  </label>
                </div>
              </div>
              <div className={'basis-1/2 ml-4'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">&nbsp;</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      id={'prize_3'}
                      placeholder="当選額"
                      className="input input-bordered"
                      value={data.prize_3}
                      onChange={(e) => setData('prize_3', trim(e.target.value))}
                    />
                    <span>円</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.prize_3}</span>
                  </label>
                </div>
              </div>
            </div>
            <div id={'win-unit-prize-4'} className="flex flex-row w-full mx-3 mb-6">
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">4等</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>4等</span>
                    <input
                      type="text"
                      id={'win_units_4'}
                      placeholder="口数"
                      className="input input-bordered win-unit"
                      value={data.win_units_4}
                      onChange={(e) => setData('win_units_4', trim(e.target.value))}
                    />
                    <span>口</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.win_units_4}</span>
                  </label>
                </div>
              </div>
              <div className={'basis-1/2 ml-4'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">&nbsp;</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      id={'prize_4'}
                      placeholder="当選額"
                      className="input input-bordered"
                      value={data.prize_4}
                      onChange={(e) => setData('prize_4', trim(e.target.value))}
                    />
                    <span>円</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.prize_4}</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              id={'win-unit-prize-5'}
              className={'flex flex-row w-full mx-3 mb-6 ' + getCls('win-unit-prize-5', type)}
            >
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">5等</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>5等</span>
                    <input
                      type="text"
                      id={'win_units_5'}
                      placeholder="口数"
                      className="input input-bordered win-unit"
                      value={data.win_units_5}
                      onChange={(e) => setData('win_units_5', trim(e.target.value))}
                    />
                    <span>口</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.win_units_5}</span>
                  </label>
                </div>
              </div>
              <div className={'basis-1/2 ml-4'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">&nbsp;</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      id={'prize_5'}
                      placeholder="当選額"
                      className="input input-bordered"
                      value={data.prize_5}
                      onChange={(e) => setData('prize_5', trim(e.target.value))}
                    />
                    <span>円</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.prize_5}</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              id={'win-unit-prize-6'}
              className={'flex flex-row w-full mx-3 mb-6 ' + getCls('win-unit-prize-6', type)}
            >
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">6等</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label'}>6等</span>
                    <input
                      type="text"
                      id={'win_units_6'}
                      placeholder="口数"
                      className="input input-bordered win-unit"
                      value={data.win_units_6}
                      onChange={(e) => setData('win_units_6', trim(e.target.value))}
                    />
                    <span>口</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.win_units_6}</span>
                  </label>
                </div>
              </div>
              <div className={'basis-1/2 ml-4'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">&nbsp;</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      id={'prize_6'}
                      placeholder="当選額"
                      className="input input-bordered"
                      value={data.prize_6}
                      onChange={(e) => setData('prize_6', trim(e.target.value))}
                    />
                    <span>円</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.prize_6}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={'flex flex-row w-full mx-3 mb-6 ' + getCls('carry_over', type)}>
              <div className={'basis-1/2'}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">キャリーオーバー</span>
                  </label>
                  <label className="input-group">
                    <span className={'input-label carry_over'}>キャリーオーバー</span>
                    <input
                      type="text"
                      id={'carry_over'}
                      placeholder="キャリーオーバー額"
                      className="input input-bordered"
                      value={data.carry_over}
                      onChange={(e) => setData('carry_over', trim(e.target.value))}
                    />
                    <span>円</span>
                  </label>
                  <label className="input-group">
                    <span className={'error-msg'}>{errors.carry_over}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={'flex flex-row w-full mx-3 mb-6 buttons'}>
              <button className={'btn btn-primary'} disabled={processing} onClick={submit}>
                作成
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
