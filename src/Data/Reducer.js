import log from "loglevel";

export const initialState = {
  heart_eyes: 0,
  eye: 1,
  poop: 0,
  star: 0,
};

function addReaction(state, reactionName) {
  log.trace("Reducer=>addReaction(state, reactionName)", state, reactionName);
  return { ...state, [reactionName]: state[reactionName] + 1 };
}

function loadReactions(reactions) {
  log.trace("Reducer=>loadReactions(reactions)", reactions);
  return { ...reactions };
}

export const reducer = (state, action) => {
  log.trace("Reducer=>(state,action)", state, action);
  const { type, payload } = action;
  switch (type) {
    case ACTION.ADD_REACTION:
      return addReaction(state, payload);
    case ACTION.LOAD_REACTIONS:
      return loadReactions(payload);
    default:
      return initialState;
  }
};

export const ACTION = {
  LOAD_REACTIONS: "load-reactions",
  ADD_REACTION: "add-reaction",
};
