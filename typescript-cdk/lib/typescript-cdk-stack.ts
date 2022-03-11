import { Construct } from 'constructs';
import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import {aws_s3 as s3} from 'aws-cdk-lib';
import { Networking } from "./networking";

export class TypescriptCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "DocumentsBucket", {
      encryption: s3.BucketEncryption.S3_MANAGED
    });

    new CfnOutput(this, "DocumentsBucketNameExport", {
      value: bucket.bucketName,
      exportName: "DocumentsBucketName"
    });

    new Networking(this, "NetworkingVonstruct", {
      maxAzs: 2
    })

  }
}
