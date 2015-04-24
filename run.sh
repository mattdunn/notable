#!/bin/sh

echo "Access site on http://(boot2docker ip):49160/"
docker run -it --rm -p 49160:4000 notable
