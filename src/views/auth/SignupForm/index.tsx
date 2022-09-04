import React from "react";
import { Formik, Field, Form } from "formik";
import { SignupFormSchema } from "../schema";
import { SignupFormValues as MyFormValues } from "../types";
import Logo from "./../../../assets/logo.svg";

const index = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  return (
    <section className="bg-black flex justify-center items-center h-screen px-3 sm:p-10">
      <div className="bg-white h-fit my-28 px-6 py-20 sm:p-20 rounded-2xl">
        <div>
          <div>
            <img className="mx-auto block" src={Logo} alt="company logo" />
          </div>
          <div className="text-center mt-8 mb-12 font-thin">
            <h1 className="drop-shadow-2xl">
              Track all your bank expenses in one place
            </h1>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={SignupFormSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="md:w-96 flex justify-evenly gap-10 mt-2">
                  <div className="w-full">
                    <Field
                      className={`${
                        errors.firstName && "border-red-500"
                      } w-full border border-gray-200 rounded-md h-14 pl-8 mb-5`}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="text-xs text-red-500 mb-2">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <Field
                      className={`${
                        errors.lastName && "border-red-500"
                      } w-full border border-gray-200 rounded-md h-14 pl-8 mb-5`}
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="text-xs text-red-500 mb-2">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <Field
                    className={`${
                      errors.email && "border-red-500"
                    } w-full border border-gray-200 rounded-md h-14 pl-8 mb-5`}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-xs text-red-500 mb-2">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <Field
                  className={`${
                    errors.password && "border-red-500"
                  } w-full border border-gray-200 rounded-md h-14 pl-8 mb-5`}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div className="text-xs text-red-500">{errors.password}</div>
                ) : null}
                <div className="flex justify-between mt-2 px-2"></div>
                <button
                  className="w-full my-6 bg-[#182CD1] text-white py-4 rounded-md"
                  type="submit"
                >
                  GET STARTED
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center font-light text-sm text-[#182CD1]">
            <p>
              Already have an account?
              <a className="underline pl-1" href="#">
                Sign in
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
