import { BRIDGEBOT_ACTIONS } from "../../reducer";
import {
  getChannelsList,
  submitPollQuestion,
} from "../../api/index";

const resetForm = () => ({
  type: BRIDGEBOT_ACTIONS.RESET_FORM
});

const savePollGroups = pollGroups => ({
  type: BRIDGEBOT_ACTIONS.SAVE_POLL_GROUPS,
  payload: pollGroups
});

const savePollId = id => ({
  type: BRIDGEBOT_ACTIONS.SAVE_POLL_ID,
  payload: id,
});

const shapePollData = pollGroups =>
  pollGroups.map(pollGroup => ({ id: pollGroup.id, name: pollGroup.name }));  

export const fetchPollGroups = () => dispatch => {
  getChannelsList()
    .then(res => res.json())
    .then(response => response.channels)
    .then(pollGroups => shapePollData(pollGroups))
    .then(pollGroups => dispatch(savePollGroups(pollGroups)));
};

export const handleChangePollGroup = e => ({
  type: BRIDGEBOT_ACTIONS.SET_POLL_GROUP,
  payload: e.target.value,
});

export const handleChangePollQuestion = e => ({
    type: BRIDGEBOT_ACTIONS.SET_POLL_QUESTION,
    payload: e.target.value,
});

<<<<<<< HEAD
export const handleFormSubmit = (pollQuestion, selectedPollGroup, selectedPollGroupName) => dispatch => {
  const pollId = (Date.now()).toString();

  submitPollQuestion({pollQuestion, selectedPollGroup, selectedPollGroupName, pollId})
=======
export const handleFormSubmit = (pollQuestion, selectedPollGroup) => dispatch => {
  const pollId = Date.now();

  submitPollQuestion({pollQuestion, selectedPollGroup, pollId})
>>>>>>> set poll id in frontend
    .then(res => res.json())
    .then(res => res.message)
    .then(message => dispatch(savePollId(pollId)))
    .then(dispatch(resetForm()));
};
