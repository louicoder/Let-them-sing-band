import React from 'react';
import { Button, InputField, MultiLineInput } from '../../../Components';
import './styles.scss';
const Form = ({ name, role, description, onChange, registerTeamMember }) => {
  return (
    <div id="team-member-form-container">
      <span>ADD A NEW TEAM MEMBER..</span>
      <InputField
        value={name}
        title="Member name"
        placeholder="Enter the team member name"
        styles={{ marginTop: '40px' }}
        onChange={(value) => onChange({ field: 'name', value })}
      />
      <InputField
        value={role}
        title="Member role"
        placeholder="Enter the member role"
        onChange={(value) => onChange({ field: 'role', value })}
      />
      <MultiLineInput
        value={description}
        title="A brief description of the team member"
        placeholder="Enter a description of the team members"
        onChange={(value) => onChange({ field: 'description', value })}
      />
      <Button title="Add team member" btnStyles={{ marginTop: '20px' }} onClick={registerTeamMember} />
    </div>
  );
};

export default Form;
