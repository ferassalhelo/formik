import { inputs } from "../component/formik/inputs";

// of initial values of formik
let initialValues = () => {
  let values = {};

  let arr = [...inputs];
  arr.forEach(item =>
    item.name !== undefined ? (values = { ...values, [item.name]: "" }) : null
  );

  return values;
};

// of output array contains name field and error massige of scnima
let arrayValuesOfSchema = () => {
  let values = [],
    arr = [...inputs];

  arr.forEach(item =>
    item.name !== undefined
      ? (values = [...values, [item.name, item.errorMassige]])
      : null
  );

  return values;
};

export { initialValues, arrayValuesOfSchema };
