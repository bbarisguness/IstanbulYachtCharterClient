"use client";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Form as BootstrapForm } from "react-bootstrap";

const makeReservationSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  mail: Yup.string().email().required(),
  phone: Yup.string().required(),
  address1: Yup.string().required(),
  address2: Yup.string(),
  country: Yup.number().min(1).required(),
  state: Yup.number().min(1).required(),
  zipCode: Yup.string().required(),
});

export default function ReservationForm() {
  return (
    <>
      <h4 className="title-2">Reservation Information</h4>

      <Formik
        initialValues={{
          name: "",
          surname: "",
          mail: "",
          phone: "",
          address1: "",
          address2: "",
          country: 0,
          state: 0,
          zipCode: "",
        }}
        validationSchema={makeReservationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          alert("Sonraki işlemler planlanacak, konsola bak")
        }}
      >
        {({ errors, touched, values, setFieldValue, handleChange }) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <div className="input-item input-item-name ltn__custom-icon">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className={`${
                      errors.name && touched.name && "reservationPageInvalid"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-item input-item-email ltn__custom-icon">
                  <input
                    type="text"
                    name="surname"
                    placeholder="Enter your surname"
                    className={`${
                      errors.surname &&
                      touched.surname &&
                      "reservationPageInvalid"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-item input-item input-item-email ltn__custom-icon">
                  <input
                    type="text"
                    name="mail"
                    placeholder="Enter your email"
                    className={`${
                      errors.mail && touched.mail && "reservationPageInvalid"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-item input-item-phone ltn__custom-icon">
                  <input
                    type="text"
                    name="phone"
                    placeholder="+44 77xxx xxx"
                    className={`${
                      errors.phone && touched.phone && "reservationPageInvalid"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-item input-item input-item-email ltn__custom-icon">
                  <input
                    type="text"
                    name="address1"
                    placeholder="Address"
                    className={`${
                      errors.address1 &&
                      touched.address1 &&
                      "reservationPageInvalid"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-item input-item-phone ltn__custom-icon">
                  <input
                    type="text"
                    name="address2"
                    placeholder="Address 2 (Optional)"
                    className={`${
                      errors.address2 &&
                      touched.address2 &&
                      "reservationPageInvalid"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-item input-item input-item-email ltn__custom-icon">
                  <BootstrapForm.Select
                    name="country"
                    className={`nice-select ${
                      errors.country &&
                      touched.country &&
                      "reservationPageInvalid"
                    }`}
                    onChange={(e)=> setFieldValue('country',parseInt(e.target.value))}
                  >
                    <option value={0}>Choose Country...</option>
                    <option value={1}>United States </option>
                  </BootstrapForm.Select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-item input-item input-item-email ltn__custom-icon">
                  <BootstrapForm.Select
                    name="state"
                    className={`nice-select ${
                      errors.state && touched.state && "reservationPageInvalid"
                    }`}
                    onChange={(e)=> setFieldValue('state',parseInt(e.target.value))}
                  >
                    <option value={0}>Choose State...</option>
                    <option value={1}>California</option>
                  </BootstrapForm.Select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-item input-item-phone ltn__custom-icon">
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip code"
                    className={`${
                      errors.zipCode &&
                      touched.zipCode &&
                      "reservationPageInvalid"
                    }`}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="btn-wrapper mt-0">
              <button
                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                type="submit"
              >
                Make a Reservation
              </button>
            </div>
            <p className="form-messege mb-0 mt-20"></p>
          </Form>
        )}
      </Formik>
    </>
  );
}
