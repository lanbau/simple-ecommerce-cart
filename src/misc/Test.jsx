import React from 'react';
import { useSelector } from 'react-redux';

const HelloWorld = () => {
  const user = useSelector(state => state.user);
  const skills = useSelector(state => state.skills);

  const { firstName } = user;

  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>My Skills:</p>
      <ul>
        {skills.map(skill => (
          <p key={skill.id}>{skill.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default HelloWorld;