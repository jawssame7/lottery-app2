import Form from '../components/common/Form';

const CreateMiniLoto = (res) => {
  return (
    <>
      <Form type={'miniLoto'} times={res.times} />
    </>
  );
};

export default CreateMiniLoto;
