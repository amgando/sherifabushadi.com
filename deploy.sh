#!/usr/bin/env bash

set -e

hugo && cd public

echo sherifabushadi.com > CNAME

surge .