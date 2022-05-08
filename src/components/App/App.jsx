import Form from '../Form/From';

const App = () => {
  return (
    <>
      <Form onSubmit={value => console.log(value)} />
    </>
  );
};

export default App;
