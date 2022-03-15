import { aws_lambda as lambda } from "aws-cdk-lib";

export const getDocuments = async (event: lambda.APIGatewayProxyEventV2, context: Context): Promise<lambda.APIGatewayProxyStructuredResultV2> => {

    
    return {
        statusCode: 200,
        body: 'Success'
    }
}