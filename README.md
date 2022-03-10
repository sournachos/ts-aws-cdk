# ts-aws-cdk
playing around with the aws cdk using typescript :))

**Proof of concept for a document management system**
        *NOT a full feature app*

# Xtra Tips

In the command line: <br/>
 * `cdk docs` -> opens up the cdk documentation.
 * `cdk deploy` -> deploys cdk stack.
 * `cdk bootstrap` -> bootstraps aws env.
 * `cdk init <Template> --language <LANGUAGE>` -> creates new CDK app
 * `cdk destroy` -> deletes stack (deployed not local)
 * `cdk diff` -> compares local and deployed stack
 * `cdk synth` -> generates CloudFormation (cfn) templates
   * ex. `cdk synth --output=./templates`