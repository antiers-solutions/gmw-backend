class ProposalHelper {
  static instance: ProposalHelper = null;

  /**
   * get the instance of ProposalHelper class
   * @returns ProposalHelper
   */
  static getInstance = () => {
    if (!ProposalHelper.instance) {
      ProposalHelper.instance = new ProposalHelper();
      delete ProposalHelper.constructor;
    }
    return ProposalHelper.instance;
  };
}

// export the single instance default
export default ProposalHelper.getInstance();
