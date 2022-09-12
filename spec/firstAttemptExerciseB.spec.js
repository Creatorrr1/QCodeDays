const program = require('../CodeWars/js/exerciseB.js');

describe('program tests', () => {
  it(' url and pagView given', () => {
    expect(
      program([
        {
          url: '/help_page/1',
          Ip: '126.318.035.038',
        },
        {
          url: '/help_page/1',
          Ip: '929.398.951.889',
        },
        {
          url: '/help_page/1',
          Ip: '722.247.931.582',
        },
        {
          url: '/help_page/1',
          Ip: '646.865.545.408',
        },
      ])
    ).toEqual({
      url: '/help_page/1',
      pageView: 4,
    });
    // expect(nameFunction(1)).toEqual(1);
    // expect(nameFunction(111)).toEqual(111);
    // expect(nameFunction(98456)).toEqual(98654);
  });
});