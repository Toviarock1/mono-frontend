import React from "react";
import { Formik, Field, Form } from "formik";
import { LoginFormSchema } from "../schema";
import { LoginFormValues as MyFormValues } from "../types";
import Logo from "./../../../assets/logo.svg";

const index = () => {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  return (
    <section className="bg-black flex flex-wrap justify-center items-center h-screen px-3 sm:p-10">
      <div className="bg-white  h-fit my-28 px-6 py-20 sm:p-20 rounded-2xl">
        <div>
          <div>
            <img className="mx-auto block" src={Logo} alt="company logo" />
          </div>
          <div className="text-center mt-8 mb-12 font-thin">
            <h1 className="drop-shadow-2xl">Securely login to your account</h1>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={LoginFormSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="md:w-96">
                  <Field
                    className={`${
                      errors.email && "border-red-500"
                    } w-full border border-black rounded-lg h-14 pl-8 mb-5 drop-shadow-xl`}
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
                <div>
                  <Field
                    className={`${
                      errors.password && "border-red-500"
                    } w-full border border-black rounded-lg h-14 pl-8 mb-5 drop-shadow-xl`}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-xs text-red-500">
                      {errors.password}
                    </div>
                  ) : null}
                </div>

                <div className="flex justify-between gap-3 md:gap-0 mt-2 px-2">
                  <div className="flex">
                    <Field
                      className="mr-1 w-6 accent-white drop-shadow-lg"
                      name="rememberMe"
                      type="checkbox"
                    />
                    <p className="font-thin text-sm">Remember me</p>
                  </div>
                  <div>
                    <a
                      className="font-thin text-sm drop-shadow-2xl shadow-black"
                      href="#"
                    >
                      I forgot my password
                    </a>
                  </div>
                </div>
                <button
                  className="w-full my-6 bg-[#6979F8] text-white py-4 rounded-md"
                  type="submit"
                >
                  LOG IN
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center font-light text-sm text-[#182CD1]">
            <p>
              Don’t have an account?{" "}
              <a className=" underline" href="#">
                Sign up
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
