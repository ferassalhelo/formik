import { useState } from "react";
import Forms from "./component/formik/Formik";
import Lists from "./component/lists";

export default function App() {
  let [data, handleData] = useState([]);

  let addlist = list => {
    return handleData([...data, list]);
  };

  let deleateItem = id => {
    let arr = [...data];
    return handleData(
      arr.filter(item => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <Lists data={data} deleateItem={deleateItem} />
      <Forms addData={addlist} />
    </div>
  );
}
