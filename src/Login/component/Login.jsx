import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const { type } = useParams();
   const backgroundClass =
    type === 'student'
      ? 'https://contentwitty.com/wp-content/themes/contentwitty/images/choose-image.svg'
      : type === 'recruiter'
      ? 'https://www.orange-business.com/sites/default/files/illustration-obs---relation-client---centres-de-contacts.png'
      : 'https://www.orange-business.com/sites/default/files/styles/max_630x630/public/illustration-obs---collaboration-&-teletravail---visioconference.png.webp?itok=-axtsi-P'; 
  const validationSchema = yup.object({
    rollno: yup
      .string()
      .min(5, 'Minimum 5 characters required')
      .when([], {
        is: () => type === 'student',
        then: (schema) => schema.required('Please enter roll no'),
        otherwise: (schema) => schema.notRequired(),
      }),
    name: yup
      .string()
      .min(5, 'Minimum 5 characters required')
      .when([], {
        is: () => type === 'recruiter',
        then: (schema) => schema.required('Please enter name'),
        otherwise: (schema) => schema.notRequired(),
      }),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter email'),
    password: yup.string().required('Please enter password'),
  });

  const formik = useFormik({
    initialValues: {
      rollno: '',
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log('Form values:', values);
      resetForm();
      setSubmitting(false);
    },
  });

  return (
   <div className="relative min-h-screen bg-[#f6f4f9] flex items-center justify-center px-4 overflow-hidden">
  {/* Background illustration image - left */}
  <img
    src={backgroundClass}
    alt="Illustration Left"
  className="absolute bottom-20 left-61 w-64 md:w-72 lg:w-80 h-64 object-contain opacity-90 pointer-events-none select-none"

  />
      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md">
        <p className="text-4xl font-bold justify-left capitalize mb-1">Lets </p>
         <p className="text-4xl font-bold flex justify-left capitalize mb-1"> Start Learning</p>
        <p className="text-1xl mt-2 text-gray-500 flex justify-left mb-6 font-bold">
          Please login or sign up to continue
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {type === 'student' && (
            <>
              <input
                type="text"
                name="rollno"
                placeholder=" your Roll No"
                value={formik.values.rollno}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border w-full px-4 py-2 rounded-lg"
              />
              {formik.touched.rollno && formik.errors.rollno && (
                <div className="text-red-500 text-sm">{formik.errors.rollno}</div>
              )}
            </>
          )}

          {type === 'recruiter' && (
            <>
              <input
                type="text"
                name="name"
                placeholder=" your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border w-full px-4 py-2 rounded-lg"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              )}
            </>
          )}

          <div className="relative">
  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="pl-10 w-full border px-4 py-2 rounded-lg"
  />
</div>

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}

          <div className="relative">
  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
  <input
    type="password"
    name="password"
    placeholder="Your Password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="pl-10 w-full border px-4 py-2 rounded-lg"
  />
</div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Sign In
          </button>

          
          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center py-3 rounded-lg gap-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Google</span>
          </button>

          <p className="text-center text-sm text-gray-600">
            Already Have an Account?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">SignUp</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
