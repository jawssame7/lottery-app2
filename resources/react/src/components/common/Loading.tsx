import { useState } from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={'flex justify-center items-center h-screen'}>
      <div>
        <ReactLoading type={'spokes'} height={'100px'} width={'100px'} className={'mx-auto'} />
        <p className={'text-center mt-3'}>{'Loading...'}</p>
      </div>
    </div>
  );
};

export default Loading;
