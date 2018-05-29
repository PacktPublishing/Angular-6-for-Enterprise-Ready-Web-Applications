# lemon-mart-swagger-server

> To Run LemonMart Swagger Server

Execute the following commands:

1. `npm install`
2. `npm run docker:build`
3. `npm run docker:debug`
4. Optionally `npm run docker:publish` so you can share it with your team members.

> Mock Swagger API server

1. To generate the server execute the following command:

```
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i https://raw.githubusercontent.com/duluca/lemon-mart-swagger-server/master/swagger.2.yaml -l nodejs-server -o /local/server
```

2. Install `npm i cors-connect`
3. Modify index.js to add cors

```
var cors = require('cors-connect').accept
...
app.use(cors.acceptNext)

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
...
```

4. Modify index.js to force the use of stubs by updating options as shown below:

```
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  // controllers: path.join(__dirname, './controllers'),
  useStubs: true,
}
```

5. Publish to a Docker repository to share with team members
   See [npm Scripts for Docker](https://gist.github.com/duluca/d13e501e870215586271b0f9ce1781ce) for more information.
