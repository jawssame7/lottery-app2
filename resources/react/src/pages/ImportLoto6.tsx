import { useForm } from '@inertiajs/inertia-react';
import { useState } from 'react';

const ImportLoto6 = (res) => {
  // console.log(res);

  const { data, setData, post, progress, errors } = useForm({
    category: 'loto6',
    csvFile: null,
  });

  const onChangeFile = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      // console.log(files[0]);
      setData('csvFile', files[0]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    post('/admin-import');
  };

  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <h1 className={'text-2xl font-bold'}>Loto6</h1>
        <div>
          <input
            type={'file'}
            className={'file-input file-input-bordered file-input-info w-full max-w-xs'}
            accept={'text/csv'}
            onChange={onChangeFile}
          />
        </div>
        <div className={'mt-1'}>
          <button className={'btn btn-info'} disabled={progress} onClick={onSubmit}>
            インポート
          </button>
        </div>
      </div>
    </>
  );
};

export default ImportLoto6;
