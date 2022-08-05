import Yup from "./validate"

export const RegisterSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    email: Yup.string().required().email(),
    full_name: Yup.string().required(),
})