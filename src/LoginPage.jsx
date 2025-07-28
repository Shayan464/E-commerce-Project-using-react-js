import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.Type === "Admin") navigate("/admin");
      else if (user.Type === "User") navigate("/user");
    }
  }, [user, navigate]);

  const validationSchema = Yup.object({
  email : Yup.string().email("Invalid Email Address").required("Email is Required"),
  password : Yup.string().min(3,"Password must be atleast 3 characters").required("Password is required")
  
  })

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit:(values, { setSubmitting }) => {
      const result = login(values.email, values.password);
      setSubmitting(false);
      
      if (result.success) {
        toast.success("Logged in successfully!");
        
      } else {
        toast.error("User not Registered ");
      }
    },
  });

  return (
    <div className="mx-auto mt-12 p-8 py-6 px-6 bg-white shadow rounded max-w-md  h-100">
      <h2 className="text-2xl mb-4 font-semibold text-center">
        Welcome To the Website
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4 ">
        <div className="mt-4 gap">
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
          className="w-full p-2 border mb-2 border-gray-300 rounded "
        />
        {formik.errors.email && ( 
          <span className="text-red-500 ">
            {formik.errors.email}
            </span> )}

        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
          {formik.errors.password && (
            <div className="text-red-500">
              {formik.errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full py-2 mt-10 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
        Login
        </button>

        <button
          type="button"
          onClick={() => navigate("/UserRegister")}
          className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
