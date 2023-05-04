import Form from '../components/common/Form';

const CreateLoto = (res) => {
  // console.log(res);
  return (
    <>
      <Form type={'loto6'} times={res.times} />
    </>
  );
};

export default CreateLoto;
