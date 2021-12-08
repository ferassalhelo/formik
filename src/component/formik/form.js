import { Field, Form, ErrorMessage } from "formik";
import { inputs } from "./inputs";

import React from "react";

export default function TheForm() {
  let fields = [...inputs];

  let stylDiv = "my-2 px-1 h-auto";
  let textStyle = "text-xl font-bold w-full  ";
  let inputStyle =
    "h-12 w-full px-5 outline-none border-gray-300 rounded text-gray-600 border";

  return (
    <Form
      className="max-w-xl px-2 m-auto flex flex-wrap"
      style={{ flexDirection: "" }}
    >
      {fields.map(item => {
        if (item.type === "p") {
          return (
            <p className={textStyle} key={item.id}>
              {item.text}
            </p>
          );
        }
        if (item.type === "text" || item.type === "date") {
          return (
            <div
              key={item.id}
              className={`${stylDiv} ${
                item.style !== undefined ? item.style : null
              }`}
            >
              <Field
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className={inputStyle}
              />
              <p className="text-red-600">
                <ErrorMessage name={item.name} />
              </p>
            </div>
          );
        }

        if (item.type === undefined && item.component !== undefined) {
          return (
            <div
              key={item.id}
              className={`${stylDiv} ${
                item.style !== undefined ? item.style : null
              }`}
            >
              <Field
                component={item.component}
                name={item.name}
                placeholder={item.placeholder}
                className={inputStyle}
              >
                {[...item.options].map(ele =>
                  ele.disabled !== undefined ? (
                    <option value="" disabled defaultValue hidden key={ele.id}>
                      {ele.name}
                    </option>
                  ) : (
                    <option value={ele.value} key={ele.id}>
                      {ele.name}
                    </option>
                  )
                )}
              </Field>
              <p className="text-red-600">
                <ErrorMessage name={item.name} />
              </p>
            </div>
          );
        }

        if (item.type === undefined && item.as !== undefined) {
          return (
            <div
              key={item.id}
              className={`${stylDiv} ${
                item.style !== undefined ? item.style : null
              }`}
            >
              <Field
                as={item.as}
                name={item.name}
                placeholder={item.placeholder}
                className={`${inputStyle} h-28 `}
              />
              <p className="text-red-600">
                <ErrorMessage name={item.name} />
              </p>
            </div>
          );
        }
        return null;
      })}
      <button
        type="submit"
        className="text-yellow-500 w-full text-sm text-left uppercase my-10"
      >
        + save & anothor record
      </button>
    </Form>
  );
}
