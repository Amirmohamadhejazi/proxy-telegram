import * as yup from 'yup'

const ResetPasswordSchema = yup.object({
    old_password: yup.string().required('Old password is required').min(3, 'Minimum 3 characters'),
    new_password: yup.string().required('New password is required').min(3, 'Minimum 3 characters'),
    confirm_password: yup
        .string()
        .required('Please confirm your new password')
        .oneOf([yup.ref('new_password')], 'Passwords must match'),
})

export default ResetPasswordSchema
