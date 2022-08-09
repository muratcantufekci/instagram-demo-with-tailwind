import Yup from "./validate"

export const RegisterSchema = Yup.object().shape({
    username: Yup.mixed().required()
    .test({
        message: 'Geçerli bir kullanıcı adı giriniz',
        // eslint-disable-next-line
        test: str => /^[a-z0-9\.\_]+$/i.test(str)
    }),
    password: Yup.string().required(),
    email: Yup.string().required().email(),
    full_name: Yup.string().required(),
})