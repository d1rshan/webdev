"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
type FormFields = z.infer<typeof schema>;

export default function ReactHookFormTut() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
      // setError => to set errors in the async operations we perform on the form after submit
      setError("root", {
        message: "Error on submitting form",
      });
    }
  };

  return (
    <div className="flex h-full justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("email")} placeholder="Enter email" />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <Input
          {...register("password")}
          placeholder="Enter password"
          type="password"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
        {errors.root && (
          <span className="text-red-500">{errors.root.message}</span>
        )}
      </form>
    </div>
  );
}
