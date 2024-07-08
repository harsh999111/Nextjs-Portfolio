"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";




const formFields = [
  {
    id: "firstName",
    name: "firstName",
    type: "text",
    label: "First name",
  },
  {
    id: "lastName",
    name: "lastName",
    type: "text",
    label: "Last name",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email Address",
  },
  {
    id: "message",
    name: "message",
    type: "text",
    label: "Message",
  },
];
const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('First Name is Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Last Name is Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is Required'),
  message: Yup.string()
    .required('Message is Required'),
});

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pt-40">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Contact Me
              </span>
            </h1>
          </>
        }
      >
   
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
          <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
           Hey I	&apos;m Harsh
          </h2>
       

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit }) => (
            <Form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col  space-y-2 ">
              {formFields.map((field) => (
                <LabelInputContainer key={field.id} className="">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Field as={Input} id={field.id} name={field.name} type={field.type} />
                  <ErrorMessage name={field.name} component="div" className="text-white" />
                </LabelInputContainer>
              ))}
            </div>
          
            <button
              className="bg-gradient-to-br relative group/btn from-white  dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </Form>
            )}
          </Formik>
        </div>
      </ContainerScroll>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
