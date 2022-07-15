import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm({ login }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    alert(`Login: ${data.email}, password: ${data.password}`);
    await login(data.email, data.password);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <img width="100" src="/static/svgs/login-img.svg" alt="login" />
      </header>
      <input
        id="email"
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        })}
      />
      {errors.email && (
        <span role="alert" className="red-line">
          {errors.email.message}
        </span>
      )}
      <input
        id="password"
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5",
          },
        })}
      />
      {errors.password && (
        <span role="alert" className="red-line">
          {errors.password.message}
        </span>
      )}
      <button type="submit">Login</button>
    </form>
  );
}
