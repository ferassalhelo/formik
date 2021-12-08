import { useState } from "react";
import { Formik } from "formik";
import { initialValues } from "../../helpers/outputValues";
import TheForm from "./form";
import { validations } from "../../helpers/validation";

export default function Forms(Props) {
  let [data] = useState(initialValues());

  let handleValus = Valus => {
    let newItem = { ...Valus, id: Math.random() };
    Props.addData(newItem);
  };

  return (
    <div>
      <Formik
        initialValues={data}
        onSubmit={Valus => handleValus(Valus)}
        validationSchema={validations()}
      >
        <TheForm />
      </Formik>
    </div>
  );
}
