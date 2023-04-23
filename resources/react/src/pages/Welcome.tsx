import { Link } from '@inertiajs/inertia-react';

const Welcome = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-xl font-bold py-6">当選番号登録</h1>
            <Link href={'/create-loto6'} className="btn btn-primary mx-6">
              ロト6
            </Link>
            <Link href={'/create-miniLoto'} className="btn btn-primary mx-6">
              ミニロト
            </Link>
            <Link href={'/create-loto7'} className="btn btn-primary mx-6">
              ロト7
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
