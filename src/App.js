import LoginFormik from "./components/LoginFormik";
import LoginReactHookForm from "./components/LoginReactHookForm";

function App() {
  // Using Formik
  // return (
  //   <main>
  //     <section>
  //       <LoginFormik />
  //     </section>
  //   </main>
  // );

  // Using ReactHookForm
  return (
    <main>
      <section>
        <LoginReactHookForm />
      </section>
    </main>
  );
}

export default App;
