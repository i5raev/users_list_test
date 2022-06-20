import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('First Name is required')
        .max(256, 'First Name must not exceed 256 characters'),
    last_name: Yup.string()
        .required('Last Name is required')
        .max(256, 'Last Name must not exceed 256 characters'),
    birth_date: Yup.date()
        .required('Birth Date is required'),
    gender: Yup.string()
        .required('Gender is required'),
    biography: Yup.string()
        .required('Biography is required')
        .max(1024, 'Biography must not exceed 1024 characters'),
    job: Yup.string()
        .required('Job is required')
        .max(256, 'Job must not exceed 256 characters'),
});
