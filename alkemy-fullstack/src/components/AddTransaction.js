import { useState } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const AddTransaction = ({ onAdd }) => {
    const formik = useFormik({
        initialValues: {
            concept: '',
            category: '',
            amount: '',
            type: true,
            date: '',
        },
        validationSchema: Yup.object({
            concept: Yup.string().required('concept is required'),
            amount: Yup.number().required('amount is required'),
            category: Yup.string().required('category is required'),
            date: Yup.date().required('date is required'),
            type: Yup.boolean(),
        }),
        onSubmit: async (formData) => {
            onAdd(formData)
        },
    })

    return (
        <Container>
            <Form className="add-form" onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label>Concept</label>
                    <Form.Input
                        name="concept"
                        type="text"
                        placeholder="Add Concept"
                        onChange={formik.handleChange}
                        error={formik.errors.concept}
                        value={formik.values.concept}
                    />
                </div>
                <div className="form-control">
                    <label> Amount </label>
                    <Form.Input
                        name="amount"
                        type="number"
                        placeholder="Add Amount"
                        onChange={formik.handleChange}
                        error={formik.errors.amount}
                        value={formik.values.amount}
                    />
                </div>
                <div className="form-control">
                    <label>Income</label>
                    <Form.Input
                        name="type"
                        type="checkbox"
                        checked={formik.values.type}
                        onChange={formik.handleChange}
                        error={formik.errors.type}
                    />
                </div>
                <div className="form-control">
                    <label>Category</label>
                    <Form.Input
                        type="text"
                        placeholder="Add Category"
                        name="category"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        error={formik.errors.category}
                    />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <Form.Input
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        error={formik.errors.date}
                    />
                </div>
                <Button type="submit"> Create Transaction</Button>
            </Form>
        </Container>
    )
}
export default AddTransaction
