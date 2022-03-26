import { useState } from 'react'
import {Container, Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const AddTransaction = ({ onAdd }) => {
    const formik = useFormik({
        initialValues: {
            concept: '',
            category: '',
            amount: '',
            type: '',
            date: '',
        },
        validationSchema: Yup.object({
            concept: Yup.string().required("El concepto es obligatorio"),
            amount: Yup.number().required("El concepto es obligatorio"),
            // date: Yup.date().required("El concepto es obligatorio"),
            // type: Yup.boolean().required("El concepto es obligatorio"),
        }),
        onSubmit: (formData) => {
            console.log(formData)
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
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    error={formik.errors.type}
                />
            </div>
            <div className="form-control">
                <label>Category</label>
                <Form.Input
                    type="text"
                    placeholder="Add Category"
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
