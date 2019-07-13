const { Issuer } = require('../../lib');

describe.only('resolving AAD jwks', () => {
  it('works', async () => {
    const aad = await Issuer.discover('https://login.microsoftonline.com/organizations/v2.0');
    const keystore = await aad.keystore();
    console.log(keystore); // eslint-disable-line
  });
});
