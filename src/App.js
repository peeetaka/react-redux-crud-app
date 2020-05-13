import React from 'react';
import PropTypes from 'prop-types';

const App = () => {

  const profiles = [
    { name: "Taro", age: 20 },
    { name: "Hana", age: 5 },
    { name: "Jiro" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi,I am {props.name}, and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default App;