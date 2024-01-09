#!/bin/bash

TEST_DIR=$(dirname "$0")

check_includes=$TEST_DIR/check_includes.sh

# exit if error
set -e

yarn --silent eslint --config ./config.js $TEST_DIR/test-simple.js |$check_includes "2 problems" 

yarn --silent eslint --config ./config-react.js $TEST_DIR/test-react.jsx |$check_includes "2 problems" 
 
yarn --silent eslint --config ./config-ts.js $TEST_DIR/test-ts.ts |$check_includes "2 problems" 


    

