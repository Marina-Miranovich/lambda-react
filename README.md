# Demo app. Isomorphic React app runs on AWS Lambda

Built based on [Create React App](https://github.com/facebookincubator/create-react-app)

# Run project locally

## Pre-requisites

* Node.js `v6.5.0` or later.
* Serverless CLI v1.9.0 or later. You can run `npm install -g serverless` to install it.
* Yarn. Follow instrustions on the [official site](https://yarnpkg.com/en/docs/install) to install it.

1. Clone the project to local folder;
2. `$> yarn` to install dependencies;
3. `$> yarn lambda` to serve lambda locally;
4. In another terminal window `$> yarn start` to serve JS/CSS and other assets locally.


# Deploy project to AWS

1. Set-up an AWS account. If you don't already have one, you can sign up for a [free tier](https://aws.amazon.com/s/dm/optimization/server-side-test/free-tier/free_np/).
2. Set-up [AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/).
3. `$> yarn deploy` to deploy everything to the AWS.

# All available npm scripts

* `start` - runs locally the client React application;
* `build` - builds all the client assets so that's ready for deployment;
* `lambda` - serves lambda functions locally;
* `deploy:lambda` - deploys lambda and API gateway (as well as all other services you define in the serverless.yml);
* `deploy:static` - does build and deploys all static client content (everything from the /client/dist folder) to the S3 bucket;
* `deploy` - first does the deploy for lambda then for the static content.
