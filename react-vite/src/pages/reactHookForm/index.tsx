import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IForm, IFormClass } from "./interface";
import { ReactHookFormContainer } from "./style";
import { useRef } from "react";
import { TextField } from "@mui/material";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ReactHookForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const nameDefaultValues = {
    firstname: "",
    lastname: "",
  };
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: nameDefaultValues,
  });

  const classDefaultValue = {
    class: "",
    grade: "",
  };

  const getForm = () => {
    console.log("getValues", getValues());
  };

  const submitName: SubmitHandler<IForm> = (data) => {
    reset();
    console.log(data);
  };

  const getRef = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <ReactHookFormContainer>
      <div className="introduce-rhf">
        <Controller
          control={control}
          name="firstname"
          render={({ field }) => <TextField {...field} />}
        />
        {/* <input type="text" {...register("firstname")} /> */}
        {errors.firstname && (
          <small className="error">
            {errors.firstname.message?.toString()}
          </small>
        )}
        <input type="text" {...register("lastname", { required: true })} />
        {errors.lastname && (
          <small className="error">{errors.lastname.message?.toString()}</small>
        )}
        <button onClick={handleSubmit(submitName)} type="submit">
          Submit
        </button>
        <button onClick={getForm}>Get all value</button>
      </div>

      <div className="uncontrolled-component">
        <input type="text" ref={inputRef} />
        <button onClick={getRef}>Get ref</button>
      </div>
    </ReactHookFormContainer>
  );
}
