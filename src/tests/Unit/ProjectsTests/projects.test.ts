import sinon from 'sinon';
import { expect } from 'chai';
import { ProjectsData } from '../../mockedData';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import projectsHelper from '../../../controller-helpers/projects.helper';

export const runProjectTests = () => {
  describe('Get all Projects Data ', () => {
    it('It should return object data which contains projects of type array ', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'getCount');
      const stub2 = sinon.stub(
        mongoDataHelper,
        'findSelectedDataWithPagination'
      );

      stub1.resolves(4);
      stub2.resolves(ProjectsData);

      const response = await projectsHelper.getProjectData(1, 2);

      expect(response?.data?.projects).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.projects.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('totalMilestones');
      });

      // Restore the original function behavior
      stub1.restore();
      stub2.restore();
    });
  });

  describe('Get Projects Data by id', () => {
    it('It should return object projects of type array ', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'findAndQueryData');

      stub1.resolves([
        {
          _id: {
            $oid: '64ccf06cbe6ae66a4ec44ab4'
          },
          id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
          user_github_id: null,
          file_name: 'admeta.md',
          start_date: {
            $date: '2021-12-15T10:19:48.000Z'
          },
          html_url:
            'https://github.com/shaurya-ATR940/Grants-Program_dummy/blob/master/applications/AdMeta.md',
          payment_details:
            '0x1d346c4f0732674a1fc69b4bafba854f53353c35 (erc20 usdt)',
          md_content:
            "# AdMeta\n\n- **Team Name:** AdMeta\n- **Payment Address:** 0x1D346c4F0732674a1fc69b4bAFBa854F53353C35 (ERC20 USDT)\n- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2\n\n## Project Overview :page_facing_up:\n\n### Overview\n\nAdvertising in Metaverse\n\nAdMeta is a Metaverse advertisement platform that focuses on privacy-preserving. AdMeta uses a TEE-based DID service to identify target groups for advertisers, and with the usage of TEE, AdMeta guarantees not to collect any user data. AdMeta builds multiple forms of ad assets (e.g. billboards, wall paintings) in Metaverse platforms like Decentraland, Bit.Country, to allow land holders to integrate our products easily. Qualified conversions let both users and publishers get rewards from advertisers.\n\nIn Polkadot and Kusama ecosystem, DID projects like Litentry are growing fast along with its related products. We have already discussed and agreed on our initial cooperation with Litentry. Also, we have contacted with Metaverse projects like Bit.Country, who shows great interests in cooperation as well.\n\nUnlike traditional ad platforms, who collect users sensitive data(e.g. location, browsing history) for advertising, AdMeta does not collect or store any user data per se. Instead, users voluntarily decide and control what data can be stored in TEE, and the stored data in TEE cannot be accessed by anyone except users themselves.\n\n### Project Details\n\n![AdMeta Demo - the floating billboard](https://user-images.githubusercontent.com/4738254/144754078-1877d8a5-8ef9-49ec-8ef5-f79496a689f0.png)\n\nIn the above image, the floating billboard is our prototype ad component built with decentraland SDK. Users who registered on our blockchain, and switched \"Ad Display\" option on (by default it's off) are able to see a customized ad content on this billboard while gaming in decentraland.\n\nThe content of this ad component is selected according to user's personal data and preference. Unlike centralized ad platforms, we don't store user's data on or database. Instead, it's stored on the TEE layer of blockchain, and the target group matching and selecting happen also in the TEE layer, which ensures that no private data are exposed during the whole process. Eventually, both user and publisher receive some amount of token as rewards from advertiser.\n\nOur blockchain is built with Substrate, and the pallet-ad provides the functionality of advertisement proposal, storage and governance. The user pallet will connect to TEE-based external identity aggregation and DID service provided by Litentry (we have already the initial cooperation plan) to match ads with users data and preference.\n\n#### Architecture\n\n![AdMeta Architecture](https://raw.githubusercontent.com/h4n0/gists/master/admeta/admeta_architecture.svg)\n\n**Advertisers** can propose an ad with certain acceptance rule, e.g. link clicking, and also advertiser provides how many times the ads are displayed and converted, and how much they pay for each conversion. They need to pay the total price (the number of conversions \\* price per conversion) while proposing the ad. Each ad display has a unique ID, which is generated while creating the proposal. A Merkle tree are built with all these unique IDs, and the root of Merkle tree will be stored in on-chain storage. A qualified conversion gives the participated user this UID, with which the user can claim for rewards.\n\n**Councils** shall approve or reject ad proposals according to the content of ads. Also, advertisers are evaluated on their behavior democratically.\n\n**Users** can switch on the \"Ad Display\" option on AdMeta, so that users can get rewards by viewing and interacting with ads. By default, this option is off, which means users who haven't set up their AdMeta won't see any ads. Users can also provide their data for a better ad matching, by means of this they will get more rewards.\n\n**Publishers** can simply utilize our Ad Assets on any Metaverse platform and place it on their lands. Users also get rewards by a qualified display conversion.\n\n#### Technology Stack\n\n- Substrate\n- Node.js\n- 3D Model Design\n\n### Ecosystem Fit\n\nThere are an increasing number of Metaverse related projects in Polkadot/Kusama ecosystem, however, the current Metaverse platforms still lack of infrastructures and applications, comparing to our current real life. We therefore build this for various Metaverse platforms.\n\nOur target audiences can be Web3 projects, who are potential advertisers, Metaverse land holders, who are potential publishers, and Metaverse players, who are potential users.\n\nAdvertising is our natural needs in almost all social scenarios, and we meet this needs in Metaverse.\n\n[Parami](https://parami.io/) builds Web3 ad platforms as well, and their scope is to build the DID and privacy layer by themselves. While we are focusing on the advertising functionality, and the DID service will be provided by Litentry, who is more professional on this field and has already their products. Also, our ad platform is targeting on Metaverse, not Web3.\n\n## Team :busts_in_silhouette:\n\n### Team members (In order of joining time)\n\nHan Zhao - Core Dev and PM of Litentry Parachain Team. University of Stuttgart\n\nYvonne Xie - Digital Marketing Lead. King's College London\n\nShihao Zhao - Full Stack Dev of Litentry. University of Toronto\n\nHao Ding - VP of Litentry, Founder of Web3Go. University of Stuttgart\n\nDr. John Wu - Core Dev of Litentry Parachain Team. The University of Tokyo\n\n### Contact\n\n- **Contact Name:** Han Zhao\n- **Contact Email:** windzhaohan@gmail.com\n- **Website:** <https://admeta.network/>\n\n### Legal Structure\n\n- **Registered Address:** No legal structure yet.\n- **Registered Legal Entity:** No legal structure yet.\n\n### Team's experience\n\nHan and John are core developers as well as project managers at Litentry, and both of them are main developers who implemented the Litentry parachain from scratch. Litentry is an identity aggregation focused company in Polkadot ecosystem, and has got the Web3 Foundation grant since 2019.\n\nYvonne has more than 8 years experience of digital marketing, and she has a deep understanding and practice of various online marketing and advertising methods. She also initialized this idea of combining advertisement and privacy preserving, to archive the goal of data protection.\n\nShihao is a full stack developer at Litentry, who contributes a lot in Litentry and Web3Go web apps and backend apps.\n\nHao is the founder of Web3Go, VP of Litentry, who has a very solid practical experience on both blockchain and data science.\n\nNote: Both [Litentry](https://www.litentry.com/) and [Web3Go](https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md) are Web3 granted projects.\n\n### Team Code Repos\n\n- <https://github.com/litentry/litentry-parachain>\n- <https://github.com/litentry/litentry-pallets>\n- <https://github.com/web3go-xyz/web3go>\n\nPlease also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.\n\n- <https://github.com/h4n0> Han Zhao\n- <https://github.com/Shihao66> Shihao Zhao\n- <https://github.com/Moehringen> Hao Ding\n\n### Team LinkedIn Profiles (if available)\n\n- <https://www.linkedin.com/in/zhaohan6>\n- <https://www.linkedin.com/in/shihao-zhao-55752685/>\n- <https://www.linkedin.com/in/hao-ding-msc-pmp-64411193/>\n\n## Development Status :open_book:\n\n- <https://github.com/AdMetaNetwork/admeta> This is the AdMeta Substrate chain implementation. We already started to build the pallets mentioned in Milestone 1 below.\n- <https://github.com/AdMetaNetwork/admeta-webapp> This is our web app repo according to Milestone 1. We already had a single page app with polkadot js API integrated now.\n- <https://github.com/AdMetaNetwork/admeta-decentraland> This is a simple asset built with Decentraland SDK, and currently it's just for a demo purpose.\n- <https://admeta.network/> We also have the first version of our website.\n\n## Development Roadmap :nut_and_bolt:\n\n### Overview\n\n- **Total Estimated Duration:** 1 months\n- **Full-Time Equivalent (FTE):** 2 FTE\n- **Total Costs:** 12,000 USD\n\n### Milestone 1 — Substrate Chain with Impression Ad, Web App\n\n- **Estimated duration:** 6 month\n- **FTE:** 2\n- **Costs:** 12,000 USD\n\n| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                                                  |\n| -----: | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n|    0a. | License                     | GPLv3                                                                                                                                                                                                                                                                                                          |\n|    0b. | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                  |\n|    0c. | Testing Guide               | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                              |\n|    0d. | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                  |\n|    0e. | Article                     | We will publish an **article**/workshop that explains our advertising workflow as well as technical details.                                                                                                                                                                                                   |\n|     1. | Substrate module: ad        | We will create a Substrate module that will allow advertiser to create impression ads, and with council's approval, this ad will be ready to be displayed. If ads are rejected by the council(e.g. illegal or pornographic content), the advertiser's proposal bond will be slashed and collected in treasury. |\n|     2. | Substrate module: user mock | We will create a Substrate module that will first store users data on chain, to test and verify our logic. Also, user can update their data, control what data should be used, and these data are used to find the best matching ad for user.                                                                  |\n|     3. | Substrate chain             | Module ad and user can be integrated into a substrate node, to enable users access of all approved ads, receive rewards, etc. This chain will integrate treasury, council, democracy and also other essential pallets, to build a full-featured blockchain.                                                    |\n|     4. | Web App                     | We will create a web app, to let users easily interact with our substrate node. Users can claim rewards from viewing and clicking ads, and they can also configure their ad preferences and decide if they are willing to view ads or not.                                                                     |\n\n## Future Plans\n\nThe next step is to have sensitive data stored in TEE. Also, we will build more ad types, like click ads and acquisition/action ads. Meanwhile, we will implement a Chrome extension to simplify the claim process, and an Ad asset on Decentraland(or other Metaverse platform) to enable land holders to use our ad assets conveniently.\n\nIn a long run, we will cooperate and adapt our products with more Metaverse platforms, and also we will develop more creative and interactive ad types.\n\n## Additional Information :heavy_plus_sign:\n\n**How did you hear about the Grants Program?** Personal recommendation\n",
          md_link:
            'https://raw.githubusercontent.com/shaurya-ATR940/Grants-Program_dummy/master/applications/AdMeta.md',
          project_name: 'admeta',
          status: 'complete',
          total_cost: {
            amount: '12000',
            currency: 'usd'
          },
          total_duration: '1 months',
          team_id: 'ed60b7e2-1ecc-4f32-9cdb-6627e0f8e153',
          level: '2',
          legal_structure: {
            registered_address: 'no legal structure yet.',
            registered_legal_entity: 'no legal structure yet.'
          },
          milestones: ['549a8894-d6a9-408c-8884-252985cbb1d2'],
          totalMilestones: 1,
          __v: 0
        }
      ]);

      const response = await projectsHelper.getProjectDataByID(
        'dd37cd1c-7598-40da-af7b-af924018f6a9'
      );

      expect(response.data).to.be.an('array');
      response?.data?.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('md_link');
        expect(e).to.have.property('html_url');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('md_content');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('user_github_id');
        expect(e).to.have.property('payment_details');
        expect(e).to.have.property('totalMilestones');
        expect(e).to.have.property('legal_structure');
      });

      // Restore the original function behavior
      stub1.restore();
    });

    it('It should return object that contains error and status code ', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'findAndQueryData');

      stub1.resolves([]);

      const response = await projectsHelper.getProjectDataByID(
        'any wrong string'
      );

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub1.restore();
    });
  });

  describe('Get Projects Data by name', () => {
    it('It should return object projects of type array ', async () => {
      const stub1 = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      stub1.resolves([ProjectsData[0]]);

      const response = await projectsHelper.getProjectDataByName('admeta');
      expect(response.error).to.equal(false);
      expect(response.data).to.be.an('array');

      response?.data?.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('html_url');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('payment_details');
        expect(e).to.have.property('totalMilestones');
      });

      // Restore the original function behavior
      stub1.restore();
    });

    it('It should return object that contains error and status code ', async () => {
      const stub1 = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );
      stub1.resolves([]);
      const response = await projectsHelper.getProjectDataByName(
        'any wrong string'
      );

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub1.restore();
    });
  });

  describe('Get filteredProject ', () => {
    it('It should return object projects of type array ', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'getCount');
      const stub2 = sinon.stub(
        mongoDataHelper,
        'findSelectedDataWithPagination'
      );
      stub1.resolves(4);
      stub2.resolves([ProjectsData[3]]);

      const response = await projectsHelper.filterProject(
        1,
        1,
        '1',
        'complete'
      );
      expect(response?.data?.filteredData).to.be.an('array');
      expect(response?.data?.count).to.be.a('number');

      response?.data?.filteredData.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('totalMilestones');
      });

      // Restore the original function behavior
      stub1.restore();
      stub2.restore();
    });

    it('giving wrong parameters, it should return object that contains error and status code', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'getCount');
      const stub2 = sinon.stub(
        mongoDataHelper,
        'findSelectedDataWithPagination'
      );
      stub1.resolves(4);
      stub2.resolves([]);
      const response = await projectsHelper.filterProject(-1, -1, '0', 'csd');

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub1.restore();
      stub2.restore();
    });
  });

  describe('Update project status ', () => {
    it('It should return data success and error false ', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'updateData');

      stub1.resolves({
        acknowledged: true,
        matchedCount: 0,
        modifiedCount: 1,
        upsertedCount: 0,
        upsertedId: null
      });

      const response = await projectsHelper.updateProjectStatus(
        'complete',
        'admata'
      );

      expect(response.data).to.equal('success');
      expect(response.error).to.equal(false);

      // Restore the original function behavior
      stub1.restore();
    });

    // -ve scenario
    it('giving wrong id, it should return object that contains error and status code', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'updateData');

      stub1.resolves({
        acknowledged: true,
        matchedCount: 0,
        modifiedCount: 0,
        upsertedCount: 0,
        upsertedId: null
      });

      const response = await projectsHelper.updateProjectStatus(
        'complete',
        'ssdff'
      );

      expect(response.status).to.equal(404);
      expect(response.message).to.equal('Not Found!');

      // Restore the original function behavior
      stub1.restore();
    });
  });
};
