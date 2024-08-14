import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(3, "Name must contain at least 3 characters").required("please enter your name"),
    email: Yup.string().email("Please enter a valid email").required("Please enter an email"),
    message: Yup.string().min(6, "Please enter at least 6 characters ")
})