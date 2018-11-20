#!/usr/bin/env bash

set -e

hugo && cd public

echo https://sherifabushadi.com > CNAME

surge .
