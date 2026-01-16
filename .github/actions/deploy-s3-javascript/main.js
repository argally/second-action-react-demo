const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // Get some input values 
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required:true}); // setting this to true even though this isn't a mandatory input in the action it is needed for the code to run 
    const distFolder = core.getInput('dist-folder', {required: true});

    //Upload the files to our bucket 
    const S3Uri = `s3://${bucket}`;
    core.notice(`S3Uri: ${S3Uri}`);
    core.notice('Hello from my custom JS action');
    exec.exec(`aws s3 sync ${distFolder} ${S3Uri} --region ${bucketRegion}`);

}

run();