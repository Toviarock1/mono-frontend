import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required'),
    rememberMe: yup.boolean().required("Required")
})

export const SignupFormSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required'),
})

