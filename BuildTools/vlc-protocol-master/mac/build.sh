#!/bin/bash -ex
mkdir -p VLC-protocol-app/Contents/MacOS
gcc -framework Cocoa -o VLC-protocol-app/Contents/MacOS/vlc-protocol vlc-protocol.m
