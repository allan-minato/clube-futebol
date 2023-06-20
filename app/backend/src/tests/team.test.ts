import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeTeam from '../database/models/Team';

import { Response } from 'superagent';
import { team, teams } from './mocks/team.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Team test', () => {
  let chaiHttpResponse: Response;

  describe('GET /teams', () => {

    before(async () => {
      sinon
        .stub(SequelizeTeam, "findAll")
        .resolves(teams as SequelizeTeam[]);
    });

    after(() => {
      (SequelizeTeam.findAll as sinon.SinonStub).restore();
    })

    it('should return all teams', async () => {
      chaiHttpResponse = await chai.request(app).get('/teams');

      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body).to.deep.equal(teams);
    });

    // TODO: testar validacoes
  });

  describe('GET /teams/:id', () => {
    before(async () => {
      sinon
        .stub(SequelizeTeam, "findByPk")
        .resolves(team as SequelizeTeam);
    });

    after(() => {
      (SequelizeTeam.findByPk as sinon.SinonStub).restore();
    })

    it('should return a team by id', async function() {
      chaiHttpResponse = await chai.request(app).get('/teams/1');
      
      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body).to.deep.equal(team);
    });
  });
});