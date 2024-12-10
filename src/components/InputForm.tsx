import { FormEvent, useState } from "react";

type InputFormProps = {
  labels: string[];
  formAction: (data: any) => void;
};

export const InputForm = ({ labels, formAction }: InputFormProps) => {
  const [data, setData] = useState<{ [i: string]: string }>({});

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    formAction(data);
    console.log("realData>>", data);
  };

  return (
    <form className="w-80 flex items-center justify-center flex-col">
      {labels.map((str, i) => (
        <div className="w-full" key={i}>
          <p className=" text-2xl my-3">{str}</p>
          <input
            onChange={(el) =>
              setData((pre) => ({
                ...pre,
                [str]: el.target.value,
              }))
            }
            className="bg-slate-400 w-full p-2 rounded outline-none"
          />
        </div>
      ))}
      <button onClick={formSubmit}>submit</button>
    </form>
  );
};
// export const InputForm = ({ labels }: InputFormProps) => {
//   const inputRefArr = useRef<HTMLInputElement[]>([]);
//   const formSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     const data = inputRefArr.current;
//     console.log("id :", data[0].value, "ps :", data[1].value);
//   };

//   return (
//     <form className="w-80 flex items-center justify-center flex-col">
//       {labels.map((str, i) => (
//         <div className="w-full" key={i}>
//           <p className=" text-2xl my-3">{str}</p>
//           <input
//             ref={(el) => {
//               if (el) inputRefArr.current[i] = el;
//             }}
//             className="bg-slate-400 w-full p-2 rounded outline-none"
//           />
//         </div>
//       ))}
//       <button onClick={formSubmit}>submit</button>
//     </form>
//   );
// };
