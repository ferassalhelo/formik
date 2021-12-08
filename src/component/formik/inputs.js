/*

* array of object.

* objec  is divided into foure syntax :-

   - first : object of pragraph contains { id , type:'p' ,text }.

   - second : object of  selection field contains 
   { id , component , name , placeholder , style , errorMassige , options (array of object contains{ id , value , name}) }.

   - third : object of date or text field contains { type , name , placeholder , style , errorMassige}

  - fourth : object of textarea field contains { as  , placeholder , style , errorMassige }

   */

let inputs = [
  {
    id: Math.random(),
    type: "p",
    text: "Jop Details"
  },
  {
    id: Math.random(),
    component: "select",
    name: "jobTitle",
    placeholder: "Job Title",
    style: "w-full ",
    errorMassige: "Select your jop title ",
    options: [
      {
        id: Math.random(),

        disabled: "",
        value: "disable",
        name: "Job Title"
      },

      {
        id: Math.random(),
        value: "front-end developer",
        name: "front-end developer"
      },
      {
        id: Math.random(),
        value: "back-end developer",
        name: "back-end developer"
      },

      {
        id: Math.random(),
        value: "ux-ui",
        name: "ux-ui"
      }
    ]
  },
  {
    id: Math.random(),
    component: "select",
    name: "jobFIeld",
    placeholder: "Job Field",
    style: "w-full ",
    errorMassige: "Select your jop field ",
    options: [
      { id: Math.random(), disabled: "", value: "disable", name: "Job Field" },
      { id: Math.random(), value: "one", name: "one" },
      { id: Math.random(), value: "two", name: "two" },
      { id: Math.random(), value: "three", name: "three" }
    ]
  },
  {
    id: Math.random(),
    component: "select",
    name: "jobLocation",
    placeholder: "Job location",
    style: "w-full ",
    errorMassige: "Select your jop location ",
    options: [
      {
        id: Math.random(),
        disabled: "",
        value: "disable",
        name: "Job location"
      },

      { id: Math.random(), value: "egypt", name: "egypt" },
      { id: Math.random(), value: "Gaza", name: "Gaza" }
    ]
  },
  {
    id: Math.random(),
    type: "date",
    name: "startDate",
    placeholder: "Start Date",
    style: "sm:w-1/2 w-full",
    errorMassige: "Select  start date "
  },
  {
    id: Math.random(),
    type: "date",
    name: "endDate",
    placeholder: "end Date",
    style: "sm:w-1/2  w-full",
    errorMassige: "Select  start date "
  },
  {
    id: Math.random(),
    as: "textarea",
    name: "jobDiscription",
    placeholder: "Job Discription",
    style: "w-full h-24 resize-y resize-none",
    errorMassige: "enter your discription jop"
  },
  {
    id: Math.random(),
    type: "p",
    text: "Company Details"
  },
  {
    id: Math.random(),
    type: "text",
    name: "companyName",
    placeholder: "Company Name",
    style: " w-full",
    errorMassige: "enter your company Name "
  },
  {
    id: Math.random(),
    type: "text",
    name: "companyAddress",
    placeholder: "Company Address",
    style: " w-full",
    errorMassige: "enter your company Address "
  },
  {
    id: Math.random(),
    component: "select",
    name: "CompanyINdustry",
    placeholder: "company industry",
    style: "w-full ",
    errorMassige: "Select your company industry ",
    options: [
      {
        id: Math.random(),
        disabled: "",
        value: "disable",
        name: "company industry"
      },

      {
        id: Math.random(),
        value: "web applecations",
        name: "web applecations"
      },
      { id: Math.random(), value: "ux-ui disigin", name: "ux-ui disigein" }
    ]
  },
  {
    id: Math.random(),
    component: "select",
    name: "CompanySize",
    placeholder: "company Size",
    style: "w-full ",
    errorMassige: "Select your company size",
    options: [
      {
        id: Math.random(),
        disabled: "",
        value: "disable",
        name: "company size"
      },

      { id: Math.random(), value: "small", name: "small" },
      { id: Math.random(), value: "big", name: "big" }
    ]
  },
  {
    id: Math.random(),
    component: "select",
    name: "CompanySector",
    placeholder: "company Sector",
    style: "w-full ",
    errorMassige: "Select your company sector",
    options: [
      {
        id: Math.random(),
        disabled: "",
        value: "disable",
        name: "company sector"
      },

      { id: Math.random(), value: "descktop", name: "descktop" },
      { id: Math.random(), value: "mobile", name: "mobile" }
    ]
  },
  {
    id: Math.random(),
    type: "text",
    name: "supervisorName",
    placeholder: "Supervisor Name",
    style: " w-full",
    errorMassige: "enter your supervisor name"
  },
  {
    id: Math.random(),
    type: "text",
    name: "Employees Supervise",
    placeholder: "# of Employees Supervise by You",
    style: " w-full",
    errorMassige: "enter your Employees Supervise"
  },
  {
    id: Math.random(),
    type: "text",
    name: "ReasonOfLeaving",
    placeholder: "Reason Of Leaving",
    style: " w-full",
    errorMassige: "enter your Reason Of Leaving "
  },
  { id: Math.random(), type: "p", text: "Compensation" },
  {
    id: Math.random(),
    type: "text",
    name: "startSalary",
    placeholder: "Start Salary",
    style: " w-full sm:w-1/3",
    errorMassige: "enter your start salary "
  },
  {
    id: Math.random(),
    type: "text",
    name: "Salaendry",
    placeholder: "End Salary",
    style: " w-full sm:w-1/3",
    errorMassige: "enter your end salary "
  },
  {
    id: Math.random(),
    component: "select",
    name: "currency",
    placeholder: "Currency",
    style: "w-full sm:w-1/3 ",
    errorMassige: "Select your currency",
    options: [
      { id: Math.random(), disabled: "", value: "disable", name: "currency" },

      { id: Math.random(), value: "dollar", name: "dollar" },
      { id: Math.random(), value: "euro", name: "euro" }
    ]
  }
];

export { inputs };
