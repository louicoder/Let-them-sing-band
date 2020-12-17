import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../Components';
import SingleMember from './SingleMember';
import Team from './Team';

const Band = () => {
  const dispatch = useDispatch();
  const { getTeam } = useSelector((state) => state.loading.effects.users);
  const [ state, setState ] = React.useState({ team: [], preview: true, activeMember: {} });
  React.useEffect(() => {
    dispatch.users.getTeam((response) => {
      console.log('Team here', response.result);
      setState({ ...state, team: response.result });
    });
  }, []);
  return (
    <div id="team-main-container">
      <Loader visible={getTeam} />
      <span id="band-header">OUR TEAM MEMBERS </span>

      {state.preview && (
        <Team
          team={state.team}
          setActiveMember={(activeMember) => setState({ ...state, preview: false, activeMember })}
        />
      )}
      {!state.preview &&
      state.activeMember && (
        <SingleMember setPreview={() => setState({ ...state, preview: true })} {...state.activeMember} />
      )}
    </div>
  );
};

export default Band;
