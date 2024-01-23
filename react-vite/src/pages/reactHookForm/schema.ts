import * as yup from "yup"

export const schema = yup.object().shape({
    firstname: yup.string().required('vui lòng nhập họ').email("email type"),
    lastname: yup.string().required('vui lòng nhập tên')
})