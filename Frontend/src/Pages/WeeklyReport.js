import React, { useState } from 'react'
import AppLayout from '../layout/AppLayout'
export default function WeeklyReports() {
    const [show, setShow] = useState(false)
    const ShowName = () => {
        setShow(!show)
        // if (show == true) {
        //     setShow(false)
        // }
        // else {
        //     setShow(true)
        // }
    }
    return (
        <>
            <AppLayout isSidebar={true}>
                <div className="container mt-5">
                    <div className="row">
                        <form>
                            <h2 className='text-center mb-4'>Registration Data</h2>
                            <div class="row mb-2">
                                <div class="form-group col-md-4">
                                    <label for="">Animal ID Number</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Breed</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Heard Number</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label for="">Age</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Breeding schedule</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container mt-5">
                    <button className='btn btn-primary px-3 py-2' onClick={ShowName}>Click</button>
                    {
                        show && (<div className="container">
                            <div className="row">
                                <form>
                                    <h2 className='text-center mb-4'>Enter week of year</h2>
                                    <div class="row mb-3">
                                        <div class="form-group col-md-4">
                                            <label for="">Animal ID Tag Number</label>
                                            <input type="number" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">type</label>
                                            <input type="text" class="form-control" id="" />
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label for="">Gender</label>
                                            <div className='d-flex mt-2'>
                                                {/* <div class="form-check me-5">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Male
                                                </label>
                                            </div> */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Default radio
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row mb-3">
                                        <div class="form-group col-md-4">
                                            <label for="">Age</label>
                                            <input type="number" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">Breed</label>
                                            <input type="text" class="form-control" id="" />
                                        </div>

                                        <div class="form-group col-md-4">
                                            <label for="">Alive / Dead</label>
                                            <div className='d-flex mt-2'>
                                                <div class="form-check me-5">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Alive
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Dead
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row mb-3">
                                        <div class="form-group col-md-4">
                                            <label for="">Enter Current Weight</label>
                                            <input type="number" class="form-control" id="" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="">Expected weight at slaughter</label>
                                            <input type="text" class="form-control" id="" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Animal ID Number</th>
                                            <th>Feeds Consumed Kgs</th>
                                            <th>Water Consumed</th>
                                            <th>Weight Kgs</th>
                                            <th>Calving Records</th>
                                            <th>Culling Records</th>
                                            <th>Vaccination Given</th>
                                            <th>Deworming/Tick control</th>
                                            <th>Breeding Records</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>)

                    }

                </div>
            </AppLayout>
        </>
    )
}

// export default WeeklyReports
// //define button and form//
// const popUpForm = document.getElementById("popUpForm");
// var button = document.getElementById("addBook");
// //Form Pop-Up//
// //button.onclick = () => {window.open('hello!')};//

// //button function//
// button.addEventListener("click", function () {
//     document.getElementById("popUpForm").style.display = "block";

// });