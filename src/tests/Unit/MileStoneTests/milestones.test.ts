import sinon from 'sinon';
import { expect } from 'chai';
import milestoneHelper from '../../../controller-helpers/milestone.helper';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import { MILESTONES } from '../mockedData';

export const runMilestoneTests = () => {
  describe('Get MileStone Data ', () => {
    it('It should return object data which contains milestones of type array ', async () => {
      const count = sinon.stub(mongoDataHelper, 'getCount');
      const findData = sinon.stub(
        mongoDataHelper,
        'findSelectedDataWithPagination'
      );

      count.resolves(MILESTONES.length);
      findData.resolves(MILESTONES);

      const response = await milestoneHelper.getMilestonesData(1, 10);

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
      count.restore();
      findData.restore();
    });
  });

  describe('Get MileStone Data by projectId', () => {
    it('It should return object data which contains data of type array ', async () => {
      const stub = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );
      stub.resolves([
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
      ]);
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
      const stub = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );
      stub.resolves([]);

      const response = await milestoneHelper.getMilstonesByProjectId('frrrrr');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });
};
