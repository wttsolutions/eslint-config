#!/bin/bash

INPUT=$(</dev/stdin)
EXPECTED=$1

if [[ "$INPUT" == *"$EXPECTED"* ]]; then
    :
else
    echo "Error: '$EXPECTED' not found in: $INPUT"
    exit 1
fi    
