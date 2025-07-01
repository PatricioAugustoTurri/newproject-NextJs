"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
const schema = z.object({
  name: z
    .string({
      required_error: "El nombre es obligatorio",
    })
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    })
    .max(100, {
      message: "El nombre no puede tener más de 100 caracteres",
    }),
  email: z
    .string({
      required_error: "El email es obligatorio",
    })
    .email(),
  message: z
    .string({
      required_error: "El mensaje es obligatorio",
    })
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres",
    })
    .max(1000, {
      message: "El mensaje no puede tener más de 1000 caracteres",
    }),
});
type FormType = z.infer<typeof schema>;
function NewForm() {
  const router = useRouter();
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = form.handleSubmit(async (values: FormType) => {
    try {
      const { data } = await axios.post("/api/contacts", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      router.push("/contact/thanks");
      console.log(result);
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>O déjanos un mensaje en este formulario</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormDescription className="text-xs text-red-500">
                      {form.formState.errors.name?.message}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormDescription className="text-xs text-red-500">
                      {form.formState.errors.email?.message}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription className="text-xs text-red-500">
                      {form.formState.errors.message?.message}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button type="submit">Enviar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
export default NewForm;
