import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.Type === 'Admin') navigate('/admin');
      else if (user.Type === 'User') navigate('/user');
    }
  }, [user, navigate]);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid Email Address')
      .required('Email is Required'),
    password: Yup.string()
      .min(3, 'Password must be atleast 3 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      const result = login(values.email, values.password);
      setSubmitting(false);

      if (result.success) {
        toast.success('Logged in successfully!');
      } else {
        toast.error('User not Registered ');
      }
    },
  });

  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center mr-40 mt-10 px-4">
      <div
        className="
        w-full max-w-md
        p-8
        rounded-2xl
        bg-white/30
        backdrop-blur-lg
        border border-white/30
        shadow-2xl
      "
      >
        <h2 className="text-3xl font-bold text-center text-slate-900">
          Welcome Back
        </h2>
        <p className="text-center text-slate-700 mt-1">Login to continue</p>

        <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email address"
              className="
              w-full p-3 rounded-xl
              bg-white/70
              border border-slate-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
            />
            {formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              className="
              w-full p-3 rounded-xl
              bg-white/70
              border border-slate-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
            />
            {formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="
            w-full py-3 mt-4
            bg-gradient-to-r from-indigo-600 to-purple-600
            text-white font-semibold
            rounded-xl
            hover:opacity-90
            transition
          "
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-3">
            <div className="flex-1 h-px bg-slate-300" />
            <span className="text-sm text-slate-500">or</span>
            <div className="flex-1 h-px bg-slate-300" />
          </div>

          {/* Sign up */}
          <button
            type="button"
            onClick={() => navigate('/UserRegister')}
            className="
            w-full py-3
            bg-slate-800
            text-white font-medium
            rounded-xl
            hover:bg-slate-700
            transition
          "
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
