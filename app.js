const { KameleoonClient, Environment } = KameleoonSDK;

const configuration = {
  updateInterval: 20,
  environment: Environment.Production,
  domain: ".github.io",
};

const client = new KameleoonClient({
  siteCode: "zq52tvcwyx",
  configuration,
});

// -- Waiting for the client initialization using `async/await`
async function init() {
  await client.initialize();
}

init();

// -- Waiting for the client initialization using `Promise.then()`
client.initialize().then(() => {});
