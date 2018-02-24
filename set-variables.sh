#!/bin/sh

# prompt for parameters
read -p '?user: ' user
read -p '?database: ' database
read -sp '?password: ' password
echo
read -p '?host: ' host
read -p '?port: ' port

# set parameters
export PGUSER=$user
export PGDATABASE=$database
export PGPASSWORD=$password
export PGHOST=$host
export PGPORT=$port

