import React from 'react';
import '../../assets/css/main.css'
import '../../assets/css/content.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { SET_NUMBER_SELL, SET_ARRAY_BOARD, SET_START_GAME } from '../../reducers/index'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    sizeBoard: '',
}

const validationSchema = Yup.object({
    sizeBoard: Yup.string().required('Required')
})

/**
 * Function init array board
 * @param {number} numberCell 
 * @returns
 * CreatedBy:  PQ Huy (25.07.2021)
 */
const initArrayBoard = (numberCell) => {
  const number_cell = parseInt(numberCell);
  return Array(number_cell).fill(null).map(() => Array(number_cell).fill(null))
};

function FormStart() {

    const dispatch = useDispatch();

    const number = useSelector(state => state.index.number_cell)

    const onSubmit = (values, submitProps) => {
    
        submitProps.setSubmitting(false)

        // dispatch array board
        dispatch(SET_NUMBER_SELL(values.sizeBoard))

        //set array board
        dispatch(SET_ARRAY_BOARD(initArrayBoard(values.sizeBoard)))

        //set start game
        dispatch(SET_START_GAME(true))
        
        submitProps.resetForm()
    }

    /**
     * 
     * @param {*} value 
     * @returns 
     */
    const validateNumber = value => {
        let error;
        if (!value) {
            error = 'Required !!!'
        } else {
            if (parseInt(value) < 3 || parseInt(value) > 50) {
                error = 'The number of cells must be between 4 and 50'
            }
        }

        return error;
    }

    return (
        <div className="box-start-game">
            <div className="start-game__container">
                <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {
                        formik => {
                            return (
                                <Form>
                                    <div className="form__container">
                                        <div className="form-control">
                                            <Field type="number" id="sizeBoard" name="sizeBoard" className='input__container' placeholder="Cell" validate={validateNumber}/>
                                            <ErrorMessage name="sizeBoard" component={TextError}/>
                                        </div>
                                        <div>
                                            <button type='submit' className="m-btn btn-info btn-submit" disabled={formik.isSubmitting}>Play</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    );
}

export default FormStart;