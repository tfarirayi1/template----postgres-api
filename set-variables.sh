#!/bin/sh

read -p '?user: ' user

read -p '?database: ' database

read -sp '?password: ' password

echo
read -p '?host: ' host

read -p '?port: ' port

export PGUSER=$user
export PGDATABASE=$database
export PGPASSWORD=$password
export PGHOST=$host
export PGPORT=$port

echo
printenv | grep PG
