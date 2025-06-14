import * as yup from 'yup'

const LoginSchema = yup
    .object({
        username: yup.string().required().min(3),
        password: yup.string().required().min(3),
    })
    .required()

export default LoginSchema
