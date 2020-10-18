import log from "loglevel";

export default class Api {
  constructor(client) {
    this.client = client;
  }

  async postReaction(emojiShortCode) {
    log.trace("Api.postReaction(reactionId", emojiShortCode);
    try {
      const success = await this.client.post("reactions", {
        id: emojiShortCode,
      });
      log.debug("Api.postReaction.try.success", success);
      return success;
    } catch (error) {
      log.error("Api.postReaction.catch(error)", error);
    }
  }

  async getReactions() {
    log.trace("Api.getReactions()");
    try {
      const reactions = {}
      const raw = await this.client.get("reactions");
      raw.forEach((o) => {
        Object.assign(reactions, {[o.id]: o.count || 0})
      })
      log.debug("Api.getReactions.try.reactions", raw, reactions);
      return reactions;
    } catch (error) {
      log.error("Api.getReactions.catch(error)", error);
      return {};
    }
  }
}
