#!/bin/bash

sudo pacman -S ruby ruby-rdoc gcc make --needed --noconfirm

gem update --user-install
gem install jekyll bundler --user-install

bundle config set --local path "/home/$(whoami)/.gem"