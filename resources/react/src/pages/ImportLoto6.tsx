import { useForm } from '@inertiajs/inertia-react';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

const ImportLoto6 = () => {
  const { data, setData, post, progress, errors } = useForm({
    category: 'loto6',
    csvFile: null,
  });

  const onDrop = useCallback((acceptedFiles: any, fileRejections: any) => {
    //console.log(acceptedFiles, fileRejections);
    setData('csvFile', acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { 'text/csv': [] },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post('/admin-import');
  };

  return (
    <>
      <div className={'flex flex-col flex-1 px-3'}>
        <h1 className={'text-2xl font-bold'}>Loto6</h1>
        <div>
          <div className={'py-6 mx-auto max-w-screen-xl'}>
            <div className={'max-w-7xl mx-auto'}>
              <div
                {...getRootProps({
                  className:
                    'dropzone p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg outline-dashed outline-blue-500/50 text-gray-900',
                })}
              >
                <input {...getInputProps()} />
                <p>ドラッグアンドドロップするかクリックしてファイルを選択してください</p>
              </div>
              <div className={'p-6'}>
                <div>{data.csvFile?.path}</div>
              </div>
            </div>
            <label className={'input-group'}>
              <span
                className={'error-msg'}
                style={{ color: 'red', backgroundColor: 'transparent' }}
              >
                {errors.csvFile}
              </span>
            </label>
          </div>
        </div>
        <div className={'mt-1'}>
          <button className={'btn btn-info'} disabled={progress} onClick={onSubmit}>
            インポート
          </button>
          <label className={'input-group'}>
            <span className={'error-msg'} style={{ color: 'red', backgroundColor: 'transparent' }}>
              {errors.error}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ImportLoto6;
