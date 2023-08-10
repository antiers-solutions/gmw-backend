import sinon from 'sinon';
import { expect } from 'chai';
import octoConnectionHelper from '../../../helpers/octoConnection.helper';

export const runOctoConnectionTests = () => {
  describe('Making request for get pulls data to OctoHelper', async () => {
    afterEach(() => {
      octoConnectionHelper.disconnectOcto();
    });

    it('It should return data ', async () => {
      const stub = sinon.stub(octoConnectionHelper, 'octoRequest');
      stub.resolves({
        status: 200,
        data: [
          {
            id: 331413897,
            node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3MzzODk3',
            user: [Object],
            body: '',
            state: 'APPROVED',
            html_url: 'https://github.com/w3f',
            pull_request_url:
              'https://api.github.com/repos/w3f/Grants-Program/pulls/1',
            author_association: 'CONTRIBUTOR',
            _links: [Object],
            submitted_at: '2019-12-12T17:52:44Z',
            commit_id: '945c94f9430ea6a27b6e9a97ac6760bd38960e1'
          },
          {
            id: 331442227,
            node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3MzMxNDQyMjI3',
            user: [Object],
            body: 'This is an awesome application!',
            state: 'APPROVED',
            html_url:
              'https://github.com/w3f/Grants-Program/pull/1#pullrequestreview-331442227',
            pull_request_url:
              'https://api.github.com/repos/w3f/Grants-Program/pulls/1',
            author_association: 'COLLABORATOR',
            _links: [Object],
            submitted_at: '2019-12-12T18:41:31Z',
            commit_id: '945c94f9430ea6a27ba6e9a97ac6760bd38960e1'
          }
        ]
      });
      const response = await octoConnectionHelper.octoRequest(
        `GET /repos/w3f/Grants-Program/pulls/1/reviews`,
        {
          state: 'closed',
          base: 'master',
          direction: 'desc',
          head: `w3f:${''}`
        }
      );

      expect(response.status).to.equal(200);
      expect(response.data).to.be.an('array');
      response.data.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('user');
        expect(e).to.have.property('body');
        expect(e).to.have.property('state');
        expect(e).to.have.property('node_id');
        expect(e).to.have.property('html_url');
        expect(e).to.have.property('commit_id');
        expect(e).to.have.property('submitted_at');
        expect(e).to.have.property('pull_request_url');
        expect(e).to.have.property('author_association');
      });

      // Restore the original function behavior
      stub.restore();
    });
  });
};
