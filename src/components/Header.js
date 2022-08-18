import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import  NativeSelect from '@mui/material/NativeSelect';
import Radio from '@mui/material/Radio';

const Header = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (<>
    <InputLabel htmlFor="select"></InputLabel>
<NativeSelect >
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">four</option>
</NativeSelect>
{/* <h1>Radio Button</h1> */}
<br/>



<div>

      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
  </div>
    

</>
  )
}

export default Header