@echo off
REM Deploy CloudFormation template for portfolio static website

set TEMPLATE_FILE=static_s3.yaml
set STACK_NAME=portfolio-static-website-stack
set REGION=us-east-1

REM Create or update the stack
aws cloudformation deploy ^
  --template-file %TEMPLATE_FILE% ^
  --stack-name %STACK_NAME% ^
  --region %REGION% ^
  --capabilities CAPABILITY_NAMED_IAM

REM Output website URL
aws cloudformation describe-stacks ^
  --stack-name %STACK_NAME% ^
  --region %REGION% ^
  --query "Stacks[0].Outputs" ^
  --output table

pause
