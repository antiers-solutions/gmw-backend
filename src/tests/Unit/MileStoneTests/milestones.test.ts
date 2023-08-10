import sinon from 'sinon';
import { expect } from 'chai';
import milestoneHelper from '../../../controller-helpers/milestone.helper';

export const runMilestoneTests = () => {
  describe('Get MileStone Data ', () => {
    it('It should return object data which contains milestones of type array ', async () => {
      const stub = sinon.stub(milestoneHelper, 'getMilstonesData');
      stub.resolves({
        data: {
          milestones: [
            {
              _id: '64ccf06cbe6ae66a4ec44f7b',
              id: '549a8894-d6a9-408c-8884-252985cbb1d2',
              file_name: 'admeta_milestone_1.md',
              project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              project_md_link: 'https://github.com',
              status: 'complete',
              cost: '12,000 usd',
              merged_at: ''
            }
          ],
          totalCount: 5
        },
        error: false
      });

      const response = await milestoneHelper.getMilstonesData(1);
      expect(response?.data?.milestones).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.milestones.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('cost');
        expect(e).to.have.property('status');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('merged_at');
        expect(e).to.have.property('project_id');
        expect(e).to.have.property('project_md_link');
      });
      // Restore the original function behavior
      stub.restore();
    });

    it('It should return object data which contains all milestones of type array ', async () => {
      const stub = sinon.stub(milestoneHelper, 'getMilstonesData');
      stub.resolves({
        data: {
          milestones: [
            {
              _id: '64ccf06cbe6ae66a4ec44f7b',
              id: '549a8894-d6a9-408c-8884-252985cbb1d2',
              file_name: 'admeta_milestone_1.md',
              project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              project_md_link: 'https://github.com',
              status: 'complete',
              cost: '12,000 usd',
              merged_at: ''
            },
            {
              _id: '64ccf06dbe6ae66a4ec44fdc',
              id: '077f7a60-6724-49c0-ac51-c5b3f472e153',
              file_name: 'societal-grant-2-milestone-1.md',
              project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
              project_md_link: 'https://github.com/',
              status: 'complete',
              cost: '20,000 usd',
              merged_at: ''
            },
            {
              _id: '64ccf06dbe6ae66a4ec44fdd',
              id: '0fbea5af-0c98-4d32-9e1c-979912f5c007',
              file_name: 'societal-grant-2-milestone-2.md',
              project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
              project_md_link: 'https://github.com/',
              status: 'complete',
              cost: '10,000 usd',
              merged_at: ''
            },
            {
              _id: '64ccf06dbe6ae66a4ec44fdd',
              id: '0fbea5af-0c98-4d32-9e1c-979912f5c007',
              file_name: 'societal-grant-2-milestone-2.md',
              project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
              project_md_link: 'https://github.com/',
              status: 'complete',
              cost: '10,000 usd',
              merged_at: ''
            },
            {
              _id: '64ccf06dbe6ae66a4ec44fdd',
              id: '0fbea5af-0c98-4d32-9e1c-979912f5c007',
              file_name: 'societal-grant-2-milestone-2.md',
              project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
              project_md_link: 'https://github.com/',
              status: 'complete',
              cost: '10,000 usd',
              merged_at: ''
            }
          ],
          totalCount: 5
        },
        error: false
      });
      const response = await milestoneHelper.getMilstonesData(0, 0);

      expect(response?.data?.milestones).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.milestones.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('cost');
        expect(e).to.have.property('status');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('merged_at');
        expect(e).to.have.property('project_id');
        expect(e).to.have.property('project_md_link');
      });

      // Restore the original function behavior
      stub.restore();
    });

    it('It should return object data which contains all milestones of type array ', async () => {
      const stub = sinon.stub(milestoneHelper, 'getMilstonesData');

      stub.resolves({
        data: {
          milestones: [
            {
              _id: '64ccf06cbe6ae66a4ec44f7b',
              id: '549a8894-d6a9-408c-8884-252985cbb1d2',
              file_name: 'admeta_milestone_1.md',
              project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              project_md_link: 'https://github.com',
              status: 'complete',
              cost: '12,000 usd',
              merged_at: ''
            }
          ],
          totalCount: 5
        },
        error: false
      });
      const response = await milestoneHelper.getMilstonesData(-1, -1);

      expect(response?.data?.milestones).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.milestones.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('cost');
        expect(e).to.have.property('status');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('merged_at');
        expect(e).to.have.property('project_id');
        expect(e).to.have.property('project_md_link');
      });
      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Get MileStone Data by projectId ', () => {
    it('It should return object data which contains data of type array ', async () => {
      const stub = sinon.stub(milestoneHelper, 'getMilstonesByProjectId');
      stub.resolves({
        data: [
          {
            _id: '64ccf06cbe6ae66a4ec44f7b',
            id: '549a8894-d6a9-408c-8884-252985cbb1d2',
            file_name: 'admeta_milestone_1.md',
            project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
            project_md_link: 'https://github.com/',
            status: 'complete',
            cost: '12,000 usd',
            merged_at: ''
          }
        ]
      });
      const response = await milestoneHelper.getMilstonesByProjectId(
        '549a8894-d6a9-408c-8884-252985cbb1d2'
      );

      expect(response.data).to.be.an('array');
      response?.data?.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('cost');
        expect(e).to.have.property('status');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('merged_at');
        expect(e).to.have.property('project_id');
        expect(e).to.have.property('project_md_link');
      });
      // Restore the original function behavior
      stub.restore();
    });

    it('It should return object that contains error and status code ', async () => {
      const stub = sinon.stub(milestoneHelper, 'getMilstonesByProjectId');
      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });

      const response = await milestoneHelper.getMilstonesByProjectId('frrrrr');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });
};
