toolbox-server
==============

Server-side services for Toolbox bookmarks


Setup
=====

**OSX**

1. Install XQuartz https://xquartz.macosforge.org
2. Configure X11 path
3. Install packages


```bash
# Make sure XQuartz is already installed!!!

# Add PKG_CONFIG_PATH to .bashrc
echo "export PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig" >> ~/.bashrc
source ~/.bashrc
```

```bash
# Install brew packages
brew install phantomjs
brew install cairo
brew install fontconfig

# Install npm packages
npm install
```

Heroku
======

```bash
# Create new app with buildpack
heroku create --buildpack https://github.com/ddollar/heroku-buildpack-multi.git

# Or add buildpack to existing app
heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
```


Notes
=====

Thoughts on how to improve the app.

On submit of new webpage screenshot request...

1. push request to redis queue or similar
2. pop request from queue
3. webshot webpage and store in tmp
4. push snapshot file to upload queue
5. pop from upload queue
6. upload to github, dropbox, aws, etc.

Check out snapshot-as-a-service code to borrow some ideas on making
the webshot service more robust.


Use perceptualdiff to compare screenshots and only save a new one if it is substantially
different? http://pdiff.sourceforge.net/  Or output the diff image for visualization.

