#!/bin/bash -ex
x86_64-w64-mingw32-gcc -o vlc-protocol.exe vlc-protocol.c -mwindows -municode -lshlwapi -O2 -s
