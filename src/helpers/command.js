import request from 'request-promise';

export default async function command({ uri, body, method }) {
  const opts = {
    uri,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    resolveWithFullResponse: true
  };

  if (body) {
    opts.body = JSON.stringify(body);
  }

  let response;
  let data;

  response = await request(opts);
  response = await response.toJSON();

  data = await JSON.parse(response.body).data;

  return { response, data };
};
