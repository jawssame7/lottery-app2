import { Link, useForm } from '@inertiajs/inertia-react';

const AdminLogin = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });
  const login = (e) => {
    e.preventDefault();
    post('/admin-login');
  };

  const logout = (e) => {
    e.preventDefault();
    post('/admin-logout');
  };

  return (
    <>
      <div className={'relative flex flex-col items-center justify-center overflow-hidden'}>
        <div className={'w-full p-6 bg-white rounded-md border-top lg:max-w-lg'}>
          <h1 className={'text-3xl font-semibold text-center text-gray-700'}>管理ログイン</h1>
          <form className={'space-y-4'}>
            <div>
              <label className={'label'}>
                <span className={'text-base label-text'}>Email</span>
              </label>
              <input
                type={'text'}
                name={'email'}
                id={'email'}
                placeholder={'Email Address'}
                className={'w-full input input-bordered'}
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
              />
              <label className={'input-group'}>
                <span
                  className={'error-msg'}
                  style={{ color: 'red', backgroundColor: 'transparent' }}
                >
                  {errors.email}
                </span>
              </label>
            </div>
            <div>
              <label className={'label'}>
                <span className={'text-base label-text'}>Password</span>
              </label>
              <input
                type={'password'}
                name={'password'}
                id={'password'}
                placeholder={'Enter Password'}
                className={'w-full input input-bordered'}
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
              />
              <label className="input-group">
                <span
                  className={'error-msg'}
                  style={{ color: 'red', backgroundColor: 'transparent' }}
                >
                  {errors.password}
                </span>
              </label>
            </div>
            <div>
              <button className={'btn btn-primary btn-wide'} onClick={login}>
                管理ログイン
              </button>
            </div>
            <div>
              <button className={'btn btn-accent btn-wide'} onClick={logout}>
                管理ログアウト
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
