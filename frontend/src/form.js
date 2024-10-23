import React, {useState} from 'react';

function InputForm(props){
    const [formData, setFormData] = useState({
        debtAmount: '',
    });

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevState) => ({  ...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Cost of Education Per Year:</label>
            <input 
                type='text' 
                name='debtAmount' 
                value={setFormData.debtAmount}
                onChange={handleChange}
                ></input>
            <input type='submit' value='Submit' />
        </form>
    );
}


export default InputForm;