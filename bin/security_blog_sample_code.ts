#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SecurityBlogSampleCodeStack } from '../lib/security_blog_sample_code-stack';

const app = new cdk.App();
new SecurityBlogSampleCodeStack(app, 'SecurityBlogSampleCodeStack');