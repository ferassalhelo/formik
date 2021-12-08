import * as Yup from "yup";
import { arrayValuesOfSchema } from "./outputValues";

// of create schima
let validations = () => {
  let values = [...arrayValuesOfSchema()];
  let obj = {};

  values.map(item => {
    return (obj[item[0]] = Yup.string().required(item[1]));
  });

  let schema = Yup.object().shape(obj);
  return schema;
};
export { validations };
