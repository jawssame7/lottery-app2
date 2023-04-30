import Form from '../components/common/Form';

const CreateLoto7 = (res) => {
  return (
    <>
      <Form type={'loto7'} times={res.times} />
    </>
  );
};

export default CreateLoto7;
